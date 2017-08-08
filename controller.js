(function() {
  var myApp = angular.module('wordList', []);

  myApp.controller('wordListController', function($scope){

      $scope.printed = [{word: 'print', style: 'blue'}];

      $scope.wordsStorage = [
        {word: 'blankie', style: 'blue'},
        {word: 'pierogi', style: 'peachpuff'},
        {word: 'haggis', style: 'border-dashed'}
      ];

      /*$scope.printedPhrase = [{phrase: "Come on", style: "green"}];*/

      $scope.phrasesStorage = [
        {phrase: 'get me a bottle', style: 'pink' },
        {phrase: 'bring me food', style: 'border-solid' }

      ];

      $scope.addWord = function(wordsStorage){
        var randomize = Math.floor(Math.random() * 3);
        $scope.printed.push({word: wordsStorage[randomize].word, style: wordsStorage[randomize].style});
      }

     $scope.addPhrase = function(phrasesStorage){
         var randomize = Math.floor(Math.random() * 2);
         $scope.printed.push({word: phrasesStorage[randomize].phrase, style: phrasesStorage[randomize].style});
     }

     $scope.decorateWord = function(wordsStorage){
         var randomize = Math.floor(Math.random() * 3);
         $scope.printed.push({word: wordsStorage[randomize].style});
     }

   });


  })();
