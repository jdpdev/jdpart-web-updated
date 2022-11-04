import React from 'react'
import { useParams } from 'react-router-dom';
import portfolio from './portfolio.json'

import "./SelectedImage.css"

export default function SelectedImage() {
    const params = useParams();
    const image = findImage(params.id);

    return (
        <>
            <div className="image-container">
                <div className="image">
                    <img src={image.images[0].url.full} alt={image.id} />
                </div>
                <div className="details">
                    <p>
                        {image.description}
                    </p>
                    <p>
                        {image.year}
                    </p>
                    {
                        image.store &&
                        <p>
                            <a 
                                href={image.store}
                                target="_blank"
                            >View in the store...</a>
                        </p>
                    }
                </div>
            </div>
            {
                image.images.length > 1 &&
                <div className='extra-images-container'>
                    { image.images.slice(1).map((img, i) => (
                        <div>
                            <img src={img.url.thumb} alt={image.id + "-" + i} />
                        </div>
                    )) }
                </div>
            }
        </>
    )
}

function findImage(id) {
    return portfolio.items.find(i => i.id === id);
}