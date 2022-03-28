import React from 'react';
import { useState, useEffect } from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

// import Loader from './Loader/Loader';

export default function App(second) {
  const [pages, setPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [arrImg, setArrImg] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [stopRenderBtn, setStopRenderBtn] = useState(1);

  const openModal = largeImageURL => {
    setShowModal(true);
    setModalImage(largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  const fetchImg = async () => {
    const BASE_URL = 'https://pixabay.com/api/';

    const meta = new URLSearchParams({
      key: '25149934-751328f61e2da43ec1e4df823',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: pages,
      per_page: 12,
    });
    const url = `${BASE_URL}?${meta}`;

    const fetchImg = await fetch(url);
    const r = await fetchImg.json();

    renderMoreImg(r.hits);
  };

  const renderMoreImg = arrImg => {
    setArrImg(state => [...state, ...arrImg]);
    setPages(state => state + 1);
    setStopRenderBtn(arrImg.length);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const findSearchQuery = inputQuery => {
    setSearchQuery(inputQuery);
    setPages(1);
  };

  useEffect(() => {
    if (!searchQuery) return;

    setArrImg([]);
    fetchImg();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // const { showModal, stopRenderBtn } = this.state;

  return (
    <div className={s.App}>
      <Searchbar findSearchQuery={findSearchQuery} />

      <ImageGallery arrImg={arrImg} openModal={openModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImage} alt="" />
        </Modal>
      )}
      {stopRenderBtn >= 12 && <Button loadMore={fetchImg} />}
    </div>
  );
}

// export default class App extends React.Component {
//   state = {
//     pages: 1,
//     searchQuery: '',
//     arrImg: [],
//     showModal: false,
//     modalImage: '',
//     stopRenderBtn: 0,
//   };

//   openModal = largeImageURL => {
//     this.setState({
//       showModal: true,
//       modalImage: largeImageURL,
//     });
//   };

//   toggleModal = () => {
//     this.setState({
//       showModal: false,
//       modalImage: '',
//     });
//   };

//   fetchImg = async () => {
//     const BASE_URL = 'https://pixabay.com/api/';

//     const meta = new URLSearchParams({
//       key: '25149934-751328f61e2da43ec1e4df823',
//       q: this.state.searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       page: this.state.pages,
//       per_page: 12,
//     });
//     const url = `${BASE_URL}?${meta}`;

//     const fetchImg = await fetch(url);
//     const r = await fetchImg.json();

//     this.renderMoreImg(r.hits);
//   };

//   renderMoreImg = arrImg => {
//     this.setState(prevState => ({
//       arrImg: [...prevState.arrImg, ...arrImg],
//       pages: prevState.pages + 1,
//       stopRenderBtn: arrImg.length,
//     }));

//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   setSearchQuery = inputQuery => {
//     this.setState({
//       searchQuery: inputQuery,
//       pages: 1,
//     });
//   };

//   componentDidMount() {
//     if (!this.state.searchQuery) return;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.searchQuery !== prevState.searchQuery) {
//       this.setState({
//         arrImg: [],
//       });
//       this.fetchImg();
//     }
//   }

//   render() {
//     const { showModal, stopRenderBtn } = this.state;

//     return (
//       <div className={s.App}>
//         <Searchbar setSearchQuery={this.setSearchQuery} />

//         <ImageGallery arrImg={this.state.arrImg} openModal={this.openModal} />
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={this.state.modalImage} alt="" />
//           </Modal>
//         )}
//         {stopRenderBtn >= 12 && <Button loadMore={this.fetchImg} />}
//       </div>
//     );
//   }
// }
