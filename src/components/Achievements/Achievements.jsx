import { useNavigate } from 'react-router-dom';
import './Achievements.css';
import achieveSticker from '../../images/stickers/idea.webp';
import soglasiesertificat from '../../images/achieve/soglasiesertificat.png';
import ficsertificat from '../../images/achieve/ficsertificat.png';
import sqlsertificat from '../../images/achieve/sqlsertificat.png';
import pythonsertificat from '../../images/achieve/pythonsertificat.png';
import jquerysertificat from '../../images/achieve/jquerysertificat.png';
import htmlsertificat from '../../images/achieve/htmlsertificat.png';

const achieveData = [
    {
        id: 1,
        title: "Призовое место ХАКАТОН СОГЛАСИЕ",
        description: "Заняли II место",
        image: soglasiesertificat
    },
    {
        id: 2,
        title: "Призовое место ХАКАТОН ФИЦ",
        description: "Заняли II место",
        image: ficsertificat
    },
    {
        id: 3,
        title: "Пройденный курс",
        description: "Прошёл курс по SQL",
        image: sqlsertificat
    },
    {
        id: 4,
        title: "Пройденный курс",
        description: "Прошёл курс по Python",
        image: pythonsertificat
    },
    {
        id: 5,
        title: "Пройденный курс",
        description: "Прошёл курс по JQuery",
        image: jquerysertificat
    },
    {
        id: 6,
        title: "Пройденный курс",
        description: "Прошёл курс по HTML",
        image: htmlsertificat
    }
];

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
