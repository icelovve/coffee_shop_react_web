const Menu = () => {
    const coffeeItems = [
        { imgSrc: '../assets/img/menu-1.jpg', price: '$5', title: 'Black Coffee', description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor' },
        { imgSrc: '../assets/img/menu-2.jpg', price: '$7', title: 'Chocolete Coffee', description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor' },
        { imgSrc: '../assets/img/menu-3.jpg', price: '$9', title: 'Coffee With Milk', description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor' },
    ];

    const MenuItem = ({ imgSrc, price, title, description }) => (
        <div className="row align-items-center mb-5">
            <div className="col-4 col-sm-3">
                <img className="w-100 rounded-circle mb-3 mb-sm-0" src={imgSrc} alt={title} />
                <h5 className="menu-price">{price}</h5>
            </div>
            <div className="col-8 col-sm-9">
                <h4>{title}</h4>
                <p className="m-0">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Menu &amp; Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>
                        {coffeeItems.map(item => <MenuItem key={item.title} {...item} />)}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        {coffeeItems.map(item => <MenuItem key={item.title} {...item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
