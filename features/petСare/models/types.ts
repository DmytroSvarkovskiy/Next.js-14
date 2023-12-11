export type TInitialState = {
  limit: string;
  order: number;
  search: string;
  categories: string | null;
  subcategory: string[];
  tags: string[] | null;
  languages: string;
  visibleFilter: boolean;
};
