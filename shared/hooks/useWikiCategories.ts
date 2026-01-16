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
        const categories = await getCategories(language);
        // Sort by displayOrder
        const sortedCategories = categories
          .sort((a, b) => a.displayOrder - b.displayOrder);
        setCategories(sortedCategories);
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
