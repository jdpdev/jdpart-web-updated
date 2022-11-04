import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
        <div className="header-title">
            <h2>jason dupertuis <small>printmaking</small></h2>
        </div>
        <div className="header-nav">
            <a href="https://www.etsy.com/shop/jdpdraws" target="_blank">store</a>
            <a href="https://www.instagram.com/jdpdraws/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:jdpart@jasondupertuis.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    </header>
  )
}
