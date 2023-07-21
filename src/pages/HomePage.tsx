import React from 'react';
import { SliderImages } from '../components/SliderImages';
import { HotPricesSlider } from '../components/HotPricesSlider';


export const HomePage: React.FC = () => {
  return (
    <main className="mt-10 flex flex-col items-center  gap-20 mx-auto">
      <SliderImages />

      <HotPricesSlider />
    </main>
  )
}
