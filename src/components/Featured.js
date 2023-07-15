import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"

const Featured = () => {
	const sliders = [
		{
			url: "https://storage.georgia.travel/images/food-and-wine-georgia.webp",
		},
		{
			url: "https://storage.georgia.travel/images/elarji-gnta.webp",
		},
		{
			url: "https://storage.georgia.travel/images/mtiuluri-khinkali.webp",
		},
    {
			url: "https://storage.georgia.travel/images/matsoni-gnta.webp",
		},
    {
			url: "http://storage.georgia.travel/images/nigvziani-badrijani.webp",
		},
    {
			url: "https://storage.georgia.travel/images/churchkela-gnta.webp",
		},
    {
			url: "https://storage.georgia.travel/images/guda-cheese-gnta.webp",
		},
    {
			url: "https://storage.georgia.travel/images/pickles-1.webp",
		},
    {
			url: "https://storage.georgia.travel/images/sulguni-gnta.webp",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlider = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    const nextSlider = () => {
      const isLastSlide = currentIndex === sliders.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }

const moveToNextSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
}

	return (
		<div className="max-width-[1520px] h-[500px] w-full py-4 px-4 relative group">
			<div
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
				style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className="flex top-4 justify-center py-2">
{
sliders.map((sliderIndex, SlideIndex) => (
  <div key={SlideIndex} onClick={() => moveToNextSlide(SlideIndex)}>
    <RxDotFilled size={30} />
  </div>
))
}

        </div>
		</div>
	);
};

export default Featured;
