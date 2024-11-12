import { connect } from 'react-redux';
import * as ModalActions from '../actions/modal';


// Dont use with decorator syntax but it is a decorator non the less
export default function modalDecorator(Component, name) {
  const select = ({ modal }) => ({ isOpen: modal.currentOpenModal === name });
  return connect(select, ModalActions)(Component);
}
