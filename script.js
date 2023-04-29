const input=document.getElementById("input");
const addButton=document.getElementById("add_button");
const countButton=document.getElementById("count_button");
const visibiltyButton=document.getElementById("show_hide_button");
const menuList=document.getElementsByClassName("menu_list");
const listItems=menuList.getElementsByClassName("menu_list_item");

visibiltyButton.addEventListener("click",handleVisibilty);
addButton.addEventListener("click",handleAdding);
countButton.addEventListener("click",calculateCount);

function calculateCount(){
    let count=0;
    for(var i=0;i<listItems.length;i++){
        count++;
    }
    console.log(count);
}



function handleAdding(){
    let input=document.getElementById("input");
    let menuList=document.getElementsByClassName("menu_list");
    if(input.value!==""){
        let li=document.createElement("li");
        li.innerHTML=input.value;
        input.value="";
        menuList.appendChild(li);
    }
    else{
        alert("Nothing to add.");
    }

}

function handleVisibilty() {
    if(menuList.style.display==="none"){
        menuList.style.display="block";
    }
    else{
        menuList.style.display="none";
    }
}

