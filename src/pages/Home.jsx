import MainLayout from "../components/layout/MainLayout"
import About from "../components/shared/About"
import Carousel from "../components/shared/Carousel"
import Contact from "../components/shared/Contact"
import Menu from "../components/shared/Menu"
import Offer from "../components/shared/Offer"
import Reservation from "../components/shared/Reservation"
import Service from "../components/shared/Service"

const Home = () => {
    return (
        <MainLayout>
            <Carousel />
            <About />
            <Service />
            <Offer />
            <Menu />
            <Reservation />
            <Contact />
        </MainLayout>
    )
}

export default Home