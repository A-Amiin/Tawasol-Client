import HomeNav from '../components/HomePage/HomeNav/HomeNav';
import HomeMain from '../components/HomePage/HomeMain/HomeMain';
import HomeAside from '../components/HomePage/HomeAside/HomeAside';

const HomePage = () => {
    return (
        <div className='home-page-container'>
            <HomeNav />
            <div className="home-main-section">
                <div className="home-main-content">
                    <HomeMain />
                    <HomeAside />
                </div>
            </div>
        </div >
    )
}

export default HomePage;