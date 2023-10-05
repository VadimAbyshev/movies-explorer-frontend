// import { data } from "jquery";

class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization;
    }
    
    _checkResponse(res){
       return res.ok ? res.json() : Promise.reject
    }


    // getInfo(){
    //     return fetch(`${this._url}/users/me`,{
    //         headers:{
    //             authorization: this._authorization
    //         }
    //     })
    //     .then(this._checkResponse)
    // }

    getCards(){
        return fetch(`${this._url}/movies`,{
            headers:{
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

//     setUserInfo(data){
//         return fetch(`${this._url}/users/me`,{
//             method: 'PATCH',
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: data.name,
//                 about: data.description,
//             })
//         })
//         .then(this._checkResponse)
//     };

//     setNewAvatar(data){
//         return fetch(`${this._url}/users/me/avatar`,{
//             method: 'PATCH',
//             headers: this._headers,
//             body: JSON.stringify({
//                avatar: data.avatar
//             })
//         })
//         .then(this._checkResponse)
//     };

//     addCard(data){
//         return fetch(`${this._url}/cards`,{
//             method: 'POST',
//             headers: this._headers,
//             body: JSON.stringify({
//                name: data.title,
//                link: data.link
//             })
//         }) 
//         .then(this._checkResponse)      
//     }

//     addLike(cardId){
//         return fetch(`${this._url}/cards/${cardId}/likes`,{
//             method: 'PUT',
//             headers: { authorization: this._authorization},
//         }) 
//         .then(this._checkResponse)      
//     }   

//     delLike(cardId){
//         return fetch(`${this._url}/cards/${cardId}/likes`,{
//             method: 'DELETE',
//             headers: { authorization: this._authorization},
//         }) 
//         .then(this._checkResponse)      
//     }   

//     delCard(cardId){
//         return fetch(`${this._url}/cards/${cardId}`,{
//             method: 'DELETE',
//             headers: { 
//                 authorization: this._authorization
//             },
//         }) 
//         .then(this._checkResponse)      
//     }   


}
const api = new Api({
    baseUrl: 'http://diplom.vadimo.nomoredomainsicu.ru',
    headers: {
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBkOGVhMTQyMDM2ZTM2ZDUzMjA5YzUiLCJpYXQiOjE2OTUzODczMDUsImV4cCI6MTY5NTk5MjEwNX0.XwI6gu_7EjWLiC69cl3KV20E39xjyiBQBjvPrkyvv1U',
      'Content-Type': 'application/json'
    }
  });

  export default api;