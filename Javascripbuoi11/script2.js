let dssv = [
    {
        MaSV: 152,
        HovaTen: "Nguyen Duy Anh",
        DTB: 9,
        Gioitinh: true
    },
    {
        MaSV: 153,
        HovaTen: "Nguyen Duy B",
        DTB: 3.0,
        Gioitinh: false
    },
    {
        MaSV: 154,
        HovaTen: "Nguyen Duy C",
        DTB: 3.5,
        Gioitinh: true
    }
];
function HienthiDSSV(data = dssv) {
    document.getElementById("info").innerHTML = " ";
    for (sv of data){ 
        document.getElementById("info").innerHTML += `<tr>
                                                        <td> ${sv.MaSV} </td>
                                                        <td> ${sv.HovaTen} </td>
                                                        <td> ${sv.DTB} </td>
                                                        <td> ${sv.Gioitinh ? "Nam ": "Nữ "} </td>
                                                        </tr>`; 
    }
}
HienthiDSSV();
document.getElementById("btn").addEventListener("click", e => {
    e.preventDefault();
    let sv = {
        MaSV: document.getElementById("mssv").value,
        HovaTen: document.getElementById("hoten").value,
        DTB: document.getElementById("DTB").value,
        Gioitinh: document.getElementsByName("gioitinh").checked
    };
    if (sv.MaSV == "") {
        alert(" Vui lòng nhập mã SV");
        document.getElementById("mssv").focus();
        return;
    }
    if (dssv.some(item => item.MaSV == sv.MaSV)) {
        alert("Mã sinh viên đã tồn tại ");
        document.getElementById("mssv").focus();
        return;
    }
    if (sv.HovaTen == "") {
        alert(" Vui lòng nhập Họ và tên ");
        document.getElementById("hoten").focus();
        return;
    } if (sv.DTB == "") {
        alert(" Vui lòng nhập DTB");
        document.getElementById("DTB").focus();
        return;
    }
    dssv.push(sv);
    HienthiDSSV();
});
document.getElementById("btn-search").addEventListener("click", e => {
    e.preventDefault();
    let keyword = prompt("Nhập họ và tên sinh viên cần tìm : ")
    let result = dssv.find(item => item.HovaTen == keyword);
    if (result == undefined) {
        alert("Không tìm thấy sinh viên");
    } else {
        alert(`Mã sinh viên cần tìm : ${result.MaSV}`);
    }
});
document.getElementById("btn-filter").addEventListener("click", e => {
    e.preventDefault();
    let result = dssv.filter(item => item.DTB >= 5);
    HienthiDSSV(result);
});
document.getElementById("btn-cancel-filter").addEventListener("click", e => {
    e.preventDefault();
    HienthiDSSV();
});