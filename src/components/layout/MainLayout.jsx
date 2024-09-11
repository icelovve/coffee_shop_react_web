import BackToTop from './BackToTop';
import Footer from './Footer';
import Navbar from './Navbar';
import DocumentTitle from 'react-document-title';

const MainLayout = ({ children, title = "KOPPEE" }) => {
    return (
        <DocumentTitle title={title + ' - Coffee Shop'}>
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                    <BackToTop />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </DocumentTitle>
    );
}

export default MainLayout;
