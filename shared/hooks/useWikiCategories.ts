/**
 * Custom hook to fetch wiki categories for navigation
 */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getCategories } from "@/shared/api/wiki";
import type { RootState } from "@/shared/redux/store";
import type { WikiCategoryWithCount } from "@/shared/types/wiki.types";

export const useWikiCategories = () => {
  const language = useSelector((state: RootState) => state.language.code);
  const [categories, setCategories] = useState<WikiCategoryWithCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await getCategories(language);
        // Filter only active categories and sort by display_order
        const activeCategories = response.categories
          .filter((cat) => cat.is_active)
          .sort((a, b) => a.display_order - b.display_order);
        setCategories(activeCategories);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch wiki categories for navigation:", err);
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
