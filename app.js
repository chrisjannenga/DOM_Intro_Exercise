console.log("Javascript is alive!");

document.getElementById("greeting").innerHTML = "Hello, World!";

var listItems = document.getElementsByTagName('li');
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "yellow";
};
