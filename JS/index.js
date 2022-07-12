/* 
Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập 
đúng, không cần kiểm tra hợp lệ).Tìm ngày, tháng, năm của 
ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

Input: Ngày, Tháng, Năm

Process: Đầu tiên, kiểm tra xem năm đó là năm nhuận hay năm không
nhuận, sau đó cho biến Ngày tăng lên một đơn vị, nếu ngày đó là
ngày cuối của tháng thì tăng giá trị tháng lên một đơn vị và
đưa ngày về ngày 01 hoặc nếu đó là ngày cuối của năm thì tăng 
năm lên một đơn vị và đưa ngày và tháng về 01


Output: Ngày, Tháng, Năm của ngày tiếp theo và ngày trước đó
*/ 


var day = 28;
var month =  2;
var year = 2023;
// Kiểm tra năm nhuận 
// Nếu số năm chia hết cho 4 và không chia hết cho 100,
// đó không là 1 năm nhuận
if (year % 4 == 0 && year % 100 != 0)  {
    if(month == 1 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/02/${year}`);
    }

    if (month == 2 && day == 29) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/03/${year}`);
    }

    if(month == 3 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/04/${year}`);
    }

    if (month == 4 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/05/${year}`);
    }

    if(month == 5 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/06/${year}`);
    }

    if (month == 6 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/07/${year}`);
    }

    if(month == 7 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/08/${year}`);
    }

    if(month == 8 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/09/${year}`);
    }

    if (month == 9 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/10/${year}`);
    }

    if(month == 10 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/11/${year}`);
    }

    if (month == 11 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/12/${year}`);
    }

    if(month == 12 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/01/${++year}`);
    }
}else {
    if(month == 1 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/02/${year}`);
    }

    if (month == 2 && day == 28) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/03/${year}`);
    }

    if(month == 3 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/04/${year}`);
    }

    if (month == 4 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/05/${year}`);
    }

    if(month == 5 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/06/${year}`);
    }

    if (month == 6 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/07/${year}`);
    }

    if(month == 7 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/08/${year}`);
    }

    if(month == 8 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/09/${year}`);
    }

    if (month == 9 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/10/${year}`);
    }

    if(month == 10 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/11/${year}`);
    }

    if (month == 11 && day == 30) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/0${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/12/${year}`);
    }

    if(month == 12 && day == 31) {
        console.log("Bài 1");
        console.log(`Ngày trước đó là: ${--day}/${month}/${year}`);
        console.log(`Ngày kế tiếp là: ${01}/01/${++year}`);
    }
}



/* 
Bài 2:Viết chương trình nhập vào tháng, năm. Cho biết tháng đó 
có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
Input: Ngày, Tháng, Năm

Process: Đầu tiên, kiểm tra năm đó là năm nhuận hay không nhuận
sau đó dùng câu lệnh if else để kiểm tra xem tháng đó thuộc tháng
mấy và in ra số ngày trong tháng hợp lệ.

Output:Số ngày của tháng
*/

var month1 = 2;
var year1 = 2024;

if (year1 % 4 == 0 && year1 % 100 != 0)  {
    if(month1 == 1) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 2) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 29 ngày`)
    }

    if(month1 == 3) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 4) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 5) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 6) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 7) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if(month1 == 8) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 9) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 10) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 11) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 12) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }
}else {
    if(month1 == 1) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 2) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 28 ngày`)
    }

    if(month1 == 3) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 4) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 5) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 6) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 7) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if(month1 == 8) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 9) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 10) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }

    if (month1 == 11) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 30 ngày`)
    }

    if(month1 == 12) {
        console.log("Bài 2")
        console.log(`Tháng 0${month1} năm ${year1} có 31 ngày`)
    }
}




/* 
Bài 3:Viết chương trình nhập vào số nguyên có 3 chữ số. 
In ra cách đọc nó.

Input: Số nguyên (n) có 3 chữ số

Process: Dùng phép chia kết hợp chia lấy dư để lấy từng hàng 
đơn vị phù hợp sau đó dùng câu lệnh switch case để gán từng
trường hợp phù với hàng đơn vị

Output:Cách đọc của số nguyên 3 chữ số
*/ 

var n = 411;
var hangDonVi, hangChuc, hangTram;
// Biến a là hàng trăm
// Vì a đang là số thực nên dùng ParseInt để chuyển về số nguyên
var a = n / 100;
var chuyenA = parseInt(a);


// Biến b là hàng chục
// Vì a đang là số thực nên dùng ParseInt để chuyển về số nguyên
var b = (n / 10) % 10;
var chuyenB = parseInt(b);

// Biến c là hàng đơn vị
var c = n % 10;

