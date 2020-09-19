import React, { FC, useMemo } from 'react';
import { data, moodName } from 'features/data';
import { PageProps, useNavigator } from 'features/navigator';
import {
  PanelHeader,
  PanelHeaderBack,
  FixedLayout,
  Tabbar,
  TabbarItem,
  Avatar,
  RichCell,
} from '@vkontakte/vkui';
import Content from 'ui/atoms/content';
import './styles.scss';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';

import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon20ViewOutline from '@vkontakte/icons/dist/20/view_outline';

const PostsPage: FC<PageProps> = ({ id }) => {
  const { params, goBack } = useNavigator<{ topicId: number }>(id);

  const topic = useMemo(
    () => data.find((topic) => topic.id === params.topicId),
    [params.topicId],
  );

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={goBack} />}
        separator={false}
      >
        {topic.name}
      </PanelHeader>
      <Content bottom={'48px'}>
        {topic.posts.map((post, index) => (
          <div className={'Post'} key={index}>
            <RichCell
              disabled
              before={<Avatar size={44} src={post.author.photo} />}
              after={<Icon24MoreHorizontal />}
              caption={`${post.date} • ${moodName[post.mood]}`}
            >
              {post.author.name}
            </RichCell>
            <div className={'Post__content'}>
              <img src={post.picture} alt={''} />
            </div>
            <div className={'Post__footer'}>
              <div className={'PostFooterUnit'}>
                <div className={'PostFooterItem'}>
                  <Icon24LikeOutline />
                  <div className={'PostFooterItem__counter'}>{post.likes}</div>
                </div>
                <div className={'PostFooterItem'}>
                  <Icon24CommentOutline />
                  <div className={'PostFooterItem__counter'}>
                    {post.comments}
                  </div>
                </div>
                <div className={'PostFooterItem'}>
                  <Icon24ShareOutline />
                  <div className={'PostFooterItem__counter'}>
                    {post.reposts}
                  </div>
                </div>
              </div>
              <div className={'PostFooterUnit'}>
                <div className={'PostFooterItem'}>
                  <Icon20ViewOutline />
                  <div className={'PostFooterItem__counter'}>{post.views}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Content>
      <FixedLayout>
        <Tabbar>
          <TabbarItem selected={true} data-story="feed" text="Новости">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem data-story="services" text="Сервисы">
            <Icon28ServicesOutline />
          </TabbarItem>
          <TabbarItem data-story="messages" label="12" text="Сообщения">
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem data-story="clips" text="Клипы">
            <Icon28ClipOutline />
          </TabbarItem>
          <TabbarItem data-story="profile" text="Профиль">
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </FixedLayout>
    </>
  );
};

export default PostsPage;
