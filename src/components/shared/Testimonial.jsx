const Testimonial = () => {
    const testimonials = [
        { imgSrc: 'assets/img/testimonial-1.jpg', name: 'Client Name', profession: 'Profession', text: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita' },
        { imgSrc: 'assets/img/testimonial-2.jpg', name: 'Client Name', profession: 'Profession', text: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita' },
        { imgSrc: 'assets/img/testimonial-3.jpg', name: 'Client Name', profession: 'Profession', text: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita' },
        { imgSrc: 'assets/img/testimonial-4.jpg', name: 'Client Name', profession: 'Profession', text: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita' }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid" src={testimonial.imgSrc} alt={testimonial.name} />
                                <div className="ml-3">
                                    <h4>{testimonial.name}</h4>
                                    <i>{testimonial.profession}</i>
                                </div>
                            </div>
                            <p className="m-0">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
