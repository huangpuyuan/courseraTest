(function(){
  "use strict";

  angular.module('myFirstApp',[])

  .controller('myFirstCotroller',function($scope){
      $scope.name="Yaakov";
      $scope.sayHello = function(){
        return "Hello Coursera!";
      }
  });
}

)()
