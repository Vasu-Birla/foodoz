import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU.DASHBOARD',
    icon: 'activity-outline',
    link: '/pages/dashboard'
  },
  {
    title: 'MENU.USERS',
    icon: 'person-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/users/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/users/list',
      },
    ],
  },
  {
    title: 'MENU.CATEGORIES',
    icon: 'list-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/categories/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/categories/list',
      },
    ],
  },
  {
    title: 'MENU.BANNERS',
    icon: 'flag-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/banners/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/banners/list',
      },
    ],
  },
  {
    title: 'MENU.COUPONS',
    icon: 'gift-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/coupons/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/coupons/list',
      },
    ],
  },
  {
    title: 'MENU.DELIVERY_PROFILE',
    icon: 'car-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/deliveries/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/deliveries/list',
      },
    ],
  },
  {
    title: 'MENU.VENDORS',
    icon: 'people-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/vendors/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/vendors/list',
      },
    ],
  },
  {
    title: 'MENU.PRODUCTS',
    icon: 'award-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/products/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/products/list',
      },
    ],
  },
  {
    title: 'MENU.ORDERS',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/orders/list',
      },
    ],
  },
  {
    title: 'MENU.TRANSACTIONS',
    icon: 'layers-outline',
    children: [
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/transactions/list',
      },
      {
        title: 'MENU.PAYOUTS',
        link: '/pages/transactions/payouts/list',
      },
    ],
  },
  {
    title: 'MENU.PAYMENT_METHODS',
    icon: 'credit-card-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/paymentmethods/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/paymentmethods/list',
      },
    ],
  },
  {
    title: 'MENU.FAQS',
    icon: 'question-mark-circle-outline',
    children: [
      {
        title: 'MENU.ADD_NEW',
        link: '/pages/faqs/add',
      },
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/faqs/list',
      },
    ],
  },
  {
    title: 'MENU.SUPPORT',
    icon: 'phone-call-outline',
    children: [
      {
        title: 'MENU.VIEW_ALL',
        link: '/pages/supports/list',
      },
    ],
  },
  {
    title: 'MENU.SETTINGS',
    icon: 'settings-outline',
    children: [
      {
        title: 'MENU.APPLICATION',
        link: '/pages/settings/edit',
      },
      {
        title: 'MENU.SYSTEM',
        link: '/pages/settings/system',
      }
    ],
  },
];
