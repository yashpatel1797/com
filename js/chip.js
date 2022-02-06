
// const chipElement = document.querySelector('#chip');
window.addEventListener("load", runChip);
function runChip(){
  console.log("function loaded");
const c = document.getElementsByClassName("btn-close");
let inputValue = document.querySelector("#inputChip");
// let inputValue = document.querySelector('#chip');
// console.log("ho")
// c.addEventListener("click", function() {
//     c.style.display = 'none';
// });

for (let i = 0; i < c.length; i++) {
    c[i].addEventListener("click", function() {
      console.log("close");
      this.parentElement.style.display = 'none';
      // c[i].style.display='none';
    });}


// function deleteChip(e){
//   e.target.parentElement.remove();
// }
// function addChip(a){
//   console.log("hello");
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = `${a.target.value}
//   <span class="material-icons btn-close"> close </span>`
//   newDiv.classList.add("chip-content");
//   newDiv.classList.add("chip");
//   newDiv.lastChild.addEventListener("click", deleteChip);
//   let inputContainer = document.querySelector(".inputContainer");
//   inputContainer.appendChild(newDiv);
//   inputValue.value = "";
// }
// function hello(){
//   console.log("hello2");
// }
// inputValue.addEventListener("change", addChip);

// drag and drop
// watch again to understan working - https://www.youtube.com/watch?v=jfYWwQrtzzY&ab_channel=WebDevSimplified
// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')
// const container = document.querySelector('.drag-drop')
// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragend', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// container.forEach(container => {
  // container.addEventListener('dragover', e => {
  //   e.preventDefault()
  //   const afterElement = getDragAfterElement(container, e.clientY)
  //   const draggable = document.querySelector('.dragging')
  //   if (afterElement == null) {
  //     container.appendChild(draggable)
  //   } else {
  //     container.insertBefore(draggable, afterElement)
  //   }
  // })
// })

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2
//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child }
//     } else {
//       return closest
//     }
//   }, { offset: Number.NEGATIVE_INFINITY }).element
// }
}