// Số dọc hàng đơn vị
switch(c) {
    case 0: {
        hangDonVi  = ""
        break;
    }

    case 1: {
        hangDonVi  = "Một"
        break;
    }

    case 2: {
        hangDonVi  = "Hai"
        break;
    }

    case 3: {
        hangDonVi  = "Ba"
        break;
    }

    case 4: {
        hangDonVi  = "Bốn"
        break;
    }

    case 5: {
        hangDonVi  = "Năm"
        break;
    }

    case 6: {
        hangDonVi  = "Sáu"
        break;
    }

    case 7: {
        hangDonVi  = "Bảy"
        break;
    }

    case 8: {
        hangDonVi  = "Tám"
        break;
    }

    case 9: {
        hangDonVi  = "Chín"
        break;
    }
}


// Số đọc hàng chục
switch(chuyenB) {
    case 0: {
        if (hangDonVi == 0) {
            hangChuc = " ";
        }else {
            hangChuc = "Lẻ"
        }
        break;
    }

    case 1: {
        if (hangDonVi == 0) {
            hangChuc = "Mốt";
        }else {
            hangChuc = "Mười"
        }
        break;
    }

    case 2: {
        hangChuc  = "Hai Mươi";
        break;
    }

    case 3: {
        hangChuc  = "Ba Mươi";
        break;    
    }

    case 4: {
        hangChuc  = "Bốn Mươi";
        break;
    }

    case 5: { 
        hangChuc  = "Năm Mươi";
        break;
    }

    case 6: {
        hangChuc  = "Sáu Mươi";
        break;
    }

    case 7: {
        hangChuc  = "Bảy Mươi";
        break;
    }

    case 8: {
        hangChuc  = "Tám Mươi";
        break;
    }

    case 9: {
        hangChuc  = "Chín Mươi";
        break;
    }
}


// Số đọc hàng trăm
switch(chuyenA) {
    case 1: {
        hangTram  = "Một Trăm"
        break;
    }

    case 2: {
        hangTram  = "Hai Trăm"
        break;
    }

    case 3: {
        hangTram  = "Ba Trăm"
        break;
    }

    case 4: {
        hangTram  = "Bốn Trăm";
        break;
    }

    case 5: {
        hangTram  = "Năm Trăm";
        break;
    }

    case 6: {
        hangTram  = "Sáu Trăm";
        break;
    }

    case 7: {
        hangTram  = "Bảy Trăm";
        break;
    }

    case 8: {
        hangTram  = "Tám Trăm";
        break;
    }

    case 9: {
        hangTram  = "Chín Trăm";
        break;
    }
}


console.log(typeof(hangChuc));
console.log("Bài 3")
console.log(`${hangTram} ${hangChuc} ${hangDonVi}`);



/* 
Bài 4:Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa
độ của trường đại học. Viết chương trình in tên sinh viên xa 
trường nhất.
Input: Tên (name), tọa độ nhà của 3 sinh viên (A, B, C) và tọa độ 
trường đại học (H)

Process:Tính khoảng cách của từng tọa độ sau đó dùng hàm toán học 
Math.max để tìm ra sinh viên có khoảng cách xa trường nhất

Output: Tên sinh viên có khoảng cách từ nhà đến trường xa nhất
*/ 

var name1 = "Long";
var name2 = "Thuận";
var name3 = "Hòa";

// x1 và y1 là tọa độ của sinh viên A(name1)
var x1 = 5;
var y1 = 3;

// x2 và y2 là tọa độ của sinh viên B(name2)
var x2 = 2;
var y2 = 9;

// x3 và y3 là tọa độ của sinh viên C(name3)
var x3 = 6;
var y3 = 8;

// x4 và y4 là tọa độ của trường đại học
var x4 = 1;
var y4 = 2;

// Khoảng cách giữa sinh viên A A(x1, y1) và trường H(x4, y4);
var AH = Math.sqrt(((x1 - x4) * (x1 - x4)) + ((y1 - y4) * (y1 - y4)))

// Khoảng cách giữa sinh viên A A(x2, y2) và trường H(x4, y4);
var BH = Math.sqrt(((x2 - x4) * (x2 - x4)) + ((y2 - y4) * (y2 - y4)))

// Khoảng cách giữa sinh viên A A(x2, y2) và trường H(x4, y4);
var CH = Math.sqrt(((x3 - x4) * (x3 - x4)) + ((y3 - y4) * (y3 - y4)))

console.log("Bài 4");
if(Math.max(AH, BH, CH) === AH) {
    console.log(`Sinh viên (${name1}) có khoảng cách từ nhà đến trường xa nhất`);
}else if (Math.max(AH, BH, CH) === BH) {
    console.log(`Sinh viên (${name2}) có khoảng cách từ nhà đến trường xa nhất`);
}else {
    console.log(`Sinh viên (${name3}) có khoảng cách từ nhà đến trường xa nhất`)
}





