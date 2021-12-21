const img = document.querySelector(".img");
var btn = document.querySelector(".btn");
var text = document.querySelector(".text");

console.log("Button");
btn.addEventListener('click', (e) =>{ 
  var showImg = img.style.display
  img.style.display = (showImg == 'none' ? 'block' : 'none' )
// alert("working");
});
console.log("img");
btn.addEventListener('click', (e) =>{ 
  var hideText = text.style.display
  text.style.display = (hideText == 'flex' ?  'none' : 'flex')
// alert("working");
});
