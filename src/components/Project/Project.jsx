import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectsData from "./projectsData"; // Импорт массива
import "./Project.css";

export default function Project() {
    const { id } = useParams(); 
    const project = projectsData.find(p => p.id === parseInt(id, 10)); // 🛠 Приводим к числу
    console.log("id из URL:", id);
    console.log("Список проектов:", projectsData);



    if (!project) {
        return <div className="project__container">Проект не найден</div>;
    }

    return (
        <div className="project__container">
            <div className="project__content">
                {/* Левая колонка */}
                <div className="project__info">
                    <h1 className="project__title">{project.title}</h1>
                    <p className="project__description">{project.description}</p>
                </div>

                {/* Правая колонка */}
                <div className="project__media">
                    <div className="project__video">
                        <video autoPlay muted controls loop>
                            <source src={project.video} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}
