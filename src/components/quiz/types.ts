import { ReactNode } from "react";

export interface Subcategory {
  title: string;
  topics: string[];
  questionCount: number;
  progress: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  subcategories: Subcategory[];
}