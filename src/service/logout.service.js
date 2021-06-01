import {logout} from '../store/ducks/auth';


export default function Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    window.location.reload();
    return logout();
}


