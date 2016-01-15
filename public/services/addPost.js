angular.module('blogApp')
.service('addPost',function($http,$q,Notification){
  return ({
    addPost:addPost
  });

  function addPost(data){
    var request = $http({
        method: "POST",
          url: "/addpost",
          data:data
    });
    return ( request.then(Notification.success('Your Post Added successfully')
    , handleError) );
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
