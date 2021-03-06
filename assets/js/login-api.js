var LoginApi = (function () {

    //TODO : BASE URL
    //var  baseUrl ="http://192.168.200.63:8080";
    var baseUrl = "http://127.0.0.1:8080";

    var PATH_LOGIN = "/login";
    var PATH_REGISTER = "/register";
    var PATH_LOGOUT = "/logout";
    var PATH_POST = "/post";
    var PATH_COMMENT = "/comment";
    var PATH_USUARIO = "/users";

    return {
        login: function (email, password) {
            return new Promise(function (resolve, reject) {

                var Id = {
                    email: email,
                    password: password
                }

                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(Id),
                    url: baseUrl + PATH_LOGIN,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            });
        },

        register: function (name, email, password) {
            return new Promise(function (resolve, reject) {
                var Id = {
                    name: name,
                    email: email,
                    password: password
                }

                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(Id),
                    url: baseUrl + PATH_REGISTER,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            });
        },

        logout: function (token) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    method: 'DELETE',
                    headers: { 'Authorization': 'Bearer ' + token },    //utilizar para los demas 
                    url: baseUrl + PATH_LOGOUT,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            });
        },

        post: function (title, body) {
            return new Promise(function (resolve, reject) {
                var Id = {
                    title: title,
                    body: body
                }
                $.ajax(
                    {
                    method: 'POST',
                   // headers:{'Authorization':'Bearer '+'ca8de2e5-6bf2-4c6e-b6c4-c264cdf73a21'}, 
                   //headers:{'Authorization':'Bearer '+'75316740-ce28-4d83-974a-3d971ce07615'}, 
                headers:{'Authorization':'Bearer '+'9fa9d43a-d063-48c5-b401-2150e755e95c'}, 

                   
                    headers: { 'Authorization': 'Bearer ' + token },

                    url: baseUrl + PATH_POST,
                    data: JSON.stringify(Id),

                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            });
        },
           /*
        usuario: function (idUser) {
            return new Promise(function (resolve, reject) 
            {
                    var Id = { idUser}
                    $.ajax(
                    {
                        method: 'POST',
                        baseUrl: 'http://localhost:8080/users/',
                        headers: { 'Authorization': 'Bearer ' + token },
                        
                        url:  baseUrl+ idUser,
                        data: JSON.stringify(Id),
        
                        success: function (data) {
                            resolve(data);
                        },
                        error: function (error) {
                            reject(error);
                        }
                    });*/

        

                /*
post: function(title,post_id,body,post_userId){
    return new Promise(function (resolve,reject) 
    {    
    var Id={
        title:title,
        post:post_id,
        body:body,
        userId:post_userId
    }    

    $.ajax({
            method: 'POST',
            headers:{'Authorization':'Bearer '+token}, 
            url:baseUrl+PATH_POST,
            data:JSON.stringify(Id),
           
            success:function(data){
                resolve(data);
            },
            error:function (error){
                reject(error);
            }
        });   
            });
        },
         */
    }

})();//funcion que se invoca automaticamente
