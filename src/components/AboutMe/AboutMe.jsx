import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import './AboutMe.css';
import photo1 from '../../images/me/me_main.jpg';
import photo2 from '../../images/me/me_with_dog.jpg';
import photo3 from '../../images/me/me_on_green.jpg';
import photo4 from '../../images/me/me_in_home.jpg';

Modal.setAppElement('#root');

export default function AboutMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true); // Флаг для автопроигрывания

    const images = [photo1, photo2, photo3, photo4];
    const autoPlayRef = useRef(null); // Ref для хранения таймера

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        stopAutoPlay();
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        stopAutoPlay();
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        stopAutoPlay();
    };

    // Остановка автоматического переключения
    const stopAutoPlay = () => {
        setIsAutoPlay(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    // Запуск автоматического переключения
    useEffect(() => {
        if (isAutoPlay) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlay, images.length]);

    return (
        <div className="about-me__container">
            {/* Slider */}
            <div className="about-me__slider">
                <div className="slider-wrapper">
                    <button className="slider-arrow left-arrow" onClick={prevSlide}>
                        &#9664;
                    </button>
                    <img
                        className="slider-image"
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        onClick={() => openModal(images[currentIndex])}
                    />
                    <button className="slider-arrow right-arrow" onClick={nextSlide}>
                        &#9654;
                    </button>
                </div>
                <div className="slider-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* About Me Text */}
            <div className="about-me__text">
                <h2 className="about-me__title">Обо мне</h2>
                <div className="about-me__text-block">
                    <p className="text-block__p">
                        В свободное время я люблю гулять на природе, читать книги и изучать что-то новое, что расширяет кругозор.
                        У меня есть чудесная собачка - лучший компаньон, с ней мы вместе изучаем и познаём новое и старое :)
                    </p>
                    <p className="text-block__p">
                        В коллективе я открытый и спокойный человек, всегда готов прийти на помощь.
                        Мне нравится создавать дружелюбную атмосферу вокруг себя, чтобы работа в команде была комфортной и продуктивной.
                        Я считаю, что хорошее настроение и поддержка — ключ к успешной работе.
                    </p>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button className="modal-close" onClick={closeModal}>
                    &times;
                </button>
                {selectedImage && <img className="modal-image" src={selectedImage} alt="Full View" />}
            </Modal>
        </div>
    );
}
