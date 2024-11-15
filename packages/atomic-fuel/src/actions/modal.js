import wrapper    from '../constants/wrapper';

// Local actions
const actions = [
  'OPEN_MODAL',
  'CLOSE_MODAL'
];

export const Constants = wrapper(actions, []);

export const openModal = (modalName) => ({ type: Constants.OPEN_MODAL, modalName });

export const closeModal = () => ({ type: Constants.CLOSE_MODAL });
