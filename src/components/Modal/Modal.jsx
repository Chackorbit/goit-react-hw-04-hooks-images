import { useEffect } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import Loader from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, ...props }) {
  // componentWillUnmount() {
  //   // console.log('componentWillUnmount');
  //   window.removeEventListener('keydown', this.handleKeydown);
  // }

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('ККликнул по Ескейпу');
      onClose();
      window.removeEventListener('keydown', handleKeydown);
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
      window.removeEventListener('keydown', handleKeydown);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <Loader />
      <div className={s.modal}>{props.children}</div>
    </div>,
    modalRoot
  );
}

// export default class Modal extends Component {
//   state = {};

//   componentDidMount() {
//     // console.log('componentDidMount');
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     // console.log('componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeydown);
//   }
//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       console.log('ККликнул по Ескейпу');
//       onClose();
//     }
//   };

//   handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.handleOverlayClick}>
//         <Loader />
//         <div className={s.modal}>{children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
