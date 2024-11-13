import wrapper from '../constants/wrapper';

const actions = [
  'POST_MESSAGE',
];

export const Constants = wrapper(actions, []);

export const postMessage = (message, broadcast = false) => ({
  type: Constants.POST_MESSAGE,
  postMessage: true,
  broadcast,
  message,
});
