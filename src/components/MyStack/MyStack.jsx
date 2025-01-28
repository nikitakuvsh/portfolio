import './MyStack.css';
import reactjsIcon from '../../images/stackicons/reactjs.svg';
import npmIcon from '../../images/stackicons/npm.svg';
import htmlIcon from '../../images/stackicons/html.svg';
import cssIcon from '../../images/stackicons/css.svg';
import sassIcon from '../../images/stackicons/sass.svg';
import jsIcon from '../../images/stackicons/js.svg';
import fastapiIcon from '../../images/stackicons/fastapi.svg';
import pythonIcon from '../../images/stackicons/python.svg';
import dockerIcon from '../../images/stackicons/docker.svg';
import postgresIcon from '../../images/stackicons/postgre.svg';
import linuxIcon from '../../images/stackicons/linux.svg';
import githubIcon from '../../images/stackicons/github.svg';

export default function MyStack(){
    return (
        <div className='stack__container'>
            <h2 className='stack__title'>Мой стек технологий:</h2>
            <div className='stack__blocks'>
                <div className='stack'><img className='stack__image' alt='HTML' title='HTML' src={htmlIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='CSS' title='CSS' src={cssIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='JS' title='JavaScript' src={jsIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='ReactJS' title='ReactJS' src={reactjsIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='SASS' title='SASS' src={sassIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='npm' title='npm' src={npmIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='python' title='python' src={pythonIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='fastapi' title='FastAPI' src={fastapiIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='docker' title='docker' src={dockerIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='postgres' title='postgres' src={postgresIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='linux' title='linuxOS' src={linuxIcon}></img></div>
                <div className='stack'><img className='stack__image' alt='github' title='github' src={githubIcon}></img></div>
            </div>
        </div>
    );
}