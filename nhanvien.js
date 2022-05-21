function NhanVien(_TaiKhoan, _HoTen, _Email, _MatKhau, _NgayLam, _LuongCoBan, _ChucVu, _GioLam)
{
    this.TaiKhoan = _TaiKhoan;
    this.HoTen = _HoTen; 
    this.Email = _Email; 
    this.MatKhau = _MatKhau; 
    this.NgayLam = _NgayLam; 
    this.LuongCoBan = _LuongCoBan; 
    this.ChucVu = _ChucVu; 
    this.GioLam = _GioLam;
    this.TinhLuong = function(){
        if(this.ChucVu === "Sếp")
        {
            this.TongLuong = this.LuongCoBan * 3 ;
        }
        if(this.ChucVu === "Trưởng phòng")
        {
            this.TongLuong = this.LuongCoBan * 2 ;
        }
        if(this.ChucVu === "Nhân viên")
        {
            this.TongLuong = this.LuongCoBan * 1 ;
        }
    }

    this.XepLoai = function(){
        if((this.GioLam > 0)&&(this.GioLam < 160))
        {
            this.Loai = "trung bình" ;
        }
        if((this.GioLam >= 160)&&(this.GioLam < 176))
        {
            this.Loai = "khá" ;
        }
        if((this.GioLam >= 176)&&(this.GioLam < 192))
        {
            this.Loai = "giỏi" ;
        }
        if(this.GioLam >= 192)
        {
            this.Loai = "xuất sắc" ;
        }
        
    }
}