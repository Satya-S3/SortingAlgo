window.onload=function(){
      slideMin();
      slideMax();
}

const spanInput=document.querySelector("#mid");
const input=document.querySelector("#search");
const yesbtn=document.querySelector(".yes");
const nobtn=document.querySelector(".no");

const minVal=document.querySelector(".min-val");
const maxVal=document.querySelector(".max-val");
const minTooltip=document.querySelector(".min-tooltip");
const maxTooltip=document.querySelector(".max-tooltip");
const range=document.querySelector(".slider-track");

const minGap=0;
const sliderMinValue=parseInt(minVal.min);
const sliderMaxValue=parseInt(maxVal.max);

function slideMin(){
      let gap = parseInt(maxVal.value)- parseInt(minVal.value);
      if(gap<=minGap){
            minVal.value=parseInt(maxVal.value)-minGap;
      }
      minTooltip.innerHTML=minVal.value;
      setArea();
}
function slideMax(){
      let gap = parseInt(maxVal.value)- parseInt(minVal.value);
      if(gap<=minGap){
            maxVal.value=parseInt(minVal.value)+minGap;
      }
      maxTooltip.innerHTML=maxVal.value;
      setArea();
}

function setArea(){
      range.style.left=(minVal.value/sliderMaxValue)*100+"%";
      minTooltip.style.left=(minVal.value/sliderMaxValue)*100+"%";
      range.style.right=100-(maxVal.value/sliderMaxValue)*100+"%";
      maxTooltip.style.right=100-(maxVal.value/sliderMaxValue)*100+"%";
      updateValue();
}

let inputValue=50;
const para=document.querySelector(".para");
const btnyes=document.querySelector(".yes");
const btnno=document.querySelector(".no");
const found=document.querySelector(".found");
const notfound=document.querySelector(".notfound");
let mid=0;

function updateValue(){
      inputValue=input.value;
      mid=Math.floor((parseInt(minVal.value)+parseInt(maxVal.value))/2);
      spanInput.innerHTML=mid;
      if(minVal.value==maxVal.value){
            if(inputValue==minVal.value){
                  found.style.display="block";
                  para.style.display="none";
                  btnyes.style.display="none";
                  btnno.style.display="none";
            }else{
                  notfound.style.display="block";
                  para.style.display="none";
                  btnyes.style.display="none";
                  btnno.style.display="none";
            }
      }
}

function update(){
      para.style.visibility="visible";
      btnyes.style.visibility="visible";
      btnno.style.visibility="visible";
}

yesbtn.onclick=function(){
      minVal.value=mid+1;
      slideMin();
}
nobtn.onclick=function(){
      maxVal.value=mid;
      slideMax();
}
