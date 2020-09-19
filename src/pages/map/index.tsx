import './styles.scss';
import Leaflet, { DivIcon } from 'leaflet';
import React, { FC, useState, useMemo } from 'react';
import { PageProps, navigate } from 'features/navigator';
import { data, Topic, moodIcon } from 'features/data';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import { debounce } from 'throttle-debounce';
import { FixedLayout, Search, HorizontalScroll } from '@vkontakte/vkui';
import Bottom from 'ui/atoms/bottom';

const position: [number, number] = [55.753826, 37.620833];

interface ITopic extends Topic {
  divIcon: DivIcon;
}

const topics = data.map<ITopic>((topic) => ({
  ...topic,
  divIcon: new DivIcon({
    html: `<div><h2>${topic.icon}</h2><p>${topic.name}</p></div>`,
    className: 'MoodMarker',
  }),
}));

const goFromMap = debounce(10, true, (e: Leaflet.LeafletMouseEvent) => {
  navigate('posts', { topicId: e.sourceTarget.options.id });
});

const goFromSheet = debounce(
  10,
  true,
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const topicId = parseInt(e.currentTarget.dataset.id);
    navigate('posts', { topicId });
  },
);

const MapPage: FC<PageProps> = () => {
  const [search, setSearch] = useState('');

  const searchedTopics = useMemo(() => {
    if (!search) return topics;
    const _search = search.trim().toLowerCase();

    return topics.filter((topic) =>
      topic.name.toLowerCase().startsWith(_search),
    );
  }, [search]);

  return (
    <>
      <LeafletMap
        center={position}
        zoom={13}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {searchedTopics.map((topic) => (
          <Marker
            key={topic.id}
            position={topic.position}
            icon={topic.divIcon}
            onclick={goFromMap}
            id={topic.id}
          />
        ))}
      </LeafletMap>
      <FixedLayout vertical={'bottom'} style={{ zIndex: 999 }}>
        <div className={'BottomSheet'}>
          <Bottom>
            <Search
              placeholder={'Поиск по теме и настроению'}
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <HorizontalScroll>
              <div className={'MoodHorizontalScroll'}>
                {searchedTopics.map((topic) => (
                  <div
                    className={'MoodHorizontalScroll__item MoodCell'}
                    key={topic.id}
                    data-id={topic.id}
                    onClick={goFromSheet}
                  >
                    <div className={'MoodCell__icon MoodCellIcon'}>
                      <div className={'MoodCellIcon__bage'}>
                        {moodIcon[topic.mood]}
                      </div>
                      {topic.icon}
                    </div>
                    <div className={'MoodCell__desc'}>{topic.name}</div>
                  </div>
                ))}
              </div>
            </HorizontalScroll>
          </Bottom>
        </div>
      </FixedLayout>
    </>
  );
};

export default MapPage;
