import { navigate } from 'features/navigator';
import bridge from '@vkontakte/vk-bridge';

/*bridge.subscribe(({ detail }) => {
  if (detail.type === 'VKWebAppUpdateConfig') {
    const schemeAttribute = document.createAttribute('scheme');
    schemeAttribute.value = detail.data.scheme || 'bright_light';

    document.body.attributes.setNamedItem(schemeAttribute);
  }
});*/

const bootstrap = () => {
  navigate('map', {}, true);
  //navigate('posts', { topicId: 1 }, true);
  bridge.send('VKWebAppInit').catch(console.error);
};

bootstrap();
