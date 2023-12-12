import { getCurrentLocale } from '@/locales/server';
import { TagsList, TitleWrap } from './styled';
import { TTag, TTitleProps } from './types';
import Image from 'next/image';

export const Title = ({ title, tags }: TTitleProps) => {
  const locale = getCurrentLocale();

  const indexLang = (tag: TTag) => {
    return tag?.title.findIndex(title => title.lang === locale) !== -1
      ? tag?.title.findIndex(title => title.lang === locale)
      : 0;
  };
  return (
    <TitleWrap>
      <TagsList>
        {tags.map(item => (
          <li key={item._id}>
            <Image alt="tag_image" width={20} height={20} src="/littleFoot.svg" />
            <p>{item.title[indexLang(item)].value}</p>
          </li>
        ))}
      </TagsList>
      <h2>{title}</h2>
    </TitleWrap>
  );
};
