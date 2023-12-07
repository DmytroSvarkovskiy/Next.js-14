import { privateInstance } from '@/lib';
import { TAdviceParams, TAdviceResponse, TOneAdvice } from './types';

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

export const fetchAdvice = async (params: TAdviceParams): Promise<TAdviceResponse> => {
  const query = new URLSearchParams(params).toString();
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
