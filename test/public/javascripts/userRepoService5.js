(function(){
    
    var userRepoService5 = function($http){
      
      var getUsers = function(username){
            return $http.get('/edi')
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getUsers
      };
        
    };
    
    var module = angular.module("postExample");
    module.factory("userRepoService5", userRepoService5);
    
}());