import { defineTheme, directory, group, link, social } from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import faviconUrl from './public/logo.png';

export default defineTheme({
  github: 'sussy-code/world-history-project',
  navigation: [
    link('My other project', 'https://sudo-flix.lol', {
      style: 'star',
      newTab: true,
    }),
  ],
  meta: (pageMeta) => (
    <NextSeo {...{
      title: `${pageMeta.title ?? 'Netherlands'}`,
      description: pageMeta.description ?? 'Netherlands, I will maintain',
      additionalLinkTags: [
        {
          href: faviconUrl.src,
          rel: 'icon',
          type: 'image/x-icon',
        }
      ]
    }} />
  ),
  settings: {
    logo: () => <Logo />,
    backgroundPattern: 'flare',
    toc: false,
    sidebar: false,
    contentFooter: false,
    colors: {
      'primary': '#A476D9',
      'primaryLighter': '#C4ADDE',
      'primaryDarker': '#6E23C3',
      'background': '#0C0B13',
      'backgroundLighter': '#1A1726',
      'backgroundLightest': '#282438',
      'backgroundDarker': '#000000',
      'line': '#37334C',
      'text': '#8C899A',
      'textLighter': '#A6A4AE',
      'textHighlight': '#FFF'
    },
  },
  directories: [
    directory('main', {
      sidebar: [
        link('project', '/project', { icon: 'mdi:handshake' }),
        link('graph', '/graph', { icon: 'mdi:handshake' }),
      ]
    })
  ],
});
