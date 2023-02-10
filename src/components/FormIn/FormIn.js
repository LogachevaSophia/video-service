import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import RoboService from "../../service/roboService";
import "./FormIn.css";

function FormIn() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const roboService = new RoboService();
  const { setAuth, setUser } = useActions();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if ((login.length != 0) & (pass.length != 0)) {
      getUser();
    }
  };

  const getUser = async () => {
    const res = await roboService.getUser(login, pass);
    console.log(res);
    setUser(res);
    if (res.id) {
      setAuth(true);
      navigate("/");
    }
  };

  return (
    <div className="formIn" onSubmit={onSubmit}>
      <form>
        <span>LOG IN</span>
        <p>
          <input
            name="name"
            type="text"
            placeholder="почта"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          ></input>
        </p>
        <p>
          <input
            name="pass"
            type="password"
            placeholder="Пароль"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </p>
        <button>Войти</button>
      </form>
    </div>
  );
}

export default FormIn;
