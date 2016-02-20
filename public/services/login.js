angular.module('blogApp')
.service('login',function($http,$q,Notification,$rootScope,$window){
  return ({
    login:login,
    logout:logout,
    isLoggedin : isLoggedin
  });

  function login(data){
    var request = $http({
        method: "POST",
          url: "/login",
          contentType: "application/json",
          data:data
    }).then(function(response) {
        if(response.status == 200 ){
          Notification.success('logged in successfully');
          setTimeout(function(){
            $window.location.reload();
          },1000)
            saveUserNameToWelcome(data.username);
        }else{
          Notification.error('wrong user name or password !!');
            saveUserNameToWelcome(data.username);
        }
      }, function errorCallback(response) {
    Notification.error('wrong user name or password !!!');
        saveUserNameToWelcome(data.username);
  });

  }

    function saveUserNameToWelcome(username){
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem("username", username);
        }
    }

  function logout(){
    var request = $http({
        method: "GET",
          url: "/logout"
    }).then(function(response) {
      Notification.success('logged out successfully');
      $window.location.reload();
    });
  }

  function isLoggedin(){
    var request = $http({
        method: "GET",
          url: "/loggedin"
    });
    return (request.then(handleSuccess, handleError) );
  }


  // handel success and error

  function handleError(response) {
      if (
          !angular.isObject(response.data) || !response.data.message
      ) {
          return ( $q.reject("An unknown error occurred.") );
      }
      // Otherwise, use expected error message.
      return ( $q.reject(response.data.message) );
  }

  function handleSuccess(response) {
      return ( response.data );
  }
});
