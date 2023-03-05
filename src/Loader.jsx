import { createPortal } from 'react-dom';

import Backdrop from './Backdrop';

import './Loader.scss';


const Loader = ({
  noPortal,
  backdropClassName,
  wrapperClassName,
  loaderClassName,
}) => {
  const backdropElement = document.getElementById('backdrop');
  const overlaysElement = document.getElementById('overlays');

  if (noPortal) {
    return (
      <>
        <div className={`${styles.loader_wrapper} ${wrapperClassName}`}>
          <img
            className={`${styles.loader} ${loaderClassName}`}
            src="./logo.svg"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      {createPortal(
        <Backdrop className={backdropClassName} />,
        backdropElement
      )}
      {createPortal(
        <div className={`${styles.loader_wrapper} ${wrapperClassName}`}>
          <img
            className={`${styles.loader} ${loaderClassName}`}
            src={LoaderImage}
            alt=""
          />
        </div>,
        overlaysElement
      )}
    </>
  );
};

export default Loader;