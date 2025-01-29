import './Achievements.css';
import achieveData from './achieve_data.json';
import { useNavigate } from 'react-router-dom';
import achieveSticker from '../../images/stickers/idea.webp';

export default function Achievements(){

    const navigate = useNavigate();

    return (
        <div className='achievements__container'>
            <div className='title__container'>
                <h2 className="achievements__title">Мои достижения</h2>
                <img className='achievements__sticker' src={achieveSticker}></img>
            </div>
            <div className="achievements__grid">
                {achieveData.map(achieve => (
                    <div key={achieve.id} className="achievements-card" onClick={() => navigate(`achieve/${achieve.id}`)}>
                        <h3 className="achievements-card__title">{achieve.title}</h3>
                        <p className="achievements-card__description">{achieve.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}