import { getCategories } from '@/features/petСare/api/api';
import { getCurrentLocale } from '@/locales/server';
import { Container } from '@/shared/Container/Container';
import { CategoryImage, CategoryItem } from './styled';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';

export const AnimalTypes = async () => {
  const baseURL = process.env.NEXT_PUBLIC_URL_USER;
  const lang = getCurrentLocale();
  const data = await getCategories({ limit: '100', page: '1' });

  return (
    <PageWrapper as="ul" $gap="16px" $flexWrap="wrap">
      {data.models.map(item => (
        <CategoryItem key={item._id}>
          <CategoryImage
            alt="image"
            src={`${baseURL}/public/ads-categories/${item.image}`}
            width={26}
            height={32}
          />
          <p>{item.title[lang === 'uk' ? 0 : 1].value}</p>
        </CategoryItem>
      ))}
    </PageWrapper>
  );
};
