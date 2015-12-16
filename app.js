$(document).ready(function(){
	var itemTemplate = $('#templates .item'); //document.getElementByClassName('.item');
	var list = $('#list'); //document.getElementById('list');

	var addItemToPage = function(itemData) {
	  var item = itemTemplate.clone();
	  item.attr('data-id',itemData.id);
	  item.find('.description').text(itemData.description);
	  if(itemData.completed) {
	    item.addClass('completed');
	  }
	  list.append(item);
	}
});
