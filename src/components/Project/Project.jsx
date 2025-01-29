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
                        <video controls>
                            <source src={project.video} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>

                    {/* Слайдер с фотографиями */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        className="project__slider"
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {project.images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={`Скриншот ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
