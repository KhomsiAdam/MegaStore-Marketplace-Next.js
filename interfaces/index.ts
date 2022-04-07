import { NextPage } from "next";
import { ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  Layout: ReactNode;
};

export interface CategoriesItems {
  iconName: string;
  categoryName: string;
}

export interface Categories {
  id: number;
  name: string;
  icon: any;
}

export interface SubCategories {
  id: number;
  parent: string;
  name: string;
  options: Array<string>;
}

export interface Colors {
  name: string;
  class: string;
  selectedClass: string;
}

// temporary interface
export interface Product {
  id: string;
  name: string;
  store: any;
  category: Array<any>;
  brand: any;
  price: number;
  discount: number;
  stock: number;
  description: string;
  thumbnails: any[];
}
