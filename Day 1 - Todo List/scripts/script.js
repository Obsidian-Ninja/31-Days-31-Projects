const inputbox=document.getElementById("text-box");
const listCont=document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("ERROR : You must add something, cannot be blank");
    }
    else{
        let li=document.createElement("li");    /*check*/
        li.innerHTML=inputbox.value;
        listCont.appendChild(li);   /*check*/
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputbox.value="";
}

/*check*/

listCont.addEventListener("click", function(e){

        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
}, false);