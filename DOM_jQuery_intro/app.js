console.log("Javascript is alive!");

// Task 1

$("#greeting").html("Hello, World!");

// Task 2

$("li").css('backgroundColor', 'yellow');

// Task 3

$("#greeting").append('<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif" alt=" Waving Gif" />');

// Task 4

$("li").click(function() {
  $(this).toggleClass("selected");
});

// Task 5

$("li").mousedown(function() {
  $("img:odd").attr("src", "images/" + $(event.target).html() + ".jpeg");
})

// Task 6
