import Storybook from '@storybook/react';

// Components
import { Indicator } from './index';

export default {
  title: 'Components/Indicator',
  component: Indicator
};

const Template: Storybook.ComponentStory<typeof Indicator> = args => (
  <Indicator />
);

export const Default = Template.bind({});
