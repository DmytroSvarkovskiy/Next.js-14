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
  category?: string[];
  subcategory?: string[];
  page: string;
  limit?: string;
  order?: string;
  sortBy?: string;
};

export type TCategoryParams = {
  limit?: string;
  page?: string;
  title?: string;
  order?: string;
  sortBy?: string;
};

export type TSubCategoryParams = {
  limit?: string;
  page?: string;
  title?: string;
  order?: string;
  sortBy?: string;
  category?: string;
};

export type TOneCategory = {
  _id: string;
  title: {
    value: string;
    lang: string;
    _id: {};
  }[];

  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TCategoriesResponse = {
  models: TOneCategory[];
  totalCount: number;
};

export type TOneSubcategory = {
  id: string;
  title: {
    value: string;
    lang: string;
    _id: {};
  }[];
  category: {
    title: {
      value: string;
      lang: string;
      _id: {};
    }[];

    image: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type TSubCategoryResponse = {
  models: TOneSubcategory[];
  totalCount: number;
};

export type TOneTag = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: {
    value: string;
    lang: string;
    _id: string;
  }[];
  __v: number;
};
