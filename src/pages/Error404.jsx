import MainLayout from "../components/layout/MainLayout"
import Error from "../components/shared/Error";
import Header from './../components/shared/Header';

const Error404 = () => {
  return (
    <MainLayout title="404 NOT FOUND">
        <Header header = "404 NOT FOUND" /> 
        <Error />
    </MainLayout>
  )
}

export default Error404