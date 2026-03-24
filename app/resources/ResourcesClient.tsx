'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { ResourceListing } from '@/lib/guides';

interface Props {
  resources: ResourceListing[];
}

const PER_PAGE = 9;

function getDayFromResource(r: ResourceListing): number | null {
  if (!r.thumbnail) return null;
  const m = r.thumbnail.match(/Day[+\s]*(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}

function getTagLabel(cat: string): string {
  if (cat === 'student') return 'Student Resources';
  if (cat === 'blogs') return 'Blogs';
  return 'Custom';
}

export default function ResourcesClient({ resources }: Props) {
  const [currentFilter, setCurrentFilter] = useState('student');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const list = resources.filter((r) => {
      if (currentFilter !== 'all' && r.category !== currentFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (r.title + ' ' + r.subtitle).toLowerCase().includes(q);
      }
      return true;
    });
    list.sort((a, b) => {
      const pA = a.priority != null ? a.priority : Infinity;
      const pB = b.priority != null ? b.priority : Infinity;
      if (pA !== pB) return pA - pB;
      const dayA = getDayFromResource(a);
      const dayB = getDayFromResource(b);
      if (dayA != null && dayB != null) return dayA - dayB;
      if (dayA != null) return -1;
      if (dayB != null) return 1;
      return (a.title || '').localeCompare(b.title || '');
    });
    return list;
  }, [resources, currentFilter, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const filters = [
    { key: 'all', label: 'All', cls: 'resources-filter-btn--all' },
    { key: 'student', label: 'Student Resources', cls: 'resources-filter-btn--student' },
    { key: 'blogs', label: 'Blogs', cls: 'resources-filter-btn--blogs' },
    { key: 'custom', label: 'Custom', cls: 'resources-filter-btn--custom' },
  ];

  return (
    <>
      <div className="resources-filters" data-scroll-reveal>
        <div className="resources-filter-btns">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`resources-filter-btn ${f.cls}${currentFilter === f.key ? ' active' : ''}`}
              onClick={() => { setCurrentFilter(f.key); setCurrentPage(1); }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="resources-search-wrap">
          <input
            type="search"
            className="resources-search-input"
            placeholder="Search all resources"
            aria-label="Search all resources"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
          />
          <button type="button" className="resources-search-btn" aria-label="Search">&#x2315;</button>
        </div>
      </div>

      <section className="resources-grid-section" data-scroll-reveal>
        <div className="resources-grid">
          {pageItems.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#767676', fontSize: '16px', padding: '48px 0' }}>
              No resources match your search.
            </p>
          ) : (
            pageItems.map((r) => {
              const hasImage = r.thumbnail && r.thumbnail.length > 0;
              return (
                <Link key={r.id} href={`/guides/${r.id}`} className="resources-card-link">
                  <article className={`resources-card${!hasImage ? ' resources-card--no-image' : ''}`}>
                    {hasImage ? (
                      <div
                        className="resources-card-image"
                        style={{ backgroundImage: `url('${r.thumbnail}')` }}
                      />
                    ) : (
                      <div className="resources-card-image" />
                    )}
                    <div className="resources-card-body">
                      <h3 className="resources-card-title">{r.title}</h3>
                      {r.subtitle && <p className="resources-card-subtitle">{r.subtitle}</p>}
                      <span className={`resources-card-tag resources-card-tag--${r.category}`}>
                        {getTagLabel(r.category)}
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })
          )}
        </div>
        {totalPages > 1 && (
          <nav className="resources-pagination" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <span
                key={page}
                role="button"
                tabIndex={0}
                className={page === safePage ? 'active' : ''}
                onClick={() => setCurrentPage(page)}
                onKeyDown={(e) => { if (e.key === 'Enter') setCurrentPage(page); }}
              >
                {page}
              </span>
            ))}
          </nav>
        )}
      </section>
    </>
  );
}
