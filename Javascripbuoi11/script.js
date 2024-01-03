let sv = {
    MaSV: 152,
    HovaTen: "Nguyen Duy Anh",
    DTB: 9,
    Gioitinh: true,
    Diachi: {
        SoNha: " 778/10", 
        Duong:"Nguyen kiem "
    }
};

document.getElementById("info").innerHTML = `<li>Mã SV : ${sv.MaSV}</li>
                                              <li>Họ và tên : ${sv.HovaTen}</li>
                                              <li> DTB : ${sv.DTB}</li>
                                            <li>Gioitinh : ${sv.Gioitinh ? "Nam " : "nu" }</li> 
                                            <li> Dia chi : ${sv.Diachi.SoNha}</li>
                                            `;