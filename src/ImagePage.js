import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"

import {ImageService} from "./ImageService"

import "./SelectedImage.css"

export default class ImagePage extends Component {
    
  render() {
    const data = ImageService.getImage(this.props.match.params.image);
    let title = null;
    let description = null;
    let year = null;
    let store = null;

    if (data.title) {
        title = <h3 className="img-title">{data.title}</h3>;
    }

    if (data.description) {
        description = <p className="img-description">{data.description}</p>
    }

    if (data.year) {
        year = <p className="img-year">{data.year}</p>
    }

    if (data.store) {
        store = <p className="img-store"><a href={data.store} target="_blank">See in the Store</a></p>
    }

    const navigation = (
        <div className="image-navigation">
            <div className="left-nav">
                <Link to={this.props.match.path.replace("/:image", "")}>
                    <i class="fas fa-angle-left"></i> back
                </Link>
            </div>
            <div className="right-nav">
                {data.previous && <Link to={this.props.match.path.replace(":image", data.previous.id)}>previous</Link>}
                {data.next && data.previous && <Fragment>&nbsp;/&nbsp;</Fragment>}
                {data.next && <Link to={this.props.match.path.replace(":image", data.next.id)}>next</Link>} 
            </div>
        </div>
    )

    const imgSrc = data.images[0];

    return (
        <React.Fragment>
            <div className="image-container">
                <div className="image">
                    <img src={imgSrc} alt={data.title} />
                </div>
                <div className="details">
                    {title}
                    {year}
                    {store}
                    {description}
                </div>
            </div>
            {navigation}
        </React.Fragment>
    )
  }
}
