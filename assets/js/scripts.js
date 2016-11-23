// Check off specific to-dos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Delete to-dos by clicking on trash bin
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Add listener to input for adding a to-do
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab text value from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and append to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

$("h1 i").on("click", function(){
	var icon = $(this);
	$("input[type='text']").fadeToggle(function(){
		icon.toggleClass('fa-chevron-up');
	});
});