function Validation () {
    this.kiemtraRong = function (value, errorID, mess){
        if ( value === "")
        {
            getEle(errorID).innerHTML = mess ;
            getEle(errorID).style.display = "block";
            return false;
        } else
        {
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display = "none";
            return true;   
        }
    };
    this.kiemtraChucvu = function(selectID, errorID, mess) {
        if (getEle(selectID).selectedIndex !== 0 )
        {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraTenNV = function (value, errorID, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraTK = function (value, errorID, mess){
        var number = /^[0-9]{4,6}$/;
        if (value.match(number)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraTKTontai = function (value, errorID, mess, arr){
        var isStatus = true ;
        arr.forEach(function(item){
            if (item.TaiKhoan === value)
            {
                isStatus = false ;
            }
        });
        if (isStatus)
        {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true; 
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    }   

    this.kiemtraNgayThangNam = function (value, errorID, mess){
        var date = /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/;
        if (value.match(date)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kỉemtraEmail = function (value, errorID, mess){
        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(mail)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraMatKhau = function (value, errorID, mess){
        var pass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;
        if (value.match(pass)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraLuongCB = function (value, errorID, mess){
        if ((value>=1000000)&&(value<=20000000))
        {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };
    this.kiemtraGioLam = function (value, errorID, mess){
        if ((value>=80)&&(value<=200))
        {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        else
        {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
    };

}