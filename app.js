console.log("Javascript is alive!");

// This is the Greeting text

document.getElementById("greeting").innerHTML = "Hello, World!";

// This changes the background color of all li tags

var listItems = document.getElementsByTagName('li');
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "yellow";
};

// Create an img tag


var img = document.createElement("img");
img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
document.getElementById('greeting').appendChild(img);
