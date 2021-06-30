import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import api from './service/api'


import Login from './page/Account/Login';
import Register from './page/Account/Register/Register';
import Home from './page/Home';
import OwnerHome from '../src/page/Account/OwnerAlojamentos'
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
import ChangeEvent from './page/Hotelpage/changeEventos/';
import { Mapa } from './page/Hotelpage/Mapa/Mapa';
import ChangePromo from './page/Hotelpage/ChangePromo';
import ChangeBadroon from './page/Hotelpage/ChangeBadroon';
import UpdateContactos from './components/CreateContacts/ChangeContacts';


function PrivateRoute({ component: Component, ...rest }) {
    //const {isAutenticated} = useSelector(state=> state.auth)
    const isAutenticated = () => localStorage.getItem('token');

    return (
        <Route {...rest} render={(props) => (
            isAutenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        )} />
    )
}

function IsOwnerRouter({ component: Component, ...rest }) {

    const [isOwner, seIsOwner] = useState([])
    const isAutenticated = () => localStorage.getItem('token');
    useEffect(() => {
        //if (isAutenticated) {
        api.get(`api.v1/alojamentosOwner/${localStorage.getItem('id')}/`).then(res => {
            seIsOwner(res.data.length)
        }).catch(err => {
            console.log(err)
        })
        //}
    }, [])

    return (
        <Route {...rest} render={(props) => (
            !(isOwner > 0) ? (<Component {...props} />) : (<Redirect to={{ pathname: '/yourlodging', state: { from: props.location } }} />)
        )} />
    )
}

const Routes = () => (
    <Switch>
        <IsOwnerRouter exact path='/' component={Home} />
        {/*<Route  path='/' component={Home} />*/}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/eventos' component={Eventos} />
        <Route path='/promoções' component={Promoções} />
        <Route path='/hotelpage/:id' component={HotelPage} />
        <Route path='/ForgotPassword' component={ForgotPassword} />
        <Route path='/mapa/hotelpage/:id/' component={Mapa} />
        <PrivateRoute path='/Dashboard' component={Dashboard} />
        <PrivateRoute path='/account' component={Account} />
        <PrivateRoute path='/sendfeedback' component={Feedback} />
        <PrivateRoute path='/register_alojamento' component={RegisterAlojamento} />
        <PrivateRoute path='/ajuda' component={Ajuda} />
        <PrivateRoute path='/change/hotelpage/:id/' component={ChangeAlojamento} />
        <PrivateRoute path='/evento/:idhotel/:id/' component={ChangeEvent} />
        <PrivateRoute path='/promo/:idhotel/:id/' component={ChangePromo} />
        <PrivateRoute path='/quarto/:idhotel/:id/' component={ChangeBadroon} />
        <PrivateRoute path='/contactos/:idhotel/:id/' component={UpdateContactos} />
        <PrivateRoute path='/upload/image/gallery/quarto/:id' component={SendPhotosToTheBedroomGallery} />
        <PrivateRoute path='/yourlodging' component={OwnerHome} />



    </Switch>
);
export default Routes;

