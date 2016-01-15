angular.module('blogApp')
.controller('login', function($scope,login){
  $scope.login = function(){
  var data = {};
  data.username = $scope.username;
  data.password = $scope.password;
  console.log('start login');
  login.login(data);
  }

});
