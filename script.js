const input = document.getElementById("input");
const btn = document.getElementById("btnChange");
const result = document.getElementById("result");
const show = document.getElementById("show");
const btnStorage = document.getElementById("btnStorage");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.trim()) {
    const newItem = document.createElement("div");
    const newItemList = document.createElement("h4");
    const btnDelet = document.createElement("button");
    const btnBack = document.createElement("button");
    const btnComplet = document.createElement("button");
    newItem.classList.add("result");
    btnComplet.classList.add("btnComplet");
    btnDelet.classList.add("btnDelet");
    btnBack.classList.add("btnBack");
    newItemList.textContent = input.value;
    btnDelet.textContent = "حذف آیتم";
    btnBack.textContent = "ویرایش";
    btnDelet.setAttribute("disabled", "");
    btnComplet.textContent = "انجام شد";
    newItem.appendChild(newItemList);
    newItem.appendChild(btnComplet);
    newItem.appendChild(btnDelet);
    newItem.appendChild(btnBack);
    show.appendChild(newItem);
    
    btnStorage.addEventListener("click", function(e){
      if(!newItemList.classList.contains('complet')){
        let array = JSON.parse(localStorage.getItem('todo')) || [];
        array.push(newItemList.textContent)
        localStorage.setItem('todo', JSON.stringify(array))

      }
    });

    btnBack.addEventListener("click", function(e){
      if(!newItemList.classList.contains('complet')){
      if(!input.value.trim()){
        input.value = newItemList.textContent
        input.focus()
        e.target.parentNode.remove()
      }else{
        alert('مقدار ورودی پر میباشد لطفاخالی شود')
      }
      }
      
    })
    btnComplet.addEventListener("click", function () {
      newItemList.classList.add("complet");
      if (newItemList.classList.contains("complet")) {
        btnDelet.removeAttribute("disabled", "");
      } else {
        return;
      }
    });
    btnDelet.addEventListener("click", function (e) {
      const confrimation = prompt("ازحذف آیتم اطمینان دارید؟");
      if (confrimation === "بله") {
        e.target.parentNode.remove();
      } else {
        return;
      }
    });
  } else {
    alert("لطفا یک تسک جدید واردکنید");
  }
 
  input.value = "";
});
let lo =JSON.parse(localStorage.getItem('todo'))


window.addEventListener('DOMContentLoaded', function(e){
  if(localStorage.getItem('todo')){
    lo.forEach((item)=>{
      const newItem = document.createElement("div");
      const newItemList = document.createElement("h4");
      const btnDelet = document.createElement("button");
      const btnBack = document.createElement("button");
      const btnComplet = document.createElement("button");
      newItem.classList.add("result");
      btnComplet.classList.add("btnComplet");
      btnDelet.classList.add("btnDelet");
      btnBack.classList.add("btnBack");
      newItemList.textContent = item;  
      btnDelet.textContent = "حذف آیتم";
      btnBack.textContent = "ویرایش";
      btnDelet.setAttribute("disabled", "");
      btnComplet.textContent = "انجام شد";
      newItem.appendChild(newItemList);
      newItem.appendChild(btnComplet);
      newItem.appendChild(btnDelet);
      newItem.appendChild(btnBack);
      show.appendChild(newItem);
      btnBack.addEventListener("click", function(e){
        if(!newItemList.classList.contains('complet')){
        if(!input.value.trim()){
          input.value = newItemList.textContent
          input.focus()
          e.target.parentNode.remove()
        }else{
          alert('مقدار ورودی پر میباشد لطفاخالی شود')
        }
        }
        
      })
      btnComplet.addEventListener("click", function () {
        newItemList.classList.add("complet");
        if (newItemList.classList.contains("complet")) {
          btnDelet.removeAttribute("disabled", "");
        } else {
          return;
        }
      });
      btnDelet.addEventListener("click", function (e) {
        const confrimation = prompt("ازحذف آیتم اطمینان دارید؟");
        if (confrimation === "بله") {
          let task = JSON.parse(localStorage.getItem('todo')) || [];
         let res = task.filter((item)=>{
           return item !== e.target.parentNode.querySelector('h4').textContent
            
          });
        
          localStorage.setItem('todo', JSON.stringify(res))
          e.target.parentNode.remove();
          
        } else {
          return;
        }
      });
      
    })
    
 
  }
})

