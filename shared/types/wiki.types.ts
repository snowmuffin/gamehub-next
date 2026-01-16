/**
 * Wiki system type definitions
 */

export interface WikiCategoryTranslation {
  language: string;
  name: string;
  description?: string;
}

export interface WikiCategory {
  id: number;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  translations: WikiCategoryTranslation[];
}

export interface WikiCategoryWithCount extends WikiCategory {
  article_count: number;
}

export interface WikiArticleTranslation {
  language: string;
  title: string;
  content: string;
  summary?: string;
}

export interface WikiArticle {
  id: number;
  category_id: number;
  display_order: number;
  is_active: boolean;
  view_count: number;
  author_steam_id?: string;
  created_at: string;
  updated_at: string;
  translations: WikiArticleTranslation[];
}

export interface WikiArticleWithCategory extends WikiArticle {
  category: WikiCategory;
}

export interface WikiCategoryWithArticles extends WikiCategory {
  articles: WikiArticle[];
}

// API Request/Response types
export interface GetCategoriesResponse {
  categories: WikiCategoryWithCount[];
}

export interface GetCategoryArticlesResponse {
  category: WikiCategory;
  articles: WikiArticle[];
}

export interface GetArticleResponse {
  article: WikiArticleWithCategory;
}

// Admin CRUD DTOs
export interface CreateCategoryDto {
  display_order?: number;
  is_active?: boolean;
  translations: Array<{
    language: string;
    name: string;
    description?: string;
  }>;
}

export interface UpdateCategoryDto {
  display_order?: number;
  is_active?: boolean;
  translations?: Array<{
    language: string;
    name: string;
    description?: string;
  }>;
}

export interface CreateArticleDto {
  category_id: number;
  display_order?: number;
  is_active?: boolean;
  translations: Array<{
    language: string;
    title: string;
    content: string;
    summary?: string;
  }>;
}

export interface UpdateArticleDto {
  category_id?: number;
  display_order?: number;
  is_active?: boolean;
  translations?: Array<{
    language: string;
    title: string;
    content: string;
    summary?: string;
  }>;
}
