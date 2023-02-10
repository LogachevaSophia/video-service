import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import RoboService from "../../service/roboService";
import "./FormRegistration.css";

function FormRegisration() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [pas, SetPas] = useState("");

  const { setAuth, setUser } = useActions();
  const roboService = new RoboService();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if ((name.length != 0) & (email.length != 0) & (pas.length != 0)) {
      registerUser();
    }
  };

  const registerUser = async () => {
    const res = await roboService.registerUser(name, email, pas);
    console.log(res);
    setUser(res);
    if (res.id) {
      setAuth(true);
      navigate("/");
    }
  };

  return (
    <div className="form-registration">
      <form onSubmit={onSubmit}>
        <span>LOG UP</span>
        <p>
          <input
            name="name"
            type="text"
            placeholder="Имя"
            onChange={(e) => SetName(e.target.value)}
          ></input>
        </p>
        <p>
          <input
            name="email"
            type="text"
            placeholder="Почта"
            onChange={(e) => SetEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <input
            name="pass"
            type="password"
            placeholder="Пароль"
            onChange={(e) => SetPas(e.target.value)}
          ></input>
        </p>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default FormRegisration;
