import React from 'react'
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

import "./SelectedImage.css"
import { usePortfolioStore } from './usePortfolioStore';

export default function SelectedImage() {
    const params = useParams();
    const images = usePortfolioStore((state) => state.images);

    if (images.length === 0) {
        return null;
    }

    const image = images.find(i => i.id === params.id);

    if (image == null) {
        return null;
    }

    console.log(image, image.selling, image.editions)

    return (
        <>
            <Helmet>
                <title>{image.title} | printmaking | jason dupertuis</title>
                <meta property="og:image" content={image.images[0].url.thumb} />
                <meta property="twitter:image" content={image.images[0].url.thumb} />
            </Helmet>
            <div className="image-container">
                <div className="image">
                    <img src={image.images[0].url.full} alt={image.title} />
                </div>
                <div className="details">
                    <h4>{image.title}</h4>
                    <blockquote>
                        {image.description}<br/>
                        {image.year}
                        <p>
                            { getSaleInfo(image) }
                        </p>

                        {
                            image.editions && image.editions.length > 0 &&
                            <div>
                                <ul>
                                    { 
                                        image.editions.map(e => <li>{e}</li>)
                                    }
                                </ul>
                            </div>
                        }
                    </blockquote>
                </div>
            </div>
            {
                image.images.length > 1 &&
                <div className='extra-images-container'>
                    { image.images.slice(1).map((img, i) => (
                        <div key={img.url.full}>
                            <a href={img.url.full} target='_blank' style={{ cursor: "zoom-in" }} rel="noopener noreferrer">
                                <img
                                    style={{ maxWidth: '400px' }} 
                                    src={img.url.full} 
                                    alt={img.title} 
                                    key={image.id + "-" + i} 
                                />
                            </a>
                        </div>
                    )) }
                </div>
            }
        </>
    )
}

function getSaleInfo(image) {
    if (image.store) {
        return (<a 
            href={image.store}
            target="_blank"
            rel="noopener noreferrer"
        >
            Available for Sale
        </a>)
    } else if (image.selling) {
        return (<a 
            href="https://www.etsy.com/shop/jdpprintmaking"
            target="_blank"
            rel="noopener noreferrer"
        >
            Contact for availability
        </a>)
    } else {
        return "Not for sale"
    }
}