import { IMenuItem } from '../../interfaces/ComponentsRNApp/appInterfaces';

export const menuItems: IMenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen',
    },
    {
      name: 'Switches',
      icon: 'toggle-outline',
      component: 'SwitchScreen',
    },
    {
      name: 'Alerts',
      icon: 'alert-circle-outline',
      component: 'AlertScreen',
    },
    {
      name: 'Input',
      icon: 'document-text-outline',
      component: 'InputScreen',
    },
    {
      name: 'Pull to refresh',
      icon: 'refresh-outline',
      component: 'PullToRefreshScreen',
    },
    {
      name: 'Section list',
      icon: 'list-outline',
      component: 'CustomSectionListScreen',
    },
    {
      name: 'Modal',
      icon: 'copy-outline',
      component: 'ModalScreen',
    },
  ];
