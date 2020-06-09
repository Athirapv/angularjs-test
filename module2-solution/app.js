(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var itemAdder=this;
	itemAdder.itemName = "";
  	itemAdder.itemQuantity = "";


 	itemAdder.addItem = function () {
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    
  }
  itemAdder.tobuy = ShoppingListCheckOffService.gettobuy();
   
   itemAdder.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
}

  
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;
  

  showList.brought = ShoppingListCheckOffService.getbrought();
  
 


 }

function ShoppingListCheckOffService() {
  var service = this;

  
  var item = new Object(); 
  var itemremovedl = new Object(); 
  
  var tobuy =[
  	{
  		name: "Cookie",
  		quantity: "20"
  	},
  	{
  		name: "Tomato",
  		quantity: "2 kg"
  	},
  	{
  		name: "Pepsi",
  		quantity: "2"
  	},
  	{
  		name: "Coke",
  		quantity: "7"
  	},
  	{
  		name: "Chocolate",
  		quantity: "6"
  	}
  ];
  var brought = [];
  var msg=" ";

  service.addItem = function (itemName, quantity) {
     item = {
      name: itemName,
      quantity: quantity
    };
    tobuy.push(item);
    

  };
   
  service.removeItem = function (itemIndex) {
   	
   	var itemremoved= tobuy.splice(itemIndex, 1)
   	itemremovedl = {
      name: itemremoved[0].name,
      quantity: itemremoved[0].quantity
    };
    brought.push(itemremovedl);
    console.log(brought.length);
    
    
  
    

  };


  service.getbrought = function () {
    return brought;
  };


  service.gettobuy = function () {
    return tobuy;
  };
}

})();