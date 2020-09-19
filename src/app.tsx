import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { $state, goBack, PageProps } from 'features/navigator';
import { ConfigProvider, View, Panel } from '@vkontakte/vkui';
import { MapPage, PostsPage } from './pages';

export const App: FC = () => {
  const state = useStore($state);

  if (state.history.length < 1) return null;

  return (
    <ConfigProvider
      isWebView={process.env.NODE_ENV !== 'production' || undefined}
    >
      <View
        activePanel={state.current?.id}
        history={state.history}
        onSwipeBack={goBack}
      >
        <Page Component={MapPage} id={'map'} />
        <Page Component={PostsPage} id={'posts'} />
      </View>
    </ConfigProvider>
  );
};

interface PagePanelProps extends PageProps {
  Component: FC<PageProps>;
}

const Page: FC<PagePanelProps> = ({ id, Component }) => {
  return (
    <Panel id={id}>
      <Component id={id} />
    </Panel>
  );
};
