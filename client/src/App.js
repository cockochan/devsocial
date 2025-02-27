import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "../src/layout/Navbar"
import Landing from "../src/layout/Landing"
import Alert from "../src/layout/Alert"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Dashboard from "./components/dashboard/Dashboard"
import CreateProfile from "./components/profile-forms/CreateProfile"
import EditProfile from "./components/profile-forms/EditProfile"
import AddExperience from "./components/profile-forms/AddExperience"
import AddEducation from "./components/profile-forms/AddEducation"
import PrivateRoute from "./components/routing/PrivateRoute"
import Profiles from './components/profiles/Profiles'
import Posts from './components/posts/Posts'
//Redux
import { Provider} from  'react-redux';
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import './App.css';
import Profile from './components/profile/Profile'
import Post from '../src/components/post/Post'
if(localStorage.token){
    setAuthToken(localStorage.token)
}
const App = () => {
    useEffect(()=>{
         if(localStorage.token){
            store.dispatch(loadUser());
     
    }},[]);
    return(
<Provider store={store}>
<Router>
    <Fragment>
<Navbar/>
<Route exact path= "/" component={Landing}/>
<section className="container">

    <Alert />
    <Switch>
        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/profiles" component={Profiles}/>
        <Route exact path = "/profile/:id" component={Profile}/>
        <PrivateRoute exact path = "/dashboard" component={Dashboard}/>
        <PrivateRoute  exact path = "/create-profile" component={CreateProfile}/>
        <PrivateRoute  exact path = "/edit-profile" component={EditProfile}/>
        <PrivateRoute  exact path = "/add-experience" component={AddExperience}/>
        <PrivateRoute  exact path = "/add-education" component={AddEducation}/>
        <PrivateRoute  exact path = "/post/:id" component={Post}/>
        <PrivateRoute  exact path = "/posts" component={Posts}/>
       
    </Switch>
</section>
    </Fragment>
    </Router>
    </Provider>)}
export default App
