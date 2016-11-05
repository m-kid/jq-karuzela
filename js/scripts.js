$(document).ready(function(){
    var carouselList = $("#carousel ul");

    setInterval(changeSlide, 5000); 
  
function changeSlide () {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);    
    };

function moveFirstSlide () { 
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
    console.log('automatyczna zmiana');
}

var buttonRight = document.getElementById('js-right');
    
function arrowRight () {
    carouselList.animate({'marginLeft':-400}, 300, changeSlide);    
    console.log('poszło w prawo');
    };

buttonRight.addEventListener('click', arrowRight);

/* NIEUDANE PODEJŚCIA DO STRZAŁKI W LEWO 

var buttonLeft = document.getElementById('js-left');
    
var toCompute = document.getElementById('getstyle');
var style = window.getComputedStyle(toCompute);
var left = style.getPropertyValue('margin-left')
console.log(left);

function arrowLeft () {


    carouselList.animate({'marginRight':-400}, 300, changeSlide);  
    console.log('poszło w lewo');
    };

buttonLeft.addEventListener('click', arrowLeft);

function changeSlideBackwards () {
    var itemOne = document.getElementById('1');
    var itemTwo = document.getElementById('2');
    var itemThree = document.getElementById('3');
    var itemFour = document.getElementById('4');
    var itemFive = document.getElementById('5');
    itemOne.after(itemFive);
    itemFive.after(itemFour);
    itemFour.after(itemThree);
    itemThree.after(itemTwo);
    itemTwo.after(itemOne);
    
}
*/
});