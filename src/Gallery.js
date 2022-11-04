import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import SelectedImage from "./SelectedImage"

import "./Gallery.css"

export default class Gallery extends Component {
  
    state = {
        data: [],
        dataFile: null,
        selectedImage: null
    }

    scrollPane = null;

    constructor(props) {
        super(props);
        this.scrollPane = React.createRef();
    }

    componentWillMount() {
        this.loadData(this.props.images);
    }

    componentWillReceiveProps(props) {
        this.loadData(props.images);
    }

    componentDidMount() {
        
    }

    loadData(file) {
        if (file === null || file === this.state.dataFile) {
            return;
        }

        fetch(`/data/${file}.json`)
            .then(data => {
                data.json()
                    .then(json => {
                        this.setState({dataFile: file, data: json.entries}, () => this.onScroll(null));
                        
                    })
            })
            .catch(e => console.error(e));
            
    }

  drawThumbs() {
    return (
        <div className="thumbnails" id="scroller" ref={this.scrollPane} onScroll={event => this.onScroll(event)}>
        {
            this.state.data.map(image => {
                return (
                    <Link key={image.id} to={`${this.props.match.url}/${image.id}`}>
                        <LazyLoadImage
                            src={`https://i.imgur.com/${image.id}b.jpg`}
                            width={100}
                            height={100}
                        />
                    </Link>
                )
            })
        }
        </div>
    )
  }

  drawScrollTicks() {
      return (
          <div className="tick-container">

          </div>
      )
  }

  onScroll(event) {
    const scroll = this.scrollPane.current;
    const scrollWidth = event ? scroll.scrollWidth : (105 * this.state.data.length);

    const caretWidth = (scroll.clientWidth / scrollWidth) * 100;
    let caretLeft = (100 - caretWidth) * (scroll.scrollLeft / (scrollWidth - scroll.clientWidth));

    this.setState(
        {
            caretWidth,
            caretLeft,
            showCaret: scrollWidth > scroll.clientWidth
        }
    );
  }
  
  render() {
    const thumbs = this.drawThumbs();

    return (
      <div>
        <Router>
            <div className="gallery">
                {thumbs}
                <div className="scroll-bar">
                    <div className="gallery-caret"
                        style={{
                            width: `${this.state.caretWidth}%`,
                            left: `${this.state.caretLeft}%`,
                            display: this.state.showCaret ? "block" : "none"
                        }}
                    />
                </div>
                <div className="selected-image">
                    <Route 
                        exact 
                        path={`${this.props.match.url}/:image`} 
                        render={(props) => <SelectedImage {...props} files={this.state.data} />}
                        
                    />
                </div>
            </div>
        </Router>
      </div>
    )
  }
}
