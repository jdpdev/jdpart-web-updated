import React from 'react'
import { useParams } from 'react-router-dom';
import portfolio from './portfolio.json'

import "./SelectedImage.css"

export default function SelectedImage() {
    const params = useParams();
    const image = findImage(params.id);

    return (
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
            </div>
        </div>
    )
}

function findImage(id) {
    return portfolio.items.find(i => i.id === id);
}