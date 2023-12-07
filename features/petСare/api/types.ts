export type TOneAdvice = {
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
};
export type TAdviceResponse = {
  totalCount: number;
  models: TOneAdvice[];
};
export type TAdviceParams = {
  title?: string;
  category?: string;
  subcategory?: string;
  page: string;
  limit?: string;
  order?: string;
  sortBy?: string;
};
