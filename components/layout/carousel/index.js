
import { useEffect, useState } from 'react';

const Carousel = ({ children, carouselId, cardId, cardsCount, delayInterval }) => {

  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   let cardWidth = document.getElementById(cardId).offsetWidth;
  //   let carousel = document.getElementById(carouselId);
  //   console.log('cardWidth', cardWidth, 'carousel', carousel)

  //   setInterval(() => {
  //     if (cardsCount <= count) {
  //       carousel.scrollBy(0, cardWidth);
  //       setCount(count++)
  //     }
  //     else {
  //       carousel.scrollBy(cardWidth, cardWidth);
  //     }

  //   }, delayInterval);
  // }, [count])

  return (
    <div className="relative flex w-full flex-nowrap overflow-auto" id={carouselId}>
      {children}
    </div>
  )
}

export default Carousel

// use
      {/* <Carousel carouselId="careCarousel" cardId={careTypes[0].id} carouselId="careCarousel" cardsCount={careTypes.length} delayInterval={3000}> */}
      {/* </Carousel> */}
