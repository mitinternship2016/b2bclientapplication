(function(){
    
   var app = angular.module("postExample",[]);
  
   var UsersController = function($scope, userRepoService, userRepoService2, userRepoService3, userRepoService4, userRepoService5, userRepoService6, userRepoService7){
     
     var onFetchError = function(message){
       $scope.error = "Error Fetching Users. Message:" +message;
     };
     
     var onFetchCompleted = function(data){
        $scope.users =data;
     };

     var getUsers = function(){
       userRepoService.get().then(onFetchCompleted,onFetchError);
     };
     
     getUsers();
     
     var onFetchCompleted2 = function(data){
        $scope.industries =data;
     };
     
     var getUsers2 = function(){
       userRepoService2.get().then(onFetchCompleted2,onFetchError);
     };
     
     getUsers2();     
     
     var onFetchCompleted3 = function(data){
        $scope.geographies =data;
     };
     
     var getUsers3 = function(){
       userRepoService3.get().then(onFetchCompleted3,onFetchError);
     };
     
     getUsers3();     
     
     var onFetchCompleted4 = function(data){
        $scope.regions =data;
     };
     
     var getUsers4 = function(){
       userRepoService4.get().then(onFetchCompleted4,onFetchError);
     };
     
     getUsers4();     
    
     var onFetchCompleted5 = function(data){
        $scope.edis =data;
     };
     
     var getUsers5 = function(){
       userRepoService5.get().then(onFetchCompleted5,onFetchError);
     };
     
     getUsers5();

      var onFetchCompleted6 = function(data){
        $scope.backends =data;
     };
     
     var getUsers6 = function(){
       userRepoService6.get().then(onFetchCompleted6,onFetchError);
     };
     
     getUsers6();     

      var onFetchCompleted7 = function(data){
        $scope.thirdparties =data;
     };
     
     var getUsers7 = function(){
       userRepoService7.get().then(onFetchCompleted7,onFetchError);
     };
     
     getUsers7();     
     
   };
   app.controller("UsersController", UsersController);
}());