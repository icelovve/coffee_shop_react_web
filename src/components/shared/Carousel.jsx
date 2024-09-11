/* eslint-disable jsx-a11y/img-redundant-alt */

const Carousel = () => {
    const carouselItems = [
        { src: "assets/img/carousel-1.jpg" },
        { src: "assets/img/carousel-2.jpg" },
    ];

    return (
        <div className="container-fluid p-0 mb-5">
            <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                <div className="carousel-inner">
                    {carouselItems.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img className="w-100" src={item.src} alt="Carousel Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                                <h1 className="display-1 text-white m-0">COFFEE</h1>
                                <h2 className="text-white m-0">* SINCE 1950 *</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        </div>
    );
}

export default Carousel;
