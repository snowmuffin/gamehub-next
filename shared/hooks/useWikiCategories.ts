/**
 * Custom hook to fetch wiki categories for navigation
 */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getCategories } from "@/shared/api/wiki";
import type { RootState } from "@/shared/redux/store";
import type { WikiCategory } from "@/shared/types/wiki.types";

export const useWikiCategories = () => {
  const language = useSelector((state: RootState) => state.language.code);
  const [categories, setCategories] = useState<WikiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }

    const fetchCategories = async () => {
      try {
        setLoading(true);
        console.log(`[useWikiCategories] Fetching categories with language: ${language}`);
        const categories = await getCategories(language);
        console.log(`[useWikiCategories] Received categories:`, categories);
        // Sort by displayOrder (use id as fallback)
        const sortedCategories = categories
          .sort((a, b) => (a.displayOrder ?? a.id) - (b.displayOrder ?? b.id));
        setCategories(sortedCategories);
        setError(null);
      } catch (err: any) {
        console.error("[useWikiCategories] Failed to fetch wiki categories:", err);
        console.error("[useWikiCategories] Error details:", {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          url: err.config?.url
        });
        setError(err as Error);
        // Set empty array on error to prevent breaking navigation
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [language]);

  return { categories, loading, error };
};
