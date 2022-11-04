import React from 'react'
import TiledGallery from "./TiledGallery"
import {ImageService} from "./ImageService"

export default function Printmaking({ match }) {
  return (
    <div>
      <TiledGallery
        match={match} 
        items={ImageService.getPrints()}
        images="printmaking" />
    </div>
  )
}
