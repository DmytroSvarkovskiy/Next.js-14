import useSWR from 'swr';
import { getAdvice } from './api';
import { TAdviceParams } from './types';

export const useGetAdvice = (params?: TAdviceParams) => {
  const {
    data: adviceData,
    isLoading: adviceLoading,
    error: adviceError,
  } = useSWR(params ? ['getAdvice', params] : null, ([, params]) => getAdvice(params));
  return { adviceData, adviceLoading, adviceError };
};
