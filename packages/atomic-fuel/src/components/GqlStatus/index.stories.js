import React from 'react';

import StoryWrapper from '../StoryWrapper';
import GqlStatus from './index.jsx';

export default {
  title: 'GqlStatus',
  component: GqlStatus
}

const Template = (args) => {
  return (
    <StoryWrapper>
      <GqlStatus {...args} />
    </StoryWrapper>
  );
}

export const Loading = Template.bind({});

Loading.args = {
  loading: true,
  loadingMessage: 'Please wait a moment kind sir'
}
