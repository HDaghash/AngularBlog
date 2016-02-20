var blog = angular.module('blogApp',['ngRoute','textAngular','ui-notification']);
blog.controller('blogController', function($scope,postsService,$location,$rootScope,login){
  $scope.imagePath = './assets/images/washedout.png';
  function getposts() {
      postsService.getposts().then(function (data) {
          $scope.lastPost = data[0];
          $scope.postLimit = 3;
          var newData = [];

          for (var i = 1; i < data.length; i++) {
            newData.push(data[i])
          }
          $scope.posts = newData;

          $scope.increasePost = function(){
            if($scope.postLimit < $scope.posts.length){
              $scope.postLimit = $scope.postLimit + 3;
            }
          }

          $scope.goToPost = function(id){
             $location.path("posts/" + id);
          }


          // end post promise
          }
      )};


      // init posts
      getposts();

      $rootScope.goToRout = function(rout){
        if(rout)
        $location.path(rout);
      }

      $rootScope.logout = function(){
        login.logout();
      }

      $rootScope.checkUser = function () {
        login.isLoggedin().then(function(data){
          $rootScope.loggedin = data;
        });
      }

    function init(){
            $scope.username = localStorage.getItem("username");
    }
    init();

});
