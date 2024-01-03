document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("usr").value;
    let password = document.getElementById("pwd").value;
    let p = document.getElementById("msg");
    p.style.fontWeight = "bold";
    if (username == "admin" && password == "123456") {
        p.innerText = "Login successful";
        p.style.color = "green";
        document.getElementById("link").href = "https://www.facebook.com/photo/?fbid=118858400887307&set=pcb.118858510887296";
    }
    else {
        p.innerText = "Login failed";
        p.style.color = "red";
        document.getElementById("link").href = "https://www.google.com.vn";
    }
   
})