'use strict'
var image1index;
var image2index;
var image3index;
var maxsel=25;
var startsel=0;
var trigger=true;
var image1=document.getElementById("image1")
var image2=document.getElementById("image2")
var image3=document.getElementById("image3")

var Div=document.getElementById("Section")

var num = document.getElementById("maxnum")
var sub = document.getElementById("formID");

 sub.addEventListener("submit", submitRun);

 function submitRun (event){
     
    event.preventDefault()
    var maxnum=event.target.maxnum.value
    parseInt(maxnum);
console.log(maxnum)
maxsel=maxnum;
 }
function allimages(name,source){

    this.name=name
    this.source=source
    this.timesshown=0;
    this.vote=0
    allimages.prototype.inserti.push(this)
}
allimages.prototype.inserti=[];

new allimages("bag","img/bag.jpg");
new allimages("banana","img/banana.jpg");
new allimages("bathroom","img/bathroom.jpg");
new allimages("breakfast","img/breakfast.jpg");
new allimages("boots","img/boots.jpg");
new allimages("bubblegum","img/bubblegum.jpg");
new allimages("chair","img/chair.jpg");
new allimages("cthulhu","img/cthulhu.jpg");
new allimages("dog-duck","img/dog-duck.jpg");
new allimages("dragon","img/dragon.jpg");
new allimages("pen","img/pen.jpg");
new allimages("pet-sweep","img/pet-sweep.jpg");
new allimages("scissors","img/scissors.jpg");
new allimages("shark","img/shark.jpg");
new allimages("sweep","img/sweep.png");
new allimages("tauntaun","img/tauntaun.jpg");
new allimages("unicorn","img/unicorn.jpg");
new allimages("usb","img/usb.gif");
new allimages("water-can","img/water-can.jpg");
new allimages("wine-glass","img/wine-glass.jpg");


function getrandomnumber(){
    
    var randomnum=Math.floor(Math.random()*20);
   
    return   randomnum;
}

function randomimage(){

  do
  {  image1index=getrandomnumber();
    image2index=getrandomnumber();
    image3index=getrandomnumber();}
    while(image1index==image2index||image3index==image1index||image2index==image3index)
// console.log(allimages.prototype.inserti[image2index].source)
image1.src=allimages.prototype.inserti[image1index].source
allimages.prototype.inserti[image1index].timesshown++;
console.log(allimages.prototype.inserti[image1index].timesshown);

image2.src=allimages.prototype.inserti[image2index].source
allimages.prototype.inserti[image2index].timesshown++;
image3.src=allimages.prototype.inserti[image3index].source
allimages.prototype.inserti[image3index].timesshown++;


}

randomimage()

// image1.addEventListener("click",render)
// image2.addEventListener("click",render)
// image3.addEventListener("click",render)

Div.addEventListener("click",render)
function render(event){
   
startsel++;
if(startsel<=maxsel){
    
if(event.target.id=="image1"){
    allimages.prototype.inserti[image1index].vote++;
  
} else if(event.target.id=="image2"){
    allimages.prototype.inserti[image2index].vote++;

}else if(event.target.id=="image3"){
    allimages.prototype.inserti[image2index].vote++;


}else{}

}else if(startsel>=maxsel){
    alert("You Reach Max Choises Press Result")
 
}
if(startsel<=maxsel){
randomimage();
}
}

function Result(){
    if (trigger){
var percent;
    var ULE=document.getElementById("UL")
   
    for( var x=0;x<allimages.prototype.inserti.length;x++){
        var ListE=document.createElement("li")
        if(allimages.prototype.inserti[x].timesshown==0 && allimages.prototype.inserti[x].vote==0){
percent=0;
        } else {
            percent=allimages.prototype.inserti[x].vote/allimages.prototype.inserti[x].timesshown;
        
            percent=Math.floor(percent*100);

        }
        ListE.textContent="Name "+ allimages.prototype.inserti[x].name + " Votes " + allimages.prototype.inserti[x].vote + " Times Shown " + allimages.prototype.inserti[x].timesshown + " Percentage "+ percent+"%"
        ULE.appendChild(ListE)
    }
    trigger=false;
}
}

