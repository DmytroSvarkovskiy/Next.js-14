import { privateInstance } from '@/lib';
import {
  TAdviceParams,
  TAdviceResponse,
  TCategoriesResponse,
  TCategoryParams,
  TOneAdvice,
  TPoliticsResponse,
  TSubCategoryParams,
  TSubCategoryResponse,
  TSubscriptionParams,
  TTagsResponse,
} from './types';

const baseURL = process.env.NEXT_PUBLIC_URL_USER;

export const getAdvice = async (params: TAdviceParams) => {
  const { data } = await privateInstance.get<TAdviceResponse>('/ads/api/v1/user/advice', {
    params: { ...params },
  });
  return data;
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
  const res = await fetch(`${baseURL}/ads/api/v1/user/advice-subcategories?${query}`, {
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
  const res = await fetch(`${baseURL}/ads/api/v1/user/tags?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['categories'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TTagsResponse = await res.json();

  return data;
};

export const createASubscription = async (data: TSubscriptionParams) => {
  const res = await fetch(`${baseURL}/user/api/v1/mailing-list`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['subscription'] },
  });
  if (!res.ok) {
    throw new Error('Failed to post data');
  }
};

export const getPoliticsText = async () => {
  const res = await fetch(`${baseURL}/administrative/api/v1/user/sectionInfo`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['politicsInfo'] },
  });
  if (!res.ok) {
    throw new Error('Failed to post data');
  }
  const data: TPoliticsResponse = await res.json();

  return data;
};
