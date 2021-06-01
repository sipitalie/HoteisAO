export default function (state, action){
    switch(action.type){
        case 'Follow':
            return action.payload
        case 'ASEGUIR':
            return action.payload
        case 'ONFOLLOW':
            return action.payload
        default:
            return state
    }
}


//export const follow=createAction('FOLLOW')
//export const get_a_seguir = createAction('');
//export const onfollow = createAction('ONFOLLOW');