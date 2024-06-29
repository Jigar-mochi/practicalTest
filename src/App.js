import { Provider } from 'react-redux'
import { store } from './redux/store';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import OurProcess from './pages/OurProcess';
import Blog from './pages/Blog';
import ContactForm from './pages/ContactForm';
import Footer from './components/Footer';

function App() {
    return (
        <Provider store={store}>
            <Home />
            <Services />
            <AboutUs />
            <OurProcess />
            <Blog />
            <ContactForm />
            <Footer />
        </Provider >
    );
}

export default App;
