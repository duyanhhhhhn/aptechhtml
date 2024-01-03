let dssv = [
    {
        MaSV: 152,
        HovaTen: "Nguyen Duy Anh",
        DTB: 9.0,
        Gioitinh: true
    },
    {
        MaSV: 153,
        HovaTen: "Trần Văn b ",
        DTB: 4.5,
        Gioitinh: false
    },
    {
        MaSV: 154,
        HovaTen: "Nguyen Văn C",
        DTB: 6.2,
        Gioitinh: true
    }
];
function HienthiDSSV(data = dssv) {
    document.getElementById("info").innerHTML = " ";
    for (sv of data) {
        document.getElementById("info").innerHTML += `<tr>
                                                   <td> ${sv.MaSV} </td>
                                                    <td> ${sv.HovaTen} </td>
                                                    <td> ${sv.DTB} </td>
                                                    <td> ${sv.Gioitinh ? "Nam " : "Nữ "} </td>
                                                    <td>
                                                    <button class="btn-red" data-masv="${sv.MaSV}"><i class =" fa fa-trash" ></i>
                                                    </button>
                                                    </td>
                                                    </tr>`; 
    }
    let btnDelete = document.getElementsByClassName("btn-red");
    for (btn of btnDelete) {
        btn.addEventListener("click", e => { 
            let masv = e.currentTarget.getAttribute("data-masv");
            let i = dssv.findIndex(item => item.MaSV == masv);
            dssv.splice(i, 1);
            HienthiDSSV();
        });
    }

}
HienthiDSSV();
document.getElementById("btn").addEventListener("click", e => {
    e.preventDefault();
    let sv = {
        MaSV: document.getElementById("mssv").value,
        HovaTen: document.getElementById("hoTen").value,
        DTB: document.getElementById("DTB").value,
        Gioitinh: document.getElementById("gioiTinh").checked
    };
    if (sv.MaSV == "") {
        alert(" Vui lòng nhập mã sinh viên ");
        document.getElementById("mssv").focus();
        return;
    }
    if (sv.HovaTen == "") {
        alert(" Vui lòng nhập Họ và tên ");
        document.getElementById("hoTen").focus();
        return;
    } if (sv.DTB == "") {
        alert(" Vui lòng nhập DTB ");
        document.getElementById("DTB").focus();
        return;
    }
    if (dssv.some(item => item.MaSV == sv.MaSV)) {
        alert("Mã sinh viên đã tồn tại ");
        document.getElementById("mssv").focus();
        return;
    }
    dssv.push(sv);
    HienthiDSSV();
});
document.getElementById("btn-search").addEventListener("click", e => {
    e.preventDefault();
    let keyword = prompt("Nhập họ và tên sinh viên cần tìm : ");
    let result = dssv.find(item => item.HovaTen == keyword);
    if (result == undefined) {
        alert("Không tìm thấy sinh viên ");
    } else {
        alert(`Mã sinh viên cần tìm là : ${result.MaSV}`);
    }
});
document.getElementById("chk-filter").addEventListener("click", e => {
    if (document.getElementById("chk-filter").checked) {
        let result = dssv.filter(item => item.DTB >= 5);
        HienthiDSSV(result);
    } else {
        HienthiDSSV();
    }
});