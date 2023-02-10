import { Provider } from "react-redux";
import { store} from '../redux/store';
import { BrowserRouter as Router } from "react-router-dom";

const MainProvider = ({children}) =>{
    return(
        <Provider  store={store} >
            <Router>
                {children}
            </Router>
        </Provider>
    )
}

export default MainProvider