
import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://media.istockphoto.com/vectors/to-do-list-banner-template-to-do-list-ribbon-label-sign-vector-id1218393780?k=6&m=1218393780&s=170667a&w=0&h=DuNv0aV7nV05WU6esk9V2qmI5AoJbGcCbOQ_C1rYr9c=" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0b-VhVF0nPjZHic6kjiY4gKS-qHd3BaszAA&usqp=CAU"  alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3U96rJ52-64WYt3LfjXyCuGyOr8-rVGh7Lg&usqp=CAU"  alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCyYzvTTwYSLOuU9pWRon7v3YDAnYbdUAc-Q&usqp=CAU"  alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        )
    }
}

export default Carousel;