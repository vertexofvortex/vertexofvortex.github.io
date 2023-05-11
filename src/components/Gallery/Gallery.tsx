import { useEffect, useRef, useState } from "react";
import s from "./Gallery.module.scss";
import { IGalleryPicture } from "../../models";

interface Props {
  pictures: IGalleryPicture[];
}

export function Gallery({ pictures }: Props) {
  const gallery = useRef<null | HTMLDivElement>(null);
  const wrapper = useRef<null | HTMLDivElement>(null);
  const [galleryWidth, setGalleryWidth] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const defineGalleryWidth = (): void => {
    if (!gallery.current) return;

    setGalleryWidth(gallery.current.getBoundingClientRect().width);
  };

  const handleNextSlide = () => {
    if (currentSlide === pictures.length - 1) return;

    setCurrentSlide(currentSlide + 1);
    console.log(currentSlide);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) return;

    setCurrentSlide(currentSlide - 1);
    console.log(currentSlide);
  };

  // on every component render...
  useEffect(() => {
    // getting width of gallery div and writing it to a state
    defineGalleryWidth();

    // adding resize event listener to recalculate the width
    // of gallery block whenever user resizes the page
    window.addEventListener("resize", defineGalleryWidth);

    // and then removing event listener on component unmount
    // to prevent listeners duplication
    return () => window.removeEventListener("resize", defineGalleryWidth);
  }, []);

  return (
    <div className={s.galleryContainer}>
      <div className={s.gallery} ref={gallery}>
        <div
          className={s.wrapper}
          ref={wrapper}
          style={{
            marginLeft: `-${galleryWidth * currentSlide}px`,
            // transitionTimingFunction: `steps(calc(round(${galleryWidth}px / 9px)))`,
          }}
        >
          {pictures.map((pic) => (
            <div className={s.pictureContainer} style={{ width: galleryWidth }}>
              <img src={pic.url} />
            </div>
          ))}
        </div>
        {currentSlide !== 0 && (
          <button className={s.prev} onClick={handlePrevSlide}>
            {`\udb81\udcae`}
          </button>
        )}
        {currentSlide !== pictures.length - 1 && (
          <button className={s.next} onClick={handleNextSlide}>
            {`\udb81\udcad`}
          </button>
        )}
        <div className={s.navigation}>
          {pictures.map((pic, i) => (
            <button
              onClick={() => setCurrentSlide(i)}
              className={currentSlide === i ? s.current : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div className={s.pictureDescription}>
        {pictures[currentSlide].description}
      </div>
    </div>
  );
}

export default Gallery;
