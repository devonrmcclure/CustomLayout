$(".sidebar-toggle").click(function(e) {
    e.preventDefault();
    $(".sidebar").toggleClass("toggled");

});

$(".fab-toggle").click(function(e) {
	e.preventDefault();
	$(".fab-item").toggleClass("hidden");
});