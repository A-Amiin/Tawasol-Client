const HomeAside = () => {
    return (
        <div className="HomeAside-wraperr d-flex flex-column">
            <div className="HomeAside-Trending MyCard mb-3 p-2">
                <h6 className="HomeAside-Trending-Title">Trending Topics</h6>
                <ul className="HomeAside-Trending-List">
                    <li className="HomeAside-Trending-Item">Item 1</li>
                    <li className="HomeAside-Trending-Item">Item 2</li>
                    <li className="HomeAside-Trending-Item">Item 3</li>
                </ul>
            </div>
            <div className="HomeAside-Contactions MyCard mb-3 p-2">
                <h6 className="HomeAside-Contactions-Title">Suggested Contacts</h6>
                <ul className="HomeAside-Contactions-List">
                    <li className="HomeAside-Contactions-Item">Contact 1</li>
                    <li className="HomeAside-Contactions-Item">Contact 2</li>
                    <li className="HomeAside-Contactions-Item">Contact 3</li>
                </ul>
            </div>
            <div className="HomeAside-Recent-Activity MyCard mb-3 p-2">
                <h6 className="HomeAside-Recent-Activity-Title">Recent Activity</h6>
                <ul className="HomeAside-Recent-Activity-List">
                    <li className="HomeAside-Recent-Activity-Item">Activity 1</li>
                    <li className="HomeAside-Recent-Activity-Item">Activity 2</li>
                    <li className="HomeAside-Recent-Activity-Item">Activity 3</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeAside