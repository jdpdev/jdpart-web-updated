import React from 'react'
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./Gallery.css"

export default function Tile({ image }) {
  const id = image.id;
  const titleLines = image.title.split(': ');

  return (
      <Link key={id} to={'/image/' + id}>
          <div className="gallery-tile">
              <LazyLoadImage
                  src={image.thumb}
              />
              <div className='image-info'>
                {
                    titleLines.map(l => <div>{ l }</div>)
                }
              </div>
          </div>
      </Link>
  )
}
