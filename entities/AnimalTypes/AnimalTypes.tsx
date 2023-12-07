import { getCategories } from '@/features/petСare/api/api';
import { getCurrentLocale } from '@/locales/server';
import { Container } from '@/shared/Container/Container';
import Image from 'next/image';

export const AnimalTypes = async () => {
  const baseURL = process.env.NEXT_PUBLIC_URL_USER;
  const lang = getCurrentLocale();
  const data = await getCategories({ limit: '100', page: '1' });

  return (
    <Container as="ul">
      {data.models.map(item => (
        <Container key={item._id} as="li">
          <Image alt="image" src={item.image} width={32} height={26} />
          <p>{item.title[lang === 'uk' ? 0 : 1].value}</p>
        </Container>
      ))}
    </Container>
  );
};
