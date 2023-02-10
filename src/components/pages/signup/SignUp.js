import { useSelector } from "react-redux";
import FormRegisration from "../../FormRegistration/FormRegistration";
import Header from "../../header/header";



const SignUp = () => {

    const auth = useSelector(state=> state.auth);
  return (
    <div className="App">
      <Header auth={auth.auth}/>
      <FormRegisration />
    </div>
  );
};

export default SignUp;
