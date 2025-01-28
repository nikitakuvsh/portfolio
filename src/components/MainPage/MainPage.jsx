import './MainPage.css';
import meanIcon from '../../images/stickers/mean.svg';

function MainPage() {
    return (
        <div className="main-page">
            {/* Hero Section */}
            <div className='main-page__sticker'>
                <img className='main-page__sticker-image' src={meanIcon}></img>
            </div>
            <section className="main-page__hero hero">
                <div className="hero__content">
                    <h1 className="hero__title">Привет, я <br /> Никита</h1>
                    <p className="hero__subtitle">Frontend-focus FullStack Devoloper <br /> React Enthusiast | CSS Magician</p>
                    <a href="#" className="hero__button hero__button--primary">Узнать больше</a>
                </div>
            </section>
        </div>
    );
}

export default MainPage;