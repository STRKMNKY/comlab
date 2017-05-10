var config = {
    	apiKey: "AIzaSyCAWwz_i90zHuEzcNF0e1XBQoBFybnXW_k",
    	authDomain: "comlabapplication.firebaseapp.com",
    	databaseURL: "https://comlabapplication.firebaseio.com",
    	projectId: "comlabapplication",
    	storageBucket: "comlabapplication.appspot.com",
    	messagingSenderId: "613921305622"
  	};
  	firebase.initializeApp(config);
var images = angular.module("Images",[]);
images.controller("img", ['$scope', '$filter', function($scope,$filter){
	
  	var datos = $scope.img;
  	
  	$scope.sendImg = function(){
  		alert(datos);
  		console.log($scope.img);
  		var fileName = $("#img").val();
  		var file = document.getElementById("img").files;
  		console.log(fileName);
  	}
}
]);