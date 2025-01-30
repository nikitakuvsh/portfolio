import { useParams, useNavigate } from "react-router-dom";
import projectsData from "./projectsData";
import "./Project.css";

export default function Project() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    
    const currentId = parseInt(id, 10);
    const project = projectsData.find(p => p.id === currentId);

    if (!project) {
        return <div className="project__container">Проект не найден</div>;
    }

    const canClickNext = currentId < projectsData.length;
    const canClickPrev = currentId > 1;

    const nextProject = () => {
        if (canClickNext) {
            navigate(`/projects/${currentId + 1}`);
            window.location.reload();
        }
    };

    const prevProject = () => {
        if (canClickPrev) {
            navigate(`/projects/${currentId - 1}`);
            window.location.reload();
        }
    };

    return (
        <div className="project__container">
            <div className="project__content">
                <div className="project__info">
                    <h1 className="project__title">{project.title}</h1>
                    <p className="project__description">{project.description}</p>
                </div>

                <div className="project__media">
                    <div className="project__video">
                        <video autoPlay muted controls loop>
                            <source src={project.video} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </div>

                <div className="project__buttons-container">
                    <button className="project__button project__button--fix" onClick={() => navigate('/')}>Назад</button>
                    <div className="project__nav-buttons">
                        <button className={`project__button ${canClickPrev ? 'project__button--active' : 'project__button--deactive'}`} onClick={prevProject} disabled={!canClickPrev}>Предыдущий проект</button>
                        <button className={`project__button ${canClickNext ? 'project__button--active' : 'project__button--deactive'}`} onClick={nextProject} disabled={!canClickNext}>Следующий проект</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
