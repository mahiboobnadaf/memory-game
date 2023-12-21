let boxes=document.querySelectorAll(".box");
let containers=document.querySelectorAll(".container");
let winLoss=document.getElementById("heading")
// console.log(winLoss.innerText)

window.addEventListener("click",(e)=>count(e.target))

let yellow_color=0 

genarateColor()
function genarateColor(){
    let random_num=Math.floor(Math.random() * 4)+1;

    
    for(let box of boxes){
        
        
        if(box.id==random_num){
            box.style.backgroundColor='yellow'
            yellow_color=random_num
        }
        
        else{
            box.style.backgroundColor='red';
        }

    }
}

function invisibleBox(){
    for(let main of boxes){ 
        console.log(main.style)
        main.style.backgroundColor='white'
    }
    return winLoss.innerText="Now Click red colors"
}
setTimeout(invisibleBox,'2000');

    

let count_set=new Set();

function count(num){
    var div_id=num.id;
    console.log( div_id)
    
    var re=/[0-9]+/g

    
    if((div_id.match(re)) && (div_id!=yellow_color)){
        count_set.add(div_id)
    }

    else{
        winLoss.innerText="Wrong input try again!!";
    }
       
    if(count_set.size==3){
        setTimeout(()=>winLoss.innerText="Congratulation You Won !!! ",'500');
    }
           
}
