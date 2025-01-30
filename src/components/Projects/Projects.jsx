import './Projects.css';
import projectsData from './projects_data.json';
import { useNavigate } from 'react-router-dom';
import workSticker from '../../images/stickers/notebook.webp';

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects" id='myprojects'>
            <div className='title__container'>
                <h2 className="projects__title">Мои работы</h2>
                <img className='projects__sticker' src={workSticker}></img>
            </div>
            <div className="projects__grid">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card" onClick={() => navigate(`projects/${project.id}`)}>
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
