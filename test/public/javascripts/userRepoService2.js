(function(){
    
    var userRepoService2 = function($http){
      
      var getUsers = function(username){
            return $http.get('/industry')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService2", userRepoService2);
    
}());