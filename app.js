
let button = document.querySelector("#add-button");
let ul =document.querySelector("#mylist");
    let text = document.querySelector("#input-text");
button.onclick =()=>{
    // let ul =document.querySelector("#mylist");
    // let text = document.querySelector("#input-text");
    ul.innerHTML+=`<li class="item">
    <i class="fa fa-circle-thin" job ="complete"></i>
    <p class="text"> ${text.value}</p>
    <button class="btn-trash"><i class="fa fa-trash"></i>delete</button>

</li>`;
text.value ="";
}
 ul.addEventListener("click", (e)=>{
     if (e.target.classList.contains("btn-trash")) {
         e.target.closest("li").remove();
     }
 })














// function addToDo (toDo,id,done) {
//     const text = `<li class="item">
//     <i class="fa fa-circle-thin" job ="complete"></i>
//     <p class="text"> ${toDo}  </p>
//     <i class="fa fa-trash-o" job ="delete"></i>
// </li>`;
//     const position = "beforeend";
//     list.insertAdjacentHTML(position, text);
// }
//     add_button.addEventListener("click", (e)=>{
//     function addToDo (toDo) {
//         const text = `<li class="item">
//         <i class="fa fa-circle-thin" job ="complete"></i>
//         <p class="text"> ${toDo}  </p>
//         <i class="fa fa-trash-o" job ="delete"></i>
//     </li>`;
//         const position = "beforeend";
//         list.insertAdjacentHTML(position, text);
    
//     }
  
// });

// the enter key
// document.addEventListener("keyup", (even)=> {
//     if(Event.keyCode == 13){
//         const toDo =input.value;

//         if(toDo){
//             addToDo(toDo);
//         }
//     }
    
// })

