
(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope','$filter']; 

	function LunchCheckController($scope,$filter){
		$scope.item="";
		$scope.val="";
		$scope.col="";
		$scope.check=function(){
		var cnt=$scope.item.split(/,/);

		var filtered = cnt.filter(function (el) {
			 return el != ""
		});
		if (filtered.length>3){
			$scope.val="Too much!";
			$scope.col="red";
		}
		else if(filtered.length<=3 && filtered.length>0 ){
			$scope.val="Enjoy!";
			$scope.col="green";
		}
		else{
			$scope.val="Please enter data first";
			$scope.col="blue";
		}
		};

		
		$scope.upper=function(){
			var upCase=$filter('uppercase');
			$scope.item=upCase($scope.item);
			};
		
	}
	
})();


(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope','$filter']; 

	function LunchCheckController($scope,$filter){
		$scope.item="";
		$scope.val="";
		$scope.col="";
		$scope.check=function(){
		var cnt=$scope.item.split(/,/);

		var filtered = cnt.filter(function (el) {
			 return el != ""
		});
		if (filtered.length>3){
			$scope.val="Too much!";
			$scope.col="red";
		}
		else if(filtered.length<=3 && filtered.length>0 ){
			$scope.val="Enjoy!";
			$scope.col="green";
		}
		else{
			$scope.val="Please enter data first";
			$scope.col="blue";
		}
		};

		
		$scope.upper=function(){
			var upCase=$filter('uppercase');
			$scope.item=upCase($scope.item);
			};
		
	}
	
})();

