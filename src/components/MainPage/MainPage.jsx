import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            {/* Hero Section */}
            <section className="main-page__hero hero">
                <div className="hero__content">
                    <h1 className="hero__title">Привет, я Никита</h1>
                    <p className="hero__subtitle">Frontend-focus FullStack Devoloper <br /> React Enthusiast | CSS Magician</p>
                    <a href="#" className="hero__button hero__button--primary">Узнать больше</a>
                </div>
            </section>
        </div>
    );
}

export default MainPage;