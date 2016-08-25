(function(){
    
    var userRepoService3 = function($http){
      
      var getUsers = function(username){
            return $http.get('/geography')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService3", userRepoService3);
    
}());