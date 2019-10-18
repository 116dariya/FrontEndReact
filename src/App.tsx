import React from 'react';
import './App.css';
import Header from "./components/static/header/header";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from "./components/authorize/login/login";
import Footer from "./components/static/footer/footer";
import Registration from "./components/authorize/registration/Registration";
import {MainPage} from "./components/Main/MainPage/MainPage";


class App extends React.Component {
  public render() {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" component={MainPage}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
  }
}

// ReactDOM.render(
//
//
//     , document.getElementById('root')
// );


export default App;
