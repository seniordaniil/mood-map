import { Topic } from './types';

export const moodIcon = {
  'high-energy': '😜',
  negative: '🙁',
  'low-energy': '😴',
  positive: '😃',
};

export const moodName = {
  'high-energy': 'энергичное настроение',
  negative: 'негативное настроение',
  'low-energy': 'неэнергичное настроение',
  positive: 'позитивное настроение',
};

export const data: Topic[] = [
  {
    id: 1,
    name: 'Музыка',
    icon: '🎧',
    position: [55.747179, 37.631476],
    mood: 'positive',
    posts: [
      {
        author: {
          name: 'Татьяна Плуталова',
          photo:
            'https://sun9-70.userapi.com/c636327/v636327034/2be84/TYzZpZ8BL0k.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://i01.fotocdn.net/s118/2d76849637485acb/public_pin_l/2693647701.jpg',
        mood: 'positive',
        likes: 10,
        comments: 12,
        reposts: 0,
        views: 3,
      },
      {
        author: {
          name: 'Олег Илларионов',
          photo:
            'https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'positive',
        likes: 5,
        comments: 6,
        reposts: 2,
        views: 4,
      },
      {
        author: {
          name: 'Евгений Котляров',
          photo:
            'https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1',
        },
        date: 'вчера',
        picture:
          'https://static.novayagazeta.ru/storage/content/pictures/40789/content__002_Moscow.JPG',
        mood: 'positive',
        likes: 7,
        comments: 8,
        reposts: 2,
        views: 20,
      },
    ],
  },
  {
    id: 2,
    name: 'Фильмы',
    icon: '🍿',
    position: [55.744244, 37.593228],
    mood: 'positive',
    posts: [
      {
        author: {
          name: 'Олег Илларионов',
          photo:
            'https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'positive',
        likes: 5,
        comments: 6,
        reposts: 2,
        views: 4,
      },
      {
        author: {
          name: 'Татьяна Плуталова',
          photo:
            'https://sun9-70.userapi.com/c636327/v636327034/2be84/TYzZpZ8BL0k.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://i01.fotocdn.net/s118/2d76849637485acb/public_pin_l/2693647701.jpg',
        mood: 'positive',
        likes: 10,
        comments: 12,
        reposts: 0,
        views: 3,
      },
      {
        author: {
          name: 'Евгений Котляров',
          photo:
            'https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1',
        },
        date: 'вчера',
        picture:
          'https://static.novayagazeta.ru/storage/content/pictures/40789/content__002_Moscow.JPG',
        mood: 'positive',
        likes: 7,
        comments: 8,
        reposts: 2,
        views: 20,
      },
    ],
  },
  {
    id: 3,
    name: 'Осень',
    icon: '🍂',
    position: [55.763906, 37.593228],
    mood: 'low-energy',
    posts: [
      {
        author: {
          name: 'Антон Циварев',
          photo:
            'https://sun9-47.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://img.gazeta.ru/files3/857/13028857/upload-TASS_39260720-pic4_zoom-1500x1500-5416.jpg',
        mood: 'low-energy',
        likes: 6,
        comments: 8,
        reposts: 1,
        views: 33,
      },
      {
        author: {
          name: 'Олег Илларионов',
          photo:
            'https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'low-energy',
        likes: 5,
        comments: 6,
        reposts: 2,
        views: 4,
      },
      {
        author: {
          name: 'Евгений Котляров',
          photo:
            'https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1',
        },
        date: 'вчера',
        picture: 'https://img.rosbalt.ru/photobank/d/1/f/5/y3MkJcQw-580.jpg',
        mood: 'low-energy',
        likes: 7,
        comments: 8,
        reposts: 2,
        views: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Работа',
    icon: '👔',
    position: [55.790862, 37.595495],
    mood: 'high-energy',
    posts: [
      {
        author: {
          name: 'Антон Циварев',
          photo:
            'https://sun9-47.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://www.ilm.ru/sites/default/files/2020-03/_dsc0331_37_etazh_175m2.jpg',
        mood: 'high-energy',
        likes: 33,
        comments: 23,
        reposts: 3,
        views: 333,
      },
      {
        author: {
          name: 'Иван Гусев',
          photo:
            'https://sun9-9.userapi.com/U_neC4C0b0k2TacpGigQf_4cbGKN7Z7tj4QzHQ/WCj1fIGbtZ8.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'high-energy',
        likes: 5,
        comments: 6,
        reposts: 2,
        views: 4,
      },
      {
        author: {
          name: 'Евгений Котляров',
          photo:
            'https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://img.rosbalt.ru/photobank/d/1/f/5/y3MkJcQw-580.jpg',
        mood: 'high-energy',
        likes: 7,
        comments: 8,
        reposts: 2,
        views: 20,
      },
    ],
  },
  {
    id: 5,
    name: 'Карантин',
    icon: '😷',
    position: [55.693977, 37.659843],
    mood: 'negative',
    posts: [
      {
        author: {
          name: 'Миша Андриевский',
          photo:
            'https://sun9-52.userapi.com/c846017/v846017974/114170/WFIMAZh8H1o.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://i01.fotocdn.net/s118/2d76849637485acb/public_pin_l/2693647701.jpg',
        mood: 'negative',
        likes: 0,
        comments: 0,
        reposts: 0,
        views: 3,
      },
      {
        author: {
          name: 'Илья Таратухин',
          photo:
            'https://sun9-19.userapi.com/yGUuBADgtYRKU5yN_Vb3UkZL6PEaY3OWTBCEeA/bGpg5AL0WiM.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'negative',
        likes: 1,
        comments: 1,
        reposts: 1,
        views: 5,
      },
      {
        author: {
          name: 'Евгений Котляров',
          photo:
            'https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1',
        },
        date: 'вчера',
        picture:
          'https://static.novayagazeta.ru/storage/content/pictures/40789/content__002_Moscow.JPG',
        mood: 'negative',
        likes: 2,
        comments: 2,
        reposts: 2,
        views: 20,
      },
    ],
  },
  {
    id: 6,
    name: 'IT',
    icon: '💻',
    position: [55.767874, 37.633922],
    mood: 'high-energy',
    posts: [
      {
        author: {
          name: 'Андрей Рогозов',
          photo:
            'https://sun9-27.userapi.com/c837536/v837536492/2f070/HT6-ucTq-cQ.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://i01.fotocdn.net/s118/2d76849637485acb/public_pin_l/2693647701.jpg',
        mood: 'positive',
        likes: 100,
        comments: 23,
        reposts: 21,
        views: 500,
      },
      {
        author: {
          name: 'Вадим Дорохов',
          photo:
            'https://sun9-60.userapi.com/c855032/v855032963/15d4f9/XOQY9NSlP5A.jpg?ava=1',
        },
        date: 'сегодня',
        picture: 'https://b1.m24.ru/c/1350167.580xp.jpg',
        mood: 'positive',
        likes: 5,
        comments: 6,
        reposts: 2,
        views: 4,
      },
      {
        author: {
          name: 'Artur Stambultsian',
          photo:
            'https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1',
        },
        date: 'сегодня',
        picture:
          'https://static.novayagazeta.ru/storage/content/pictures/40789/content__002_Moscow.JPG',
        mood: 'positive',
        likes: 2,
        comments: 2,
        reposts: 2,
        views: 4,
      },
    ],
  },
];
