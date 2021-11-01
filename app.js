
let addButton = document.querySelector("#add-button");
let ul = document.querySelector("#mylist");
let li = document.querySelectorAll(".item");
let checkbox = document.querySelectorAll(".item");
let text = document.querySelector("#input-text");
let i = 5;
text.onkeyup = () => {
    if (text.value != "") {
        addButton.classList.add("active");
    } else {
        addButton.classList.remove('active');
    }
}

addButton.onclick = () => {
    ul.innerHTML += `<li class="item"><input type="checkbox" name="" class="check" />${text.value}<button class="del"><i
        class="fa fa-trash delete"></i></button ></li > `;


    text.value = "";
}

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        e.target.closest("li").remove();
    }
    if (e.target.classList.contains("delete")){
        e.target.closest("li").remove();
    }

    if (e.target.classList.contains("check")) {
        (e.target.parentElement).classList.toggle('checked');
    }
 
    })

  








