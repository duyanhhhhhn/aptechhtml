let array = [];
let input = document.getElementById("number");
let p = document.getElementById("data");
let btn = document.getElementById("btn");
btn.addEventListener("click", e=>{ 
    e.preventDefault();
    let x = input.value;
    if (isNaN(x)){
        alert(" Vui lòng nhập vào 1 số nguyên ");
    }
    else{
        array.push(x);
        p.innerHTML = array.join(",");
        
    }
    input.value = " ";
});
// document.getElementById("btn-filter").addEventListener("click", e =>{
//     e.preventDefault();
//     let result = dssv.filter(item => item.DTB >= 5);
//     HienthiDSSV(result);

// })
// document.getElementById("btn-filter-cancel").addEventListener("click", e =>{
//     e.preventDefault();
//     HienthiDSSV();
// })
