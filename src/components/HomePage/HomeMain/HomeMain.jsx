import Posts from './Posts';
import WhatsInYourMind from './WhatsInYourMind';
const HomeMain = () => {
    return (
        <div className="HomeMain-wraperr">
            <div className="HomeMain-container">
                <WhatsInYourMind />
                <Posts />
            </div>
        </div>
    )
}

export default HomeMain