/**
 * Wiki API functions
 */

import { apiRequest } from "./request";
import type {
  CreateArticleDto,
  CreateCategoryDto,
  GetArticleResponse,
  GetCategoriesResponse,
  GetCategoryArticlesResponse,
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
  const response = await apiRequest.get<GetCategoriesResponse>("/space-engineers/wiki/categories", {
    params: { lang }
  });
  return response.data;
};

/**
 * Get articles by category
 * @param categoryId Category ID
 * @param lang Language code (ko, en)
 */
export const getCategoryArticles = async (
  categoryId: number,
  lang = "ko"
): Promise<GetCategoryArticlesResponse> => {
  const response = await apiRequest.get<GetCategoryArticlesResponse>(
    `/space-engineers/wiki/categories/${categoryId}/articles`,
    { params: { lang } }
  );
  return response.data;
};

/**
 * Get article detail
 * @param articleId Article ID
 * @param lang Language code (ko, en)
 */
export const getArticle = async (articleId: number, lang = "ko"): Promise<GetArticleResponse> => {
  const response = await apiRequest.get<GetArticleResponse>(`/space-engineers/wiki/articles/${articleId}`, {
    params: { lang }
  });
  return response.data;
};

// ===== Admin APIs (JWT + GAME_ADMIN role required) =====

/**
 * Create a new category (Admin only)
 */
export const createCategory = async (data: CreateCategoryDto): Promise<WikiCategory> => {
  const response = await apiRequest.post<WikiCategory>("/space-engineers/wiki/admin/categories", data);
  return response.data;
};

/**
 * Update a category (Admin only)
 */
export const updateCategory = async (
  categoryId: number,
  data: UpdateCategoryDto
): Promise<WikiCategory> => {
  const response = await apiRequest.patch<WikiCategory>(
    `/space-engineers/wiki/admin/categories/${categoryId}`,
    data
  );
  return response.data;
};

/**
 * Delete a category (Admin only)
 */
export const deleteCategory = async (categoryId: number): Promise<void> => {
  await apiRequest.delete(`/space-engineers/wiki/admin/categories/${categoryId}`);
};

/**
 * Create a new article (Admin only)
 */
export const createArticle = async (data: CreateArticleDto): Promise<WikiArticle> => {
  const response = await apiRequest.post<WikiArticle>("/space-engineers/wiki/admin/articles", data);
  return response.data;
};

/**
 * Update an article (Admin only)
 */
export const updateArticle = async (
  articleId: number,
  data: UpdateArticleDto
): Promise<WikiArticle> => {
  const response = await apiRequest.patch<WikiArticle>(`/space-engineers/wiki/admin/articles/${articleId}`, data);
  return response.data;
};

/**
 * Delete an article (Admin only)
 */
export const deleteArticle = async (articleId: number): Promise<void> => {
  await apiRequest.delete(`/space-engineers/wiki/admin/articles/${articleId}`);
};
