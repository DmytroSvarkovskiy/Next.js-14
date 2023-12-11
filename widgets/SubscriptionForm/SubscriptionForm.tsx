'use client';

import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import {
  FormContainer,
  FormWrapper,
  ImageWrap,
  InputsWrap,
  SelectWrap,
  selectStyles,
} from './styled';
import useSWR from 'swr';
import { getCategories } from '@/features/petСare/api/api';
import { useCurrentLocale, useI18n } from '@/locales/client';
import { Inputs } from '@/shared/Inputs';
import { TOneCategory } from '@/features/petСare/api/types';
import Image from 'next/image';
import { Button } from '@/shared/Button/Button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TSubscriptionForm } from './types';
import Select from 'react-select';

export const SubscriptionForm = () => {
  const t = useI18n();
  const locale = useCurrentLocale();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm<TSubscriptionForm>({ mode: 'all' });

  const findLanguageIndex = (categories: TOneCategory) => {
    const index = categories.title.findIndex(title => title.lang === locale);
    if (index !== -1) {
      return index;
    }
    return 0;
  };
  const { data, isLoading } = useSWR(
    ['catogories', { limit: '100', page: '1' }],
    ([, params]) => getCategories(params),
    { revalidateOnFocus: false, keepPreviousData: true }
  );
  const onSubmit: SubmitHandler<TSubscriptionForm> = data => {
    console.log(data);
  };

  const options = data?.models.map(item => ({
    label: item.title[findLanguageIndex(item)].value,
    value: item._id,
  }));

  return (
    <PageWrapper>
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h3>{t('subscribeToNewsletter')} 💙</h3>
          <p>{t('getInterestingArticlesFromPetsHealth')}</p>
          <InputsWrap>
            <SelectWrap>
              <Inputs.Default
                required
                $error={errors.name?.message}
                key={'rtyrty'}
                placeholder={t('yourName')}
                width="100%"
                {...register('name', { required: t('thisFieldIsRequired') })}
              />
            </SelectWrap>
            <SelectWrap>
              <Inputs.Default
                required
                $error={errors.email?.message}
                key={'ttsfdg'}
                type="email"
                placeholder={t('email')}
                width="100%"
                {...register('email', { required: t('thisFieldIsRequired') })}
              />
            </SelectWrap>
            <SelectWrap>
              <Controller
                control={control}
                name="categories"
                render={({ field }) => (
                  <Select
                    isClearable={false}
                    isMulti
                    placeholder={t('typeOfPets')}
                    value={
                      options?.filter(option => field?.value?.includes(option.value)).length
                        ? options?.filter(option => field?.value?.includes(option.value))
                        : undefined
                    }
                    onChange={selectedOptions => {
                      const values = Array.isArray(selectedOptions)
                        ? selectedOptions.map(option => option.value)
                        : [];
                      field.onChange(values);
                    }}
                    options={options}
                    styles={selectStyles}
                  />
                )}
              />
            </SelectWrap>
            <Controller
              control={control}
              name="access"
              render={({ field: { value, onChange } }) => (
                <Inputs.Checkbox value={value} onChange={onChange} />
              )}
            />
          </InputsWrap>
          <Button disabled={!watch('access')} type="submit">
            {t('subscribe')}
          </Button>
        </FormContainer>
        <ImageWrap>
          <Image src="/catDog.svg" height={240} width={430} alt="animals" />
        </ImageWrap>
      </FormWrapper>
    </PageWrapper>
  );
};
