import MainLayout from "../components/layout/MainLayout"
import About from "../components/shared/About"
import Header from "../components/shared/Header"

const AboutPage = () => {
    return (
        <MainLayout>
            <Header header = "About Us" />
            <About />
        </MainLayout>
    )
}

export default AboutPage