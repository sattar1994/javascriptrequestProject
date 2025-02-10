const input = document.getElementById("input");
const selected = document.getElementById("select");
const btn = document.getElementById("btnChange");
const result = document.getElementById("result")
btn.addEventListener("click", function(e){
    e.preventDefault()
    if(input.value.trim()){
        if(selected.value === 'F'){
            const res =(Number(input.value) - 32)  * (5 / 9);
            result.textContent = res.toFixed(2) +  "°C";
            result.classList.remove('cool')
             result.classList.add('far')
             input.value = ''
            }else if(selected.value === 'C'){
                const res =  32 +  (9/5 * Number(input.value)) ;
                result.textContent = res.toFixed(2) + "°F";
                result.classList.remove('far')
                result.classList.add('cool')
                 input.value = ''
           }
    }else{
        alert("لطفا ورودی وارد کنید")
    }
   
})
