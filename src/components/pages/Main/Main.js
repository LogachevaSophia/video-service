import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import RoboService from "../../../service/roboService";
import Blocks from "../../Blocks/Blocks";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Header from "../../header/header";
import Slider from "../../Slider/Slider";
import Spinner from "../../Spinner/Spinner";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //   useEffect(() => {getAllBlocks();}, []);
  // const dispatch = useDispatch();
  const roboService = new RoboService();
  const { setAuth } = useActions();


  const OnDataLoaded = (res) => {
    setError(false);
    setLoading(false);
    setData(res);
  };


  const onError = () =>{
    setError(true);
    setLoading(false);

  }
  const getAllBlocks = async () => {
    setLoading(true);
    const res = await roboService.getAllBlocks().then(OnDataLoaded).catch(onError);
  };
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user.id) {
      navigate("/signin");
    }
    getAllBlocks(user.id);
  }, []);


  const item =  <Blocks data={data}></Blocks>;

  const errorMessage = error? <ErrorMessage/>: null;
  const spiner = loading? <Spinner/>: null;
  const items = !(loading||error) ? item:null;
  


  return (
    <div className="App">
       
      <Header auth={auth.auth} />
      {spiner}
      {errorMessage}
      {items}
     
      <button
        onClick={() => {
          setAuth(true);

          // setUser({id:1,})
        }}
      >
        jdfk
      </button>
    
    </div>
  );
};

export default Main;
