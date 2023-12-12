export type TOneAdvice = {
  _id: string;
  title: {
    value: string;
    lang: string;
    _id: string;
  }[];
  description: { value: string; lang: string; _id: string }[];
  category?: {
    title: { value: string; lang: string; _id: string }[];
    image: string;
    _id: string;
  };
  subcategory: {
    title: {
      value: string;
      lang: string;
      _id: string;
    }[];
    _id: string;
    color: string;
  };
  tags: {
    _id: string;
    title: {
      value: string;
      lang: string;
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: 0;
  }[];
  images: string[];
  saves: number;
  answers: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
  _id: string;
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
  color: string;
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
export type TTagsResponse = {
  models: TOneTag[];
  totalCount: number;
};

export type TSubscriptionParams = {
  name: string;
  email: string;
  categories: string[];
};
export type TPoliticsType = 'privacy' | 'about' | 'conditions';

export type TPoliticsResponse = {
  sectionInfo: {
    _id: string;
    name: TPoliticsType;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    title_ru: string;
    title_ua: string;
  }[];
  total: number;
};
