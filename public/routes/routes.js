angular.module('blogApp')
.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './template/home.html',
        controller: 'blogController'
      }).when('/admin', {
          templateUrl: './template/admin.html',
          controller: 'authControler',
          resolve: {
             loggedin: checkLoggedin
           }
        }).when('/posts/:id', {
            templateUrl: './template/post.html',
            controller: 'postController'
          }).when('/404', {
              templateUrl: './template/404.html',
              controller: 'blogController'
            }).when('/login', {
                templateUrl: './template/login.html',
                controller: 'login',
                 resolve: {
                    loggedin: isLoLoggedout
                  }
              }).
      otherwise({
        redirectTo: '/'
      });

  }]);

  var  checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
     // Initialize a new promise
      var deferred = $q.defer();
       // Make an AJAX call to check if the user is logged in
        $http.get('/loggedin').success(function(user){
          // Authenticated
           if (user !== '0')
            deferred.resolve();
          // Not Authenticated
          else {
             $rootScope.message = 'You need to log in.';
             console.log($rootScope.message);
             deferred.reject();
             $location.url('/login');
            }
          });
           return deferred.promise;
          };

          var isLoLoggedout = function($q, $timeout, $http, $location, $rootScope){
             // Initialize a new promise
              var deferred = $q.defer();
               // Make an AJAX call to check if the user is logged in
                $http.get('/loggedin').success(function(user){
                  // Authenticated
                   if (user == '0'){
                    deferred.resolve();
                  // Not Authenticated
                  }else {
                     $rootScope.message = 'You need to log out.';
                     console.log($rootScope.message);
                     deferred.reject();
                    $location.url('/');
                    }
                  });
                   return deferred.promise;
                  };
