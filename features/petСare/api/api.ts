import { privateInstance } from '@/lib';
import { TAdviceParams, TAdviceResponse } from './types';

export const getAdvice = async (params: TAdviceParams) => {
  privateInstance.get<TAdviceResponse>('/ads/api/v1/user/advice', { params: { ...params } });
};
