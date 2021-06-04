import React, { useState } from 'react';
import api from '../../../service/api';

export default function ChangePassword() {
    const [OldPassword, SetOldPassword] = useState('')
    const [NewPassword, SetNewPassword] = useState('')
    /*const onfollow=async(User_id,hotel_id)=>{
        let response =await api.delete(`api.v1/onfollow/${User_id}/${hotel_id}`) 
        return response.status

        await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
     };*/

    const handleChangePassword = async (e) => {
        e.preventDefault();
        const NewPassword2 = NewPassword
        const data = {
            old_password: OldPassword,
            new_password: NewPassword,
            confirm_new_password: NewPassword2,
        };
        SetOldPassword('')
        SetNewPassword('')
        try {
            let res = await api.put('api/account/change_password/', data, {
                headers: {
                    Authorization: `token ${localStorage.getItem('token')}`,
                }
            })
            console.log(res.data.response)
        } catch (err) {
            console.log(err, data)
        }
    }

    return (
        <>
            <form className='Changepassword-container' onSubmit={handleChangePassword}>
                <div className='class-ChangePassword'>
                    <div>Aleterar Password</div>
                    <input
                        placeholder="Password"
                        value={OldPassword}
                        required
                        type='password'
                        onChange={e => SetOldPassword(e.target.value)}
                    />
                    <input
                        placeholder="Nova Password"
                        value={NewPassword}
                        required
                        type='password'
                        onChange={e => SetNewPassword(e.target.value)}
                    />
                </div>

                <div className='button-class-ChangePassword'>
                    <button type="submit"> Alterar </button>
                </div>

            </form>

        </>
    );
}