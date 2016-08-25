(function(){
    
    var userRepoService7 = function($http){
      
      var getUsers = function(username){
            return $http.get('/thirdparty')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService7", userRepoService7);
    
}());