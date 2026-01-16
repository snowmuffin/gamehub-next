/**
 * Dynamic Wiki menu generator
 */

import type { WikiCategory } from "@/shared/types/wiki.types";

const FormsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M168,224a40.04,40.04,0,0,1-40-40V152H88a40.04,40.04,0,0,1-40-40V72A40.04,40.04,0,0,1,88,32h40a40.04,40.04,0,0,1,40,40v40h40a40.04,40.04,0,0,1,40,40v40a40.04,40.04,0,0,1-40,40Z"
      opacity="0.2"
    ></path>
    <path
      d="M168,224a40.04,40.04,0,0,1-40-40V152H88a40.04,40.04,0,0,1-40-40V72A40.04,40.04,0,0,1,88,32h40a40.04,40.04,0,0,1,40,40v40h40a40.04,40.04,0,0,1,40,40v40a40.04,40.04,0,0,1-40,40Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
  </svg>
);

/**
 * Generate dynamic Wiki menu item from categories
 */
export const generateWikiMenuItem = (
  categories: WikiCategory[],
  language: string = "ko"
) => {
  // If no categories, return menu with link to main wiki page
  if (!categories || categories.length === 0) {
    return {
      title: "Wiki",
      icon: FormsIcon,
      type: "link",
      path: "/wiki",
      active: false,
      selected: false
    };
  }

  // Generate children from categories
  const children = categories.map((category) => {
    return {
      title: category.title, // Already localized by backend
      type: "link",
      path: `/wiki/categories/${category.slug}`,
      menusub: true,
      active: false,
      selected: false
    };
  });

  return {
    title: "Wiki",
    icon: FormsIcon,
    type: "sub",
    active: false,
    selected: false,
    children
  };
};
