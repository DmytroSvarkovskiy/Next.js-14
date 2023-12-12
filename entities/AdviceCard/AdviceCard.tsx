import { TOneAdvice } from '@/features/petСare/api/types';
import { ArticleCardText, AdviceCardStyled, ImageArticle, CategoryTitle } from './styled';
import Link from 'next/link';
import { useCurrentLocale } from '@/locales/client';

const AdviceCard = ({ item }: { item: TOneAdvice }) => {
  const lang = useCurrentLocale();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const indexLang =
    item.title.findIndex(title => title.lang === lang) !== -1
      ? item.title.findIndex(title => title.lang === lang)
      : 0;

  const indexSubCategoryLang =
    item.subcategory?.title?.findIndex(title => title.lang === lang) !== -1
      ? item.subcategory?.title?.findIndex(title => title.lang === lang)
      : 0;

  const baseURL = process.env.NEXT_PUBLIC_URL_USER;

  return (
    <AdviceCardStyled as="li">
      {typeof indexSubCategoryLang === 'number' && (
        <CategoryTitle $color={item?.subcategory?.color || ''}>
          {item?.title[indexSubCategoryLang || 0]?.value}
        </CategoryTitle>
      )}
      <Link href={`/advices/${item._id}`}>
        <ImageArticle alt="preview" src={`${baseURL}/public/advice/${item.images[0]}`} />
        <ArticleCardText>
          <p>{formatDate(item.createdAt)}</p>
          <h2>{item.title[indexLang].value}</h2>
        </ArticleCardText>
      </Link>
    </AdviceCardStyled>
  );
};

export default AdviceCard;
