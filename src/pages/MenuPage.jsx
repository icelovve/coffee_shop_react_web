import MainLayout from "../components/layout/MainLayout"
import Header from "../components/shared/Header"
import Menu from "../components/shared/Menu"

const MenuPage = () => {
    return (
        <MainLayout>
            <Header header="Menu" />
            <Menu />
        </MainLayout>
    )
}

export default MenuPage