let arraySize = document.querySelector('#arrSize');
let speedInput = document.querySelector('#speedInput');

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arrSize").disabled = true;
}
function enableSizeSlider(){
    document.querySelector("#arrSize").disabled = false;
}
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}



function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { 
            resolve('') 
        }, milisec); 
    }) 
}

arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});


//merge sort
let delay = 260;
speedInput.addEventListener('input', function(){
    delay = 320 - parseInt(speedInput.value);
});



createNewArray();
function createNewArray(noOfBars = 60) {
    const container = document.querySelector("#container");
    container.innerHTML = '';

    let array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }


    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        container.appendChild(bar);
    }
}


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
