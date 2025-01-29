import { useNavigate } from 'react-router-dom';
import './Achievements.css';
import achieveSticker from '../../images/stickers/idea.webp';
import achieveData from './achieveData';

export default function Achievements() {
    const navigate = useNavigate();

    return (
        <div className='achievements__container'>
            <div className='title__container'>
                <h2 className="achievements__title">Мои достижения</h2>
                <img className='achievements__sticker' src={achieveSticker} alt="Achievement Sticker" />
            </div>
            <div className="achievements__grid">
                {achieveData.map(achieve => (
                    <div key={achieve.id} className="achievements-card" onClick={() => navigate(`achieve/${achieve.id}`)}>
                        <div className='achievements-card__image-container'><img className='achievements-card__image' src={achieve.image}></img></div>
                        <div className='achievements-card__text-container'>
                            <h3 className="achievements-card__title">{achieve.title}</h3>
                            <p className="achievements-card__description">{achieve.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
