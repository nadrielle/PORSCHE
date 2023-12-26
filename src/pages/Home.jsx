import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
// import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Video } from '../components/Video';
import Divtext from '../components/Aga1';

const Home = () => {
    return (
        <div>
            
            <Video />
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Divtext/>
            <Products />
            {/* <Newsletter /> */}
            <Footer />
        </div>
    );
}

export default Home;
