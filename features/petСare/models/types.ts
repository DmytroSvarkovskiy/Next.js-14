export type TAnimalTypes = 'cats' | 'dogs' | 'birds' | 'rodents' | 'fish' | 'exotic';

export type TInitialState = {
  sortBy: string | null;
  page: number;
  limit: string;
  order: number;
  search: string;
  categories: string[] | null;
  tags: string[] | null;
  languages: string;
};
