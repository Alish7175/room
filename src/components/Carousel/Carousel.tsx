import { ReactNode, useEffect, useRef, useState } from "react";
import { SingleImageDataType } from "../../types/carousel"

type PropsType ={
  images: SingleImageDataType[] | [];
  isLoading: boolean;
  imgPerSlide: number;
  imgLimit: number;
  onImgClick: (img: any, index: number) => void;
  customPrevButton: (onClick: () => void) => ReactNode;
  customNextButton: (onClick: () => void) => ReactNode;
}
export const Carousel = ({images = [], isLoading = false, imgLimit= images.length, imgPerSlide = 1, onImgClick = () => {}, customPrevButton, customNextButton}: PropsType) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imgWidth, setImgWidth] = useState<number>(400);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  },[images])

  function goToPreviousSlide(): void  {
    setCurrentIndex((prevIndex: number) => prevIndex === 0 ? imgLimit - 1 : prevIndex - 1)
  }

  function goToNextSlide(): void  {
    setCurrentIndex(prevIndex => prevIndex === imgLimit - 1 ? 0 : prevIndex + 1)
  }

  console.log(imgRef?.current?.offsetWidth);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="carousel" style={{width: imgPerSlide * imgWidth}}>
      <div
        className="image-container"
        style={{transform: `translateX(-${currentIndex * imgWidth}px)`}}
      >
        {images
          .slice(0, imgLimit > images.length ? images.length : imgLimit)
          .map((image, index) => {
            return (
              <img
                onLoad={() => setImgWidth(imgRef?.current?.offsetWidth!)}
                ref={imgRef}
                key={image.id}
                src={image.url}
                onClick={() => onImgClick(image, index)}
                alt={image.title}
                className="image"
              />
            );
          })}
      </div>
      {customPrevButton instanceof Function ? (
        customPrevButton(goToPreviousSlide)
      ) : (
        <button className="btn prev" onClick={goToPreviousSlide}>
          Prev
        </button>
      )}
      {customNextButton instanceof Function ? (
        customNextButton(goToNextSlide)
      ) : (
        <button className="btn next" onClick={goToNextSlide}>
          Next
        </button>
      )}
    </div>
  )
}
