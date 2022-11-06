import React, { useMemo } from 'react'
import Tile from "./Tile"

import "./Gallery.css"

export default function TiledGallery({ items, images }) {
    const tiles = useMemo(() => items.map(i => <Tile image={i} key={i.id} />), [items]);

    return (
        <div className='gallery'>
            <div className='tiles'>
                { tiles }
            </div>
        </div>
    )
}