'use client';
import { useCurrentLocale, useI18n } from '@/locales/client';
import { TagsList, TagsWrap } from './styled';
import Image from 'next/image';
import { TTag } from '../Title/types';
import { useRouter } from 'next/navigation';
import { AdvicePetActions } from '@/features';
import { useAppDispatch } from '@/shared/hooks';

export const BottomTags = ({ tags }: { tags: TTag[] }) => {
  const locale = useCurrentLocale();
  const t = useI18n();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const indexLang = (tag: TTag) => {
    return tag?.title.findIndex(title => title.lang === locale) !== -1
      ? tag?.title.findIndex(title => title.lang === locale)
      : 0;
  };
  const onTagClick = (id: string) => {
    dispatch(AdvicePetActions.setOneTag(id));
    dispatch(AdvicePetActions.openFilter());
    router.push('/advices');
  };

  return (
    <TagsWrap>
      <h3>{t('tags')}</h3>
      <TagsList>
        {tags.map(item => (
          <li key={item._id} onClick={() => onTagClick(item._id)}>
            <Image alt="tag_image" width={20} height={20} src="/blueFoot.svg" />
            <p>{item.title[indexLang(item)].value}</p>
          </li>
        ))}
      </TagsList>
    </TagsWrap>
  );
};
