// Const
import { ROUTES } from 'src/constants/routes';

export const PHONE = {
  pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
  maxLength: '14',
};

export const LOCAL_STORAGE_KEYS = {
  USER_INFO: 'userInfo',
  REFERRAL_CODE: 'referralCode',
};

export const POST_SOURES = {
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
};

export const NAVIGATION = [
  { label: 'Benefits', href: ROUTES.HOME },
  { label: 'Community', href: ROUTES.COMMUNITY },
  { label: 'About us', href: ROUTES.ABOUT_US },
];

export const POST_CARD_DESCRIPTION_MAX_WORDS = 20;

export const POST_CARD_LIST = [
  {
    user: {
      name: 'Matt Wallace',
      username: 'MattWallace888',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-one.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: 'assets/images/community/card-post-one.webp',
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname555',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-two.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: 'assets/images/community/card-post-two.webp',
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname123',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-three.webp',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas vitae, volutpat ut neque. Pellentesque massa id condimentum pellentesque at netus quam sed. Sit eu ultricies massa, eros, aliquam. Vivamus in enim, mattis adipiscing massa pretium.',
    thumbnailUrl: 'assets/images/community/card-post-three.webp',
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Matt Wallace',
      username: 'MattWallace888',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-one.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: 'assets/images/community/card-post-one.webp',
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname555',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-two.webp',
    },
    description:
      'Dogecoin to $5 is inevitable when Visa/PTD release this #Dogecoin debit card that you can theoretically spend almost anywhere!',
    thumbnailUrl: 'assets/images/community/card-post-two.webp',
    source: 'twitter',
    url: '#',
  },
  {
    user: {
      name: 'Nick Name',
      username: 'nickname123',
      profileUrl: '#',
      avatarUrl: 'assets/images/community/avatar/avatar-three.webp',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas vitae, volutpat ut neque. Pellentesque massa id condimentum pellentesque at netus quam sed. Sit eu ultricies massa, eros, aliquam. Vivamus in enim, mattis adipiscing massa pretium.',
    thumbnailUrl: 'assets/images/community/card-post-three.webp',
    source: 'twitter',
    url: '#',
  },
];
