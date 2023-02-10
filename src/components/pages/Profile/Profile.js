import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RoboService from "../../../service/roboService";
import Header from "../../header/header";
import HistoryBuys from "../../HistoryBuys/HistoryBuys";

const Profile = () => {
  const { user, auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [dataBuys, setDataBuys] = useState([]);
  const roboService = new RoboService();

  useEffect(() => {
    if (!user.id) {
      navigate("/");
    }

    // setDataBuys([{id:5132, product: 'google.com'},{id:5134, product: 'google.com'},{id:5135, product: 'google.com'}]);

    getHistory();
  }, []);

  const getHistory = async () => {
    const res = await roboService.getHistory(user.id).then(OnDataLoaded);
  };
  const OnDataLoaded = (res) => {
    setDataBuys(res);
  };


  return (
    <div className="App">
      <Header auth={auth}/>
      <h1>Привет, {user.name} :)</h1>
      <HistoryBuys data={dataBuys} />
    </div>
  );
};

export default Profile;
