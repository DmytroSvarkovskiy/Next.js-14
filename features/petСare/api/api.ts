import { privateInstance } from '@/lib';
import {
  TAdviceParams,
  TAdviceResponse,
  TCategoriesResponse,
  TCategoryParams,
  TOneAdvice,
  TSubCategoryParams,
  TSubCategoryResponse,
} from './types';

const baseURL = process.env.NEXT_PUBLIC_URL_USER;

export const getAdvice = async (params: TAdviceParams) => {
  privateInstance.get<TAdviceResponse>('/ads/api/v1/user/advice', { params: { ...params } });
};

export const getCurrentAdvice = async (id: string): Promise<TOneAdvice> => {
  const res = await fetch(`${baseURL}/ads/api/v1/user/advice/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['currentAdvice'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TOneAdvice = await res.json();

  return data;
};

export const getAdvices = async (params: TAdviceParams): Promise<TAdviceResponse> => {
  const query = JSON.stringify(params);
  const res = await fetch(`${baseURL}/ads/api/v1/user/advice?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['advices'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TAdviceResponse = await res.json();

  return data;
};

export const getCategories = async (params: TCategoryParams) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${baseURL}/ads/api/v1/user/ads-categories?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['categories'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TCategoriesResponse = await res.json();

  return data;
};

export const getSubCategories = async (params: TSubCategoryParams) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${baseURL}/ads/api/v1/user/ads-subcategories?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['categories'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TSubCategoryResponse = await res.json();

  return data;
};

export const getTags = async (params: TCategoryParams) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${baseURL}/ads/api/v1/admin/tags?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['categories'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TSubCategoryResponse = await res.json();

  return data;
};
