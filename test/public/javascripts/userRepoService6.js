(function(){
    
    var userRepoService6 = function($http){
      
      var getUsers = function(username){
            return $http.get('/backend')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService6", userRepoService6);
    
}());