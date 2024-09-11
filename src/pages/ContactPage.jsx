import MainLayout from "../components/layout/MainLayout"
import Contact from "../components/shared/Contact"
import Header from "../components/shared/Header"

const ContactPage = () => {
    return (
        <MainLayout>
            <Header header="Contact" />
            <Contact />
        </MainLayout>
    )
}

export default ContactPage