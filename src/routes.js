import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
//import { useSelector } from 'react-redux';


import Login from './page/Account/Login';
import Register from './page/Account/Register/Register';
import Home from './page/Home';
import ForgotPassword from './page/Account/ForgotPassword';
import Account from './page/Account/Configurações';
import Eventos from './page/Eventos';
import Promoções from './page/Promoções';
import Feedback from './page/EnviarFeedback';
import HotelPage from './page/Hotelpage';
import Ajuda from './page/Ajuda'
import Dashboard from './page/Dashboard'
import RegisterAlojamento from './page/RegisterAlojamento'
import SendPhotosToTheBedroomGallery from './components/Upload/Bedroom_Photo_Gallery/';
import ChangeAlojamento from './page/Hotelpage/ChangeAloamento'



function PrivateRoute({ component: Component, ...rest }) {
    //const {isAutenticated} = useSelector(state=> state.auth)
    const isAutenticated = () => localStorage.getItem('token');

    return (
        <Route {...rest} render={(props) => (
            isAutenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        )} />
    )
}


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/eventos' component={Eventos} />
        <Route path='/promoções' component={Promoções} />
        <Route path='/hotelpage/:id' component={HotelPage} />
        <Route path='/ForgotPassword' component={ForgotPassword} />


        {/*
        
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/account' component={Account}/>
         
        <Route path='/sendfeedback' component={Feedback}/>
        <Route path='/register_alojamento' component={RegisterAlojamento}/>
        <Route path='/ajuda' component={Ajuda}/>
        <Route path='/upload/image/gallery/quarto/:id' component={SendPhotosToTheBedroomGallery}/> 
        */}
        <PrivateRoute path='/Dashboard' component={Dashboard} />
        <PrivateRoute path='/account' component={Account} />
        <PrivateRoute path='/sendfeedback' component={Feedback} />
        <PrivateRoute path='/register_alojamento' component={RegisterAlojamento} />
        <PrivateRoute path='/ajuda' component={Ajuda} />
        <PrivateRoute path='/change/hotelpage/:id/' component={ChangeAlojamento} />
        <PrivateRoute path='/upload/image/gallery/quarto/:id' component={SendPhotosToTheBedroomGallery} />


    </Switch>
);
export default Routes;
