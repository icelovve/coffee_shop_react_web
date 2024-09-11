const services = [
    {
        imgSrc: "../assets/img/service-1.jpg",
        iconClass: "fa-truck",
        title: "Fastest Door Delivery",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
    },
    {
        imgSrc: "../assets/img/service-2.jpg",
        iconClass: "fa-coffee",
        title: "Fresh Coffee Beans",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
    },
    {
        imgSrc: "../assets/img/service-3.jpg",
        iconClass: "fa-award",
        title: "Best Quality Coffee",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
    },
    {
        imgSrc: "../assets/img/service-4.jpg",
        iconClass: "fa-table",
        title: "Online Table Booking",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
    }
];

const Service = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Our Services</h4>
                    <h1 className="display-4">Fresh &amp; Organic Beans</h1>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-6 mb-5" key={index}>
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src={service.imgSrc} alt={service.title} />
                                </div>
                                <div className="col-sm-7">
                                    <h4><i className={`fa ${service.iconClass} service-icon`} />{service.title}</h4>
                                    <p className="m-0">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
