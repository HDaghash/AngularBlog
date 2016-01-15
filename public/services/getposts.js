angular.module('blogApp')
.service('postsService',function($http,$q,$routeParams,$location){
  return ({
    getposts:getposts,
    getPostById:getPostById
  });

  function getposts(){
    var request = $http({
        method: "get",
          url: "api/posts"
    });
    return ( request.then(handleSuccess, handleError) );
  }

  function getPostById(){
    var request = $http({
        method: "get",
          url: "api/posts/" + $routeParams.id
    });
      return ( request.then(
        function handleError(response) {
        if(response.data.length == '0'){
          $location.path('/404');
        }else{
          return response.data;
        }
      }
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
