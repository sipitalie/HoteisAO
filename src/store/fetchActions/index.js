//fetch actions <=> buscar ações em um serviço externo
import api from '../../service/api';
import { get_avaliaçoes_hotel } from '../ducks/Avaliaçoes';
import { sendfeedback } from '../ducks/feedback';
import { followers } from '../ducks/hotelsfollowers';
//import {useSelector, useDispatch} from 'react-redux';
import {
    login,
    register,
    forgotpassword
} from '../ducks/auth';
import {
    get_alojamento,
    detail_alojamento,
    post_alojamento,
} from '../ducks/Alojamentos';

import {
    get_eventos,
    post_eventos,
    detail_eventos,
    get_eventos_hotel
} from '../ducks/Eventos';

import {
    detail_promo,
    get_promo,
    post_promo,
    get_promo_hotel
} from '../ducks/Promoções';

import {
    get_a_seguir,
    follow,
    onfollow
} from '../ducks/seguir';



export const authLogin = (user) => {

    return dispatch => {
        api.post('api/account/login/', user)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('isAdmin', JSON.stringify(response.data.isAdmin));
                dispatch(login());
                window.location.pathname = '/';
                //window.location.reload();          
            })
            .catch(error => {
                const { error_mensage } = error.response.data;
                console.log(error_mensage);
            });
    };
};

export const authRegister = (user) => {
    return dispatch => {
        api.post('api/account/register/', user)
            .then(response => {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('token', response.data.token);
                dispatch(register());
                window.location.pathname = '/';
            })
            .catch(error => {
                const { error_mensage } = error.response.data;
                console.log(error_mensage);
            });
    };
};

export const authForgotPassword = (user) => {
    return dispatch => {
        api.post('api/account/Reset_Password/', user)
            .then(response => {

                dispatch(forgotpassword());
                console.log(response.data);
                //window.location.pathname='/';          
            })
            .catch(error => {
                const { error_message } = error.response.data;
                console.log(error_message);
            });
    };
};

export const get_all_alojamentos = () => {
    return (dispatch) => {
        api.get("api.v1/alojamentos/")
            .then((res) => {
                dispatch(get_alojamento(res.data));
            })
            .catch(console.log)
    };
};
export const alojamento_register = (data) => {
    return (dispatch) => {
        api.post("api.v1/alojamentos/register", data)
            .then((res) => {
                dispatch(post_alojamento(res.data));
                window.location.pathname = '/';
            })
            .catch(console.log)
    };
};

export const alojamentos_details = (id) => {
    return (dispatch) => {
        api.get(`api.v1/alojamentos/${id}`)
            .then((res) => {
                dispatch(detail_alojamento(res.data));
            })
            .catch(console.log)
    };
};



export const send_feedback = () => {
    return (dispatch) => {
        api.post("api.v1/feedback/")
            .then((res) => {
                dispatch(sendfeedback(res.data));
            })
            .catch(console.log)
    };
};

export const evento_get = () => {
    return (dispatch) => {
        api.get("api.v1/evento/")
            .then((res) => {
                dispatch(get_eventos(res.data));
            })
            .catch(console.log)
    };
};

export const evento_post = (data) => {
    return (dispatch) => {
        api.post("api.v1/evento/", data)
            .then((res) => {
                dispatch(post_eventos(res.status));
            })
            .catch(console.log)
    };
};

export const evento_details = (id) => {
    return (dispatch) => {
        api.get(`api.v1/evento/${id}`)
            .then((res) => {
                dispatch(detail_eventos(res.status));
            })
            .catch(console.log)
    };
};
export const eventos_hotel = (hotel_owner_id) => {
    return (dispatch) => {
        api.get(`api.v1/evento/hotelpage/${hotel_owner_id}`)
            .then((res) => {
                dispatch(get_eventos_hotel(res.data));
            })
            .catch(console.log)
    };
};

export const promo_post = (data) => {
    return (dispatch) => {
        api.post("api.v1/promoçao/", data)
            .then((res) => {
                dispatch(post_promo(res.status));
            })
            .catch(console.log)
    };
};



export const promo_get = () => {
    return (dispatch) => {
        api.get(`api.v1/promoçao/`)
            .then((res) => {
                dispatch(get_promo(res.data));
            })
            .catch(console.log)
    };
};

export const promo_details = (id) => {
    return (dispatch) => {
        api.get(`api.v1/promoçao/${id}`)
            .then((res) => {
                dispatch(detail_promo(res.data));
            })
            .catch(console.log)
    };
};

export const promo_hotel = (hotel_owner_id) => {
    return (dispatch) => {
        api.get(`api.v1/promoçao/hotelpage/${hotel_owner_id}`)
            .then((res) => {
                dispatch(get_promo_hotel(res.data));
            })
            .catch(console.log)
    };
};


export const avaliaçoes_hotel = (hotel_owner_id) => {
    return (dispatch) => {
        api.get(`api.v1/avaliacao/hotelpage/${hotel_owner_id}`)
            .then((res) => {
                dispatch(get_avaliaçoes_hotel(res.data));
            })
            .catch(console.log)
    };
};




export const quartos_hotel = (hotel_owner_id) => {
    return (dispatch) => {
        api.get(`api.v1/quarto/hotelpage/${hotel_owner_id}`)
            .then((res) => {
                dispatch(get_avaliaçoes_hotel(res.data));
            })
            .catch(console.log)
    };
};

export const Seguirhotel = (data) => {
    return (dispatch) => {
        api.post("api.v1/follow/", data)
            .then((res) => {
                //console.log(res.data, res.status)
                dispatch(follow(res.data));
            })
            .catch(console.log)
    };
};


export const a_Seguirhotel = (User_id) => {
    return (dispatch) => {
        api.get(`api.v1/follow/user/${User_id}`)
            .then((res) => {
                dispatch(get_a_seguir(res.data));
            })
            .catch(console.log)
    };
};

export const RemovSeguirhotel = (data) => {
    return (dispatch) => {
        api.delete(`api.v1/onfollow/${data.User_id}/${data.hotel_id}`)
            .then((res) => {
                dispatch(onfollow(res.data));
            })
            .catch(console.log)
    };
};

export const followers_hotel = (hotel_id) => {

    //const dispatch =useDispatch();
    return (dispatch) => {
        api.get(`api.v1/followers/${hotel_id}`)
            .then((res) => {
                dispatch(followers(res.data));
            })
            .catch(console.log)
    };
};

