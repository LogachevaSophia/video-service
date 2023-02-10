import { useSelector } from "react-redux";
import FormIn from "../../FormIn/FormIn";
import Header from "../../header/header";



const SignIn = () => {

    const auth = useSelector(state=> state.auth);
  return (
    <div className="App">
      <Header auth={auth.auth}/>
      <FormIn />
    </div>
  );
};

export default SignIn;
