import { useEffect, useState } from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import { SingleImageDataType } from '../../types/carousel';

const CarouselShowPage = () => {
  const [images, setImages] = useState<SingleImageDataType[] | []>([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (imgLimit:number) => {
    setLoading(true);
    try{
      const result = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`)
                      .then(res => res.json());
      setImages(result);
    }catch(e){
      console.error("Error fetching images:", e);
      setImages([]);
    }finally{
      setLoading(false);
    }
  }

  function onImageClick(){
    console.log('onImageClick');
  }

  useEffect(() => {
    fetchImages(10);
  },[])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div id='container__CarouselShowPage' className='carousel-container'>
      { 
        <Carousel 
          images={images}
          isLoading={loading}
          onImgClick={onImageClick}
          imgPerSlide={2}
          imgLimit={10}
          customPrevButton={(onClick: () => void ) => (
            <button
              className="btn prev"
              style={{background: "red", padding: "10px 20px", borderRadius:"10px 20px", color: "#fff"}}
              onClick={onClick}
            >
              Prev
            </button>
          )}
          customNextButton={(onClick: () => void ) => (
            <button
              className="btn next"
              style={{background: "blue", padding: "10px 20px", borderRadius:"20px 10px", color: "#fff"}}
              onClick={onClick}
            >
              Next
            </button>
          )}
        />
      }
    </div>
  )
}

export default CarouselShowPage;