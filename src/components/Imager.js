import React, { Component } from "react";
import Display from "./Display";
import Thumbnail from "./Thumbnail";
import "./Imager.css"

export class Imager extends Component {
    state = {
        images: [
        "images/t1.jpg",
        "images/t2.jpg",
        "images/t3.jpg",
        "images/t4.jpg",
        "images/t5.jpg",
        "images/t6.gif",
        "images/t7.jpg",
        "images/t8.jpg",
        "images/t9.jpg",
        "images/t10.jpg",
        "images/t11.jpg",
        "images/t12.jpg",
        ],
        bigImage: "",
        indexImage: "",
    };

    componentDidMount() {
        let randomNum = Math.floor(Math.random() * this.state.images.length);

        this.setState({
        bigImage: this.state.images[randomNum],
        indexImage: randomNum,
        });
    }

    randomImageGenerator = () => {
        let randomNum = Math.floor(Math.random() * this.state.images.length);

        this.setState({
        bigImage: this.state.images[randomNum],
        });
    };

    backbutton = () => {
        if (this.state.indexImage === 0) {
        this.setState({
            bigImage: this.state.images[this.state.images.length - 1],
            indexImage: this.state.images.length - 1,
        });
        } else {
        this.setState({
            bigImage: this.state.images[this.state.indexImage - 1],
            indexImage: this.state.indexImage - 1,
        });
        }
    };

    forwardButton = () => {
        console.log(this.state.indexImage);

        if (this.state.indexImage === 11) {
        this.setState({
            bigImage: this.state.images[0],
            indexImage: 0,
        });
        } else {
        this.setState({
            bigImage: this.state.images[this.state.indexImage + 1],
            indexImage: this.state.indexImage + 1,
        });
        }
    };

    thumbnailSelect = (item, index) => {
        console.log(item);
        this.setState({
        bigImage: item,
        indexImage: index,
        });
    };

    render() {
        return (
        <div>
            <Display
            bigImage={this.state.bigImage}
            randomImageGenerator={this.randomImageGenerator}
            />
            <button onClick={this.backbutton}> {"<"} </button>
            <button onClick={this.forwardButton}> {">"} </button>
            <Thumbnail
            images={this.state.images}
            thumbnailSelect={this.thumbnailSelect}
            />
        </div>
        );
    }
}

export default Imager;

