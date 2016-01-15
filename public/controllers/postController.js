angular.module('blogApp')
.controller('postController', function($scope,$routeParams,postsService,$location){
function getPost() {
  postsService.getPostById().then(function(data){
        $scope.post = data[0];
  })
}
// init post
getPost();

});
