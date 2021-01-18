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
var nameG=[];
var voteG=[];
var numSh=[];
var Div=document.getElementById("Section")

var num = document.getElementById("maxnum")
var sub = document.getElementById("formID");
var iamgeprev1=99;
var iamgeprev2=99;
var iamgeprev3=99;

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
    nameG.push(name)
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
    image3index=getrandomnumber();
    while(image1index==iamgeprev1 || image1index==iamgeprev2 || image1index==iamgeprev3 ||image2index== iamgeprev3||image2index== iamgeprev2 || image3index==iamgeprev3)
    {
        image1index=getrandomnumber();
        image2index=getrandomnumber();
        image3index=getrandomnumber();  
    }
}
    while(image1index==image2index||image3index==image1index||image2index==image3index  )
// console.log(allimages.prototype.inserti[image2index].source)
if( image1index==iamgeprev1 || image1index==iamgeprev2 || image1index==iamgeprev3 ||image2index== iamgeprev3||image2index== iamgeprev2 || image3index==iamgeprev3)
{
    console.log("s")
  

}
image1.src=allimages.prototype.inserti[image1index].source
allimages.prototype.inserti[image1index].timesshown++;


image2.src=allimages.prototype.inserti[image2index].source
allimages.prototype.inserti[image2index].timesshown++;
image3.src=allimages.prototype.inserti[image3index].source
allimages.prototype.inserti[image3index].timesshown++;
console.log(image3index,image2index,image1index);
iamgeprev1=image1index;
iamgeprev2=image2index;
iamgeprev3=image3index;
console.log();
}

randomimage(image1index,image2index,image3index)

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
    if(startsel>=maxsel){
    if (trigger){
var percent;
    var ULE=document.getElementById("UL")
   
    for( var x=0;x<allimages.prototype.inserti.length;x++){
        var ListE=document.createElement("li")
        if(allimages.prototype.inserti[x].timesshown==0 && allimages.prototype.inserti[x].vote==0){
percent=0;
        } else {
            percent=allimages.prototype.inserti[x].vote/allimages.prototype.inserti[x].timesshown;
        voteG.push(allimages.prototype.inserti[x].vote)
        numSh.push(allimages.prototype.inserti[x].timesshown)
            percent=Math.floor(percent*100);

        }
        ListE.textContent="Name "+ allimages.prototype.inserti[x].name + " Votes " + allimages.prototype.inserti[x].vote + " Times Shown " + allimages.prototype.inserti[x].timesshown + " Percentage "+ percent+"%"
        ULE.appendChild(ListE)
    }
    chartRes()
    trigger=false;
}
}else{alert("You still have  "+(maxsel-startsel)  +"  Votes | you can edit number of selection")}
}

// console.log(nameG)
function chartRes(){
var ctx=document.getElementById("Canvas").getContext('2d');
var mixedChart  = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels:nameG,
       
        datasets: [{
            
            label:"Votes",
            backgroundColor:"    rgba(96, 204, 33, 0.733)",
            hoverBackgroundColor:"rgba(2, 255, 221, 1)",
       
            barPercentage: 1,
            barThickness: 50,
            maxBarThickness: 50,
            minBarLength: 2,
            order: 1,
            data: voteG
    
         
        },
        {  
            order:2,
            type:"line",
            label:"Times Of Shown",
            pointBorderWidth:2,
        backgroundColor:"   rgba(54, 99, 110, 0.849)  ",
        hoverBackgroundColor:"rgba(2, 255, 221, 1)",
        borderWidth:9,
        // barPercentage: 0.5,
        // barThickness: 15,
        // maxBarThickness: 15,
        // minBarLength: 2,
     data:num.length,
        data: numSh

     
        
       

        
  
    }],
},
    
    // options: {
    //     scales: {
    //         xAxes: [{
    //             stacked: true
    //         }],
    //         yAxes: [{
    //             stacked: true
    //         }]
    //     }
    // }
});
}

