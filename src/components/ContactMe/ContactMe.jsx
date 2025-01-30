import './ContactMe.css';

export default function ContactMe() {
    return (
        <footer className='contact-me__container'>
            <h2 className='contact-me__title'>Связь со мной</h2>
            <hr className='contact-me__divider' />
            <div className='contact-me__info'>
                <p>Email: <a href="mailto:nikita_kuvshinnikov@inbox.ru">nikita_kuvshinnikov@inbox.ru</a></p>
                <p>Telegram: <a href="https://t.me/nikitapoluchaetcya" target="_blank" rel="noopener noreferrer">@nikitapoluchaetcya</a></p>
                <p>GitHub: <a href="https://github.com/nikitakuvsh" target="_blank" rel="noopener noreferrer">github.com/nikitakuvsh</a></p>
            </div>
        </footer>
    );
}
