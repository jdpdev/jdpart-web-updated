import React from 'react';
import TiledGallery from "./TiledGallery";
import { usePortfolioStore } from './usePortfolioStore';

export default function Printmaking({ match }) {
  const images = usePortfolioStore((state) => state.images);

  return (
    <div>
      <TiledGallery
        match={match} 
        items={images}
        images="printmaking" />
    </div>
  )
}
