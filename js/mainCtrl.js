var app = angular.module('chatty');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postParseData function, but should be placed on $scope.

  // binds input ngModel="message" to empty object
  $scope.message = {};

  $scope.messages = {};

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)

// 
  $scope.getParseData = function () {
    parseService.getData()
      .then(function (res) {
      $scope.messages = res.data.results;
    })

  };


  //The postParseData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.

// adds message object on $scope to services postData function
  $scope.postParseData = function () {
    parseService.postData($scope.message);
    // removes object on message so we can add a new message
    $scope.message = {};
  }




  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
    setInterval(function(){
      $scope.getParseData();
    }, 1000)
})