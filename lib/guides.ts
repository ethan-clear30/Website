import guidesData from '@/content/guides/guides.json';
import listingData from '@/content/guides/resources-listing.json';

export interface GuideSection {
  title: string;
  content: string;
}

export interface Guide {
  id: string;
  title: string;
  subtitle: string;
  sections: GuideSection[];
}

export interface ResourceListing {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  category: string;
  priority?: number;
}

export function getAllGuides(): Guide[] {
  return guidesData as Guide[];
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return (guidesData as Guide[]).find((g) => g.id === slug);
}

export function getAllSlugs(): string[] {
  return (guidesData as Guide[]).map((g) => g.id);
}

export function getResourceListings(): ResourceListing[] {
  return listingData as ResourceListing[];
}
