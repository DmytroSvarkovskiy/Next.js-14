export type TAdviceResponse = {
  totalCount: number;
  models: {
    _id: string;
    title: [
      {
        value: string;
        lang: string;
        _id: {};
      },
      {
        value: string;
        lang: string;
        _id: {};
      }
    ];
    image: string;
    createdAt: string;
    updatedAt: string;
  }[];
};
export type TAdviceParams = {
  title?: string;
  category?: string;
  subcategory?: string;
  page: number;
  limit?: number;
  order?: 1 | -1;
  sortBy?: string;
};
