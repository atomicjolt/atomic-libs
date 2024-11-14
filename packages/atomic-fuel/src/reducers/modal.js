import { Constants } from '../actions/modal';

const initialState = {
  currentOpenModal: ''
};

export default (state = initialState, action) => {

  switch (action.type) {
    case Constants.OPEN_MODAL: {
      return { currentOpenModal: action.modalName };
    }
    case Constants.CLOSE_MODAL: {
      return { currentOpenModal: '' };
    }
    default: return state;
  }
};
