var plus = document.querySelector(".button1");
var sol1 = document.querySelector(".sol1");
var plus2 = document.querySelector(".button2");
var sol2 = document.querySelector(".sol2");
var plus3 = document.querySelector(".button3");
var sol3 = document.querySelector(".sol3");

plus.addEventListener('click', (e) => {
    var showsol1 = sol1.style.display
    sol1.style.display = (showsol1 == 'none' ? 'block' : 'none')
});
plus2.addEventListener('click', (f) => {
    var showsol2 = sol2.style.display
    sol2.style.display = (showsol2 == 'none' ? 'block' : 'none')
});
plus3.addEventListener('click', (i) => {
    var showsol3 = sol3.style.display
    sol3.style.display = (showsol3 == 'none' ? 'block' : 'none')
});

var position = document.querySelector('#btn1');

// position.addEventListener('click', (e) => {
//     console.log('E Type: ' + e.offsetX);
//     position.innerHTML = "Mouse X : " + e.offsetX + "Mouse Y : " + e.offsetY;

// });

position.addEventListener('mousemove', (e) => {
    console.log('E Type: ' + e.offsetX);
    position.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", " + e.offsetX + ")";

});