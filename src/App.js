import './App.css';
import LoginScreen from "./Components/Login";

import RegisterScreen from "./Components/Register";

function App() {
    return (
        <div className="App">
            <div className='container' style={{width: '40%', height: 370, backgroundColor: '#fff',color:'#42b0ee' ,marginTop:150}}>
                {/*<LoginScreen/>*/}
                <RegisterScreen/>
            </div>
        </div>
    );
}

export default App;
