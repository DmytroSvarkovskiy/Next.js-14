export type TTitleProps = {
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
  title: string;
};
export type TTag = {
  _id: string;
  title: {
    value: string;
    lang: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: 0;
};
