var app = angular.module("ComLab",[]);
//Controlador de registros
app.controller("consultEvent", ['$scope', '$filter', function($scope,$filter){
	var config = {
    	apiKey: "AIzaSyCAWwz_i90zHuEzcNF0e1XBQoBFybnXW_k",
    	authDomain: "comlabapplication.firebaseapp.com",
    	databaseURL: "https://comlabapplication.firebaseio.com",
    	projectId: "comlabapplication",
    	storageBucket: "comlabapplication.appspot.com",
    	messagingSenderId: "613921305622"
  	};
 	 firebase.initializeApp(config);
 	 var database = firebase.database();
 	 $scope.Events=[];
 	 Events = database.ref("/events");
 	 Events.on("child_added",addEvent)
 	 function addEvent(data){
 	 	$scope.Events= data.val();
 	 	console.log($scope.Events);
 	 }
 	/*var starCountRef = firebase.database().ref('/events');
	 starCountRef.on('value', function(snapshot) {
  		$scope.Events=  snapshot.val();
  		console.log($scope.Events);
	});*/

}]);
app.controller("Comlab",['$scope', '$filter', function($scope,$filter){
	// Initialize Firebase
	var config = {
    	apiKey: "AIzaSyCAWwz_i90zHuEzcNF0e1XBQoBFybnXW_k",
    	authDomain: "comlabapplication.firebaseapp.com",
    	databaseURL: "https://comlabapplication.firebaseio.com",
    	projectId: "comlabapplication",
    	storageBucket: "comlabapplication.appspot.com",
    	messagingSenderId: "613921305622"
  	};
 	 firebase.initializeApp(config);  	
	$scope.file={};
	$scope.user ={};
	$scope.Event = {};
	$scope.project= {};s
	$scope.News = {};
	$scope.newUser = {};
	$scope.registroGoogle = function(){
		var database = firebase.database();
		$scope.registro=database.ref("/users");
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
				.then(function(result){
					$scope.newUser = result.user;
					$scope.name = $scope.newUser.displayName;
					$scope.Event.owner = $scope.newUser.displayName;
					$scope.News.owner = $scope.newUser.displayName;
					$scope.project.owner= $scope.newUser.displayName;
					//quitar esta linea
					console.log($scope.newUser.displayName);
					
					
					//console.log($scope.newUser);
				});
	}
	$scope.registroFacebook = function(){
		var database = firebase.database();
		$scope.registro=database.ref("/users");
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
				.then(function(result){
					$scope.newUser=result.user;
					$scope.Event.owner = $scope.newUser.displayName;
					//quitar esta linea
					console.log($scope.newUser.displayName);
				});		
	}
	
	$scope.newEvent = function(){
		var database = firebase.database();
		$scope.Event.img ="url"
		hora = new Date(1970, 0, 1, 14, 57, 0);
		fecha = $filter('date')($scope.Event.date, "dd/MM/yyyy");
		hora = $filter('date')($scope.Event.hour, "HH:mm");
		$scope.Event.hour=hora
		$scope.Event.date=fecha;
		$scope.events = database.ref("/events");
		$scope.events.push($scope.Event);

	}

	$scope.newNew = function(){
		var database = firebase.database();
		$scope.News.img = "url";
		$scope.news = database.ref("/news");
		$scope.news.push($scope.News);
	}

	$scope.newProject = function(){
		var database = firebase.database();
		$scope.project.img="url";
		database.ref("/projects").push($scope.project);
	}
	$scope.registro = function(){
		var user = firebase.auth().currentUser;
		console.log(user);
		if (user != null) {
  			$scope.user.name = user.displayName;
  			$scope.user.email = user.email;
 			$scope.user.uid = user.uid;
		}
		var database = firebase.database();
		database.ref("/users").push($scope.user)
	}
}]);
