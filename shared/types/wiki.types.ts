/**
 * Wiki system type definitions
 * Matches backend API structure
 */

export interface WikiCategoryTranslation {
  title: string;
  description?: string;
}

export interface WikiCategory {
  id: number;
  slug: string;
  icon?: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  title: string; // Localized by backend based on ?lang parameter
  description?: string; // Localized by backend
}

export interface WikiCategoryWithArticles extends WikiCategory {
  articles: WikiArticle[];
}

export interface WikiArticleTranslation {
  title: string;
  content: string;
  summary?: string;
}

export interface WikiArticle {
  id: number;
  slug: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  title: string; // Localized
  content?: string; // Localized (only in detail view)
  summary?: string; // Localized
}

export interface WikiArticleDetail extends WikiArticle {
  content: string;
  category: {
    id: number;
    slug: string;
    title: string;
  };
}

// API Response types
export type GetCategoriesResponse = WikiCategory[];
export type GetCategoryWithArticlesResponse = WikiCategoryWithArticles;
export type GetArticleDetailResponse = WikiArticleDetail;

// Admin CRUD DTOs
export interface CreateCategoryDto {
  slug: string;
  icon?: string;
  displayOrder?: number;
  ko: WikiCategoryTranslation;
  en: WikiCategoryTranslation;
}

export interface UpdateCategoryDto {
  slug?: string;
  icon?: string;
  displayOrder?: number;
  isPublished?: boolean;
  ko?: WikiCategoryTranslation;
  en?: WikiCategoryTranslation;
}

export interface CreateArticleDto {
  categoryId: number;
  slug: string;
  displayOrder?: number;
  ko: WikiArticleTranslation;
  en: WikiArticleTranslation;
}

export interface UpdateArticleDto {
  categoryId?: number;
  slug?: string;
  displayOrder?: number;
  isPublished?: boolean;
  ko?: WikiArticleTranslation;
  en?: WikiArticleTranslation;
}
