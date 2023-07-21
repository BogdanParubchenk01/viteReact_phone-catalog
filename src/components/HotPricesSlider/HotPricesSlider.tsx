import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as productsActions from '../../features/productsSlice';
import { ProductCard } from '../ProductCard';


export const HotPricesSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products);

  useEffect(() => {
    void dispatch(productsActions.init());
  }, []);

  const productsDiscont = products.filter(product => product.discount > 0);

  console.log(productsDiscont);

  return (
    <div className="">
      <ProductCard />
    </div>
  )
}
