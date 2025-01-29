import soglasieVideo from '../../video/soglasievideo.mp4';
import sertificatSoglasie from '../../images/achieve/soglasiesertificat.png';
import test from '../../images/achieve/ficsertificat.png';

const projectsData = [
    {
        id: 1,
        title: "Создание информационной системы проверки страховых гипотез",
        description: `Web-сервис для проверки гипотез. В условиях насыщенного рынка страховых услуг компании постоянно ищут новые способы привлечения клиентов. Для этого требуется оперативное тестирование различных гипотез и идей. Задача — разработать web-сервис, который позволит создавать и тестировать новые страховые продукты. Этот сервис должен помочь компаниям быстро проверять эффективность различных гипотез, создавая цифровые страховые продукты с минимальными затратами времени и ресурсов. Стек технологий — не ограничен.`,
        video: soglasieVideo,
        images: [
            sertificatSoglasie,
        ]
    },
    {
        id: 2,
        title: "Проект 2",
        description: "Описание проекта 2",
        video: "video2.mp4",
        images: [
            "image2-1.jpg",
            "image2-2.jpg",
            "image2-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Проект 3",
        description: "Описание проекта 3",
        video: "video3.mp4",
        images: [
            "image3-1.jpg",
            "image3-2.jpg",
            "image3-3.jpg"
        ]
    }
];

export default projectsData;
