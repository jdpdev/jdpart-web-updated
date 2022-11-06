import React, { useEffect, useState } from 'react'
import TiledGallery from "./TiledGallery"
import {ImageService} from "./ImageService"
import { usePortfolioStore } from './usePortfolioStore'

export default function Printmaking({ match }) {
  const images = usePortfolioStore((state) => state.images);
  const fetchImages = usePortfolioStore((state) => state.fetch);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <TiledGallery
        match={match} 
        items={images}
        images="printmaking" />
    </div>
  )
}
