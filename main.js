var mytoggle = document.querySelector('.toggle');
var mybanner = document.querySelector('.banner');

mytoggle.onclick = function () {
    
    mytoggle.classList.toggle('active');
    mybanner.classList.toggle('active');

}