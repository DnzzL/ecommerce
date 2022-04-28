import styles from './carousel.module.css';
import { ReactSVG } from 'react-svg';

/* eslint-disable-next-line */
export interface CarouselProps {
  imagePaths: string[];
}

export function Carousel(props: CarouselProps) {
  const previousButtonPath = '../../assets/icon-previous.svg';
  const nextButtonPath = '../../assets/icon-next.svg';

  return (
    <div className="w-full h-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img src={props.imagePaths[0]} alt="Product 1" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a
            href="#slide4"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={previousButtonPath} />
          </a>
          <a
            href="#slide2"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={nextButtonPath} />
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img src={props.imagePaths[1]} alt="Product 2" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={previousButtonPath} />
          </a>
          <a
            href="#slide3"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={nextButtonPath} />
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img src={props.imagePaths[2]} alt="Product 3" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={previousButtonPath} />
          </a>
          <a
            href="#slide4"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={nextButtonPath} />
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img src={props.imagePaths[3]} alt="Product 4" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={previousButtonPath} />
          </a>
          <a
            href="#slide1"
            className="bg-white border-white btn btn-circle btn-sm"
          >
            <ReactSVG src={nextButtonPath} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
