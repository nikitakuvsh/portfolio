import { useState, useEffect } from 'react';
import './MainPage.css';
import meanIcon from '../../images/stickers/mean.svg';

function MainPage() {
    const fullText = "Привет, я Никита";
    const [text, setText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => fullText.slice(0, index + 1));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => setCursorVisible(false), 3000);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-page">
            
            {/* Hero Section */}
            <div className='main-page__sticker'>
                <img className='main-page__sticker-image' src={meanIcon} alt="Sticker" />
            </div>
            <section className="main-page__hero hero">
                <div className="hero__content">
                    <h1 className="hero__title">
                        {text.includes('Привет,') ? (
                            <>
                                {text.slice(0, 8)} <br />
                                {text.slice(8)}
                            </>
                        ) : (
                            text
                        )}
                        <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
                    </h1>
                    <p className="hero__subtitle">
                        Frontend-focused FullStack Developer <br />
                        React Enthusiast | CSS Magician
                    </p>
                    <button className="hero__button hero__button--primary" onClick={(e) => { e.preventDefault(); const target = document.getElementById("mystack");if (target) {target.scrollIntoView({ behavior: "smooth" });}}}>Узнать больше</button>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
