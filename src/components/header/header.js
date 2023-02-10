import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  const { auth } = props;
  if (!auth) {
    return (
      <div className="header log">
        <div className="logo">RENTMARKET</div>
        <div className="topmenu">Видео-сервис</div>
        <div className="block-top-auth">
          <p>
            <a href='/signin'>Вход</a>
          </p>
          <p>
            <a href='/signup'>Регистрация</a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header no-log">
        <div className="logo">RENTMARKET</div>
        <div className="topmenu"> <Link to='/'>Видео-сервис</Link></div>
        <div className="block-top-auth">
          <p>
            <Link to='/profile'>Профиль</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
