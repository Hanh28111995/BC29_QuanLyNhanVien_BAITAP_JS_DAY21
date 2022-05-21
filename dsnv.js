function DSNV() {
    this.arr = [];
   
    this.timViTriNV = function (TaiKhoan) {
        var index = -1;
        this.arr.forEach(function (item, i) {
            if (item.TaiKhoan === TaiKhoan) { index = i; }
        })
        return index;
    };
    this.themNV = function (nv) {
        this.arr.push(nv);
    };
    this.xoaNV = function (TaiKhoan) {
        var index = this.timViTriNV(TaiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };
    this.suaNV = function (TaiKhoan) {
        defaut();
        var index = this.timViTriNV(TaiKhoan);
        if (index !== -1) {
            return this.arr[index];
        }        
        return null;
    };
    this.capNhap = function (nv) {
        var index = this.timViTriNV(nv.TaiKhoan);
        if (index !== -1) {
            this.arr[index] = nv ;
        }
    };
    this.TimKiemNV = function (keyword){
        var arr_Search = [];
        this.arr.forEach(function(item){
            if(item.HoTen.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            {
                arr_Search.push(item);
            }
        });
        return arr_Search;
    }
}