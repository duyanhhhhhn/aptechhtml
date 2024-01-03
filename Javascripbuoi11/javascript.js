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
        DTB: 9,
        Gioitinh: false
    },
    {
        MaSV: 154,
        HovaTen: "Nguyen Duy C",
        DTB: 9,
        Gioitinh: true
    }
];

for (sv of dssv) { 
    document.getElementById("info").innerHTML += `<tr>
                                                    <td> ${sv.MaSV} </td>
                                                    <td> ${sv.HovaTen} </td>
                                                    <td> ${sv.DTB} </td>
                                                    <td> ${sv.Gioitinh ? "Nam ": "Nữ "} </td>
                                                    </tr>`; 
}