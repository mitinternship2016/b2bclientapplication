(function(){
    
    var userRepoService4 = function($http){
      
      var getUsers = function(username){
            return $http.get('/region')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService4", userRepoService4);
    
}());