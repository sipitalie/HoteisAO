export default function IsAdminHotel(id_owner){
    if (localStorage.hasOwnProperty("id")){
        const idLoged=localStorage.getItem("id")
        return (parseInt(idLoged)===parseInt(id_owner))?true:false;    
    }else{
        return false
    };
    
};
/*export default function IsAdminHotel(id_hotel){
    if (localStorage.hasOwnProperty("isAdmin")){
        let HoteisId=[]
        let arrayIsAdmin=[]
        
        try {
            // Parse a JSON
            HoteisId = JSON.parse(localStorage.getItem("isAdmin"));
            console.log(HoteisId)
            if(HoteisId.length>0){
                arrayIsAdmin=HoteisId.map((idhotel)=>{return idhotel.id});
                console.log(arrayIsAdmin)
                return arrayIsAdmin.includes(parseInt(id_hotel))?true:false;

            }else{
                console.log("1")
                return false
            };   
        } catch (e) {
            console.log("2")
            return false
        };
        

    }else{
        console.log("3")
        return false
    };
    
};
 

 */

