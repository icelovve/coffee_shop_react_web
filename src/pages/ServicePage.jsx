import MainLayout from "../components/layout/MainLayout"
import Header from "../components/shared/Header"
import Service from "../components/shared/Service"

const ServicePage = () => {
    return (
        <MainLayout>
            <Header header="Service"/>
            <Service />
        </MainLayout>
    )
}

export default ServicePage