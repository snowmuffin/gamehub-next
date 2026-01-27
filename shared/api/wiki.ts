/**
 * Wiki API functions
 * Matches backend NestJS API structure
 */

import { apiRequest } from "./request";
import type {
  CreateArticleDto,
  CreateCategoryDto,
  GetArticleDetailResponse,
  GetCategoriesResponse,
  GetCategoryWithArticlesResponse,
  UpdateArticleDto,
  UpdateCategoryDto,
  WikiArticle,
  WikiCategory
} from "@/shared/types/wiki.types";

// ===== Public APIs (No authentication required) =====

/**
 * Get all wiki categories
 * @param lang Language code (ko, en)
 */
export const getCategories = async (lang = "ko"): Promise<GetCategoriesResponse> => {
  console.log(`[getCategories] Requesting with lang=${lang}`);
  const response = await apiRequest.get<GetCategoriesResponse>(
    `/space-engineers/wiki/categories?lang=${lang}`
  );
  console.log(`[getCategories] Response:`, response.data);
  return response.data;
};

/**
 * Get category with articles by slug
 * @param categorySlug Category slug
 * @param lang Language code (ko, en)
 */
export const getCategoryWithArticles = async (
  categorySlug: string,
  lang = "ko"
): Promise<GetCategoryWithArticlesResponse> => {
  console.log(`[getCategoryWithArticles] Requesting with categorySlug=${categorySlug}, lang=${lang}`);
  const response = await apiRequest.get<GetCategoryWithArticlesResponse>(
    `/space-engineers/wiki/categories/${categorySlug}?lang=${lang}`
  );
  console.log(`[getCategoryWithArticles] Response:`, response.data);
  return response.data;
};

/**
 * Get article detail
 * @param categorySlug Category slug
 * @param articleSlug Article slug
 * @param lang Language code (ko, en)
 */
export const getArticleDetail = async (
  categorySlug: string,
  articleSlug: string,
  lang = "ko"
): Promise<GetArticleDetailResponse> => {
  console.log(`[getArticleDetail] Requesting with categorySlug=${categorySlug}, articleSlug=${articleSlug}, lang=${lang}`);
  const response = await apiRequest.get<GetArticleDetailResponse>(
    `/space-engineers/wiki/categories/${categorySlug}/articles/${articleSlug}?lang=${lang}`
  );
  console.log(`[getArticleDetail] Response:`, response.data);
  return response.data;
};

// ===== Admin APIs (JWT + GAME_ADMIN role required) =====

/**
 * Get all categories with full details (Admin only)
 */
export const getAdminCategories = async (): Promise<WikiCategory[]> => {
  const response = await apiRequest.auth.get<WikiCategory[]>("/space-engineers/wiki/admin/categories");
  return response.data;
};

/**
 * Get all articles with full details (Admin only)
 * @param categoryId Optional category ID filter
 */
export const getAdminArticles = async (categoryId?: number): Promise<WikiArticle[]> => {
  const response = await apiRequest.auth.get<WikiArticle[]>(
    "/space-engineers/wiki/admin/articles",
    categoryId ? { categoryId } : undefined
  );
  return response.data;
};

/**
 * Create a new category (Admin only)
 */
export const createCategory = async (data: CreateCategoryDto): Promise<WikiCategory> => {
  const response = await apiRequest.auth.post<WikiCategory>("/space-engineers/wiki/admin/categories", data);
  return response.data;
};

/**
 * Update a category (Admin only)
 */
export const updateCategory = async (
  categoryId: number,
  data: UpdateCategoryDto
): Promise<WikiCategory> => {
  const response = await apiRequest.auth.put<WikiCategory>(
    `/space-engineers/wiki/admin/categories/${categoryId}`,
    data
  );
  return response.data;
};

/**
 * Delete a category (Admin only)
 */
export const deleteCategory = async (categoryId: number): Promise<void> => {
  await apiRequest.auth.delete(`/space-engineers/wiki/admin/categories/${categoryId}`);
};

/**
 * Create a new article (Admin only)
 */
export const createArticle = async (data: CreateArticleDto): Promise<WikiArticle> => {
  const response = await apiRequest.auth.post<WikiArticle>("/space-engineers/wiki/admin/articles", data);
  return response.data;
};

/**
 * Update an article (Admin only)
 */
export const updateArticle = async (
  articleId: number,
  data: UpdateArticleDto
): Promise<WikiArticle> => {
  const response = await apiRequest.auth.put<WikiArticle>(
    `/space-engineers/wiki/admin/articles/${articleId}`,
    data
  );
  return response.data;
};

/**
 * Delete an article (Admin only)
 */
export const deleteArticle = async (articleId: number): Promise<void> => {
  await apiRequest.auth.delete(`/space-engineers/wiki/admin/articles/${articleId}`);
};
