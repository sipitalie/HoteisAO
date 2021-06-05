import React, { useState } from 'react';


export default function ImgComp({ src, Id, deleteg, deleteimg }) {
    const [id, setID] = useState(Id);
    /*async function DeleteFile() {
        try {
            const response = await api.delete(`api.v1/gallery/${id}`)
            if (response.status === 204) {
                setReload(reload++)
            }

        } catch (err) {
            console.log(err)
        }
    }*/
    console.log(id, 'aqui', deleteg, deleteimg)
    return (
        <img id="img" className="class-img-slide" src={src} alt="Slide-img" ></img>
    )
}
