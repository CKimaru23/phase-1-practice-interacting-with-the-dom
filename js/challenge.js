"use strict"; //in strict mode to limit me using undeclared variable since I have many variables

//Dealing with array
function changingToArray(a){
    if(Array.isArray(a)){
        for(let b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c
    }
    return Array.from(a)
}

//our counter function
function timer(){
    return setInterval(function(){
        const a=document.getElementById("counter");
        const b=parseInt(a.innerText);
        a.innerText=b+1;
    },1000)
}
let interval = timer();

//Declaring variables from the HTML 
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const comment = document.getElementsByTagName("form")[0];

//Minus function
minus.addEventListener("click",function(){
    const a=document.getElementById("counter");
    const b=parseInt(a.innerText);
    a.innerText=b-1
});

//Plus Function
plus.addEventListener("click",function(){
    const a=document.getElementById("counter");
    const b=parseInt(a.innerText);
    a.innerText=b+1;
});

//Like function that takes the current counter, and counts the number of likes per second then outputs in a list-format in our DOM
heart.addEventListener("click",function(){
    let a=document.getElementById("counter");
    let b=parseInt(a.innerText);
    let c=document.querySelector(".likes");
    let d=void 0;

    if([].concat(changingToArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){
        d=document.querySelector('[data-num="'+b+'"]');
        var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
    }else(d=document.createElement("li")).setAttribute("data-num",b)
        ,d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)
});

//The pause function. When the user presses pause, the counter stops then resumes on pressing resume.
//We cannot press pause when the current counter is zero. That is why I had to initialize it to not-zero.
//On pressing pause, it toggles off the submit button and the other functionalities.
let currentCounter=!0;
pause.addEventListener("click",function(){
    currentCounter?(currentCounter=!1,clearInterval(interval),this.innerText="resume"):(currentCounter=!0,interval=timer(),this.innerText="pause"),
        [].concat(changingToArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!currentCounter)})
});

//comment section. The comments and its div are appended to the created p tag
comment.addEventListener("submit",function(a){
    a.preventDefault();
    const b=this.children[0];
    const c=b.value;
    b.value="";
    const d=document.querySelector(".comments");
    const e=document.createElement("p");
    e.innerText=c,d.appendChild(e);
});



