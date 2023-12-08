import { getI18n } from '@/locales/server';
import { Title, Wrapper } from './styled';
import Link from 'next/link';

export const Breadcrumbs = async ({ title }: { title: string }) => {
  const t = await getI18n();
  return (
    <Wrapper $justifyContent="flex-start">
      <Link href="/advices">{t('careTips')}</Link> /{' '}
      <Title>{title.length > 15 ? title.slice(0, 15) + '...' : title}</Title>
    </Wrapper>
  );
};
