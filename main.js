var dsnv = new DSNV();
var validation = new Validation();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}
function defaut(){
getEle('tbTKNV').style.display = "none";
getEle('tbTen').style.display = "none";
getEle('tbEmail').style.display = "none";
getEle('tbMatKhau').style.display = "none";
getEle('tbNgay').style.display = "none";
getEle('tbLuongCB').style.display = "none";
getEle('tbGiolam').style.display = "none";
getEle('tbChucVu').style.display = "none";
}

function LayThongTin(isAdd) {
    var _TaiKhoan = getEle('tknv').value;
    var _HoTen = getEle('name').value;
    var _Email = getEle('email').value;
    var _MatKhau = getEle('password').value;
    var _NgayLam = getEle('datepicker').value;
    var _LuongCoBan = getEle('luongCB').value;
    var _ChucVu = getEle('chucvu').value;
    var _GioLam = getEle('gioLam').value;
    var isEmpty = true;
    if (isAdd) {
        isEmpty &= validation.kiemtraRong(_TaiKhoan, "tbTKNV", "Vui lòng nhập Tài Khoản")
            && validation.kiemtraTK(_TaiKhoan, "tbTKNV", "Tài khoản chứa kí tự khôg hợp lệ")
            && validation.kiemtraTKTontai(_TaiKhoan, "tbTKNV", "Tài khoản này đã tồn tại", dsnv.arr);
    }
    isEmpty &= validation.kiemtraRong(_HoTen, "tbTen", "Vui lòng nhập Họ Tên")
        && validation.kiemtraTenNV(_HoTen, "tbTen", "Họ tên chứa kí tự khôg hợp lệ");

    isEmpty &= validation.kiemtraRong(_Email, "tbEmail", "Vui lòng nhập Email")
        && validation.kỉemtraEmail(_Email, "tbEmail", "Email khôg hợp lệ");

    isEmpty &= validation.kiemtraRong(_MatKhau, "tbMatKhau", "Vui lòng nhập Mật khẩu")
        && validation.kiemtraMatKhau(_MatKhau, "tbMatKhau", "Mật khẩu khôg hợp lệ (từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    isEmpty &= validation.kiemtraRong(_NgayLam, "tbNgay", "Vui lòng nhập Ngày làm")
        && validation.kiemtraNgayThangNam(_NgayLam, "tbNgay", "Ngày làm khôg hợp lệ");

    isEmpty &= validation.kiemtraRong(_LuongCoBan, "tbLuongCB", "Vui lòng nhập Lương cơ bản")
        && validation.kiemtraLuongCB(_LuongCoBan, "tbLuongCB", "Lương cơ bản từ 1 triệu đến 20 triệu");

    isEmpty &= validation.kiemtraRong(_GioLam, "tbGiolam", "Vui lòng nhập Giờ làm")
        && validation.kiemtraGioLam(_GioLam, "tbGiolam", "Giờ làm trong tháng từ 80 đến 200 tiếng");

    isEmpty &= validation.kiemtraChucvu("chucvu", "tbChucVu", "Vui lòng chọn chức vụ");
    if (!isEmpty) return;

    var nhanvien = new NhanVien(_TaiKhoan, _HoTen, _Email, _MatKhau, _NgayLam, _LuongCoBan, _ChucVu, _GioLam);
    nhanvien.TinhLuong();
    nhanvien.XepLoai();
    return nhanvien;
}

getEle('btnThem').onclick = function () {
    getEle('tknv').value = "";
    getEle('name').value = "";
    getEle('email').value = "";
    getEle('password').value = "";
    getEle('datepicker').value = "";
    getEle('luongCB').value = "";
    getEle('chucvu').value = "Chọn chức vụ";
    getEle('gioLam').value = "";
    getEle('tknv').disabled = false;
    defaut();
}

getEle('btnThemNV').onclick = function () {
    var nhanvien = LayThongTin(true);
    // console.log(nhanvien, typeof nhanvien);
    if (nhanvien) {
        dsnv.themNV(nhanvien);
        taoBang(dsnv.arr);
        setLocalStorage();
    }
}
function taoBang(data) {
    var content = "";
    data.forEach(function (item, index) {
        content += `
        <tr>
        <td>${item.TaiKhoan}</td>
        <td>${item.HoTen}</td>
        <td>${item.Email}</td>
        <td>${item.NgayLam}</td>
        <td>${item.ChucVu}</td>
        <td>${item.TongLuong}</td>
        <td>${item.Loai}</td>
        <td>
        <button  style="padding: 0.3rem 0.5rem ; font-size: 0.8rem;" class="btn btn-info" onclick="xoaNV('${item.TaiKhoan}')">Xóa</button>
		<button  style="padding: 0.3rem 0.5rem ; font-size: 0.8rem;" class="btn btn-info" onclick="suaNV('${item.TaiKhoan}')">Sửa</button>
        </td>
        </tr>
        `
    });
    getEle('tableDanhSach').innerHTML = content;
};

function setLocalStorage() {
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", dataString);
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        var dataJSON = JSON.parse(dataString);
        dsnv.arr = dataJSON;
        taoBang(dsnv.arr);
    }
}

function xoaNV(TK) {
    dsnv.xoaNV(TK);
    taoBang(dsnv.arr);
    setLocalStorage();
}

function suaNV(TK) {
    defaut();
    var nv = dsnv.suaNV(TK);
    if (nv) {
        document.body.classList.add('modal-open');
        getEle('myModal').style.display = "block ";
        getEle('myModal').classList.add('show');
        getEle('tknv').value = nv.TaiKhoan;
        getEle('name').value = nv.HoTen;
        getEle('email').value = nv.Email;
        getEle('password').value = nv.MatKhau;
        getEle('datepicker').value = nv.NgayLam;
        getEle('luongCB').value = nv.LuongCoBan;
        getEle('chucvu').value = nv.ChucVu;
        getEle('gioLam').value = nv.GioLam;
        getEle('tknv').disabled = true;
        getEle('hanh').classList.add('modal-backdrop', 'fade', 'show');
    }
}

getEle('btnDong').onclick = function () {
    document.body.classList.remove('modal-open');
    getEle('myModal').style.display = "none";
    getEle('myModal').classList.remove('show');
    getEle('hanh').classList.remove('modal-backdrop', 'fade', 'show');
}
getEle('btnCapNhat').onclick = function () {
    var nhanvien = LayThongTin(false);
    dsnv.capNhap(nhanvien);
    taoBang(dsnv.arr);
    setLocalStorage();
}
getEle('searchName').addEventListener("keyup", function () {
    var keyword = getEle('searchName').value;
    var arr_Search = dsnv.TimKiemNV(keyword);
    taoBang(arr_Search);
})

document.querySelector(".toggle-password").click(function () {

    document.querySelector(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});