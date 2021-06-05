var getEle = function (id) {
    return document.getElementById(id);
};

// Bai 1
var showTmr = getEle('showTmr');
var showYtd = getEle('showYtd');

var getNextDay = function(day,month,year) {
    day += 1;
    return day + '/' + month + '/' + year;
}
var getNextMonth = function(day,month,year) {
    day = 1;
    month += 1;
    return day + '/' + month + '/' + year;
}
var getNextYear = function(day,month,year) {
    day = 1;
    month = 1;
    year += 1;
    return day + '/' + month + '/' + year;
}

var getPrevDay = function(day,month,year) {
    day -= 1;
    return day + '/' + month + '/' + year;
}
var getPrevMonth = function(month,year) {

    month -= 1;
    return '/' + month + '/' + year;
}
var getPrevYear = function(day,month,year) {
    day = 31;
    month = 12;
    year -= 1;
    return day + '/' + month + '/' + year;
}
// console.log(getPrevDay(2,3,2020))

var showDate = function(){
    var day = Number(getEle('day').value);
    var month = Number(getEle('month').value);
    var year = Number(getEle('year').value);

    // Operation tìm ngày mai
    switch (month) {
        case 2:
            if (year % 4 == 0 && !(year % 100 == 0)) { //năm nhuận
                switch (day) {
                    case 29:
                        showTmr.innerHTML = getNextMonth(day, month, year);
                        break;
                    default:
                        showTmr.innerHTML = getNextDay(day, month, year);
                }
            } else {
                switch (day) {
                    case 28:
                        showTmr.innerHTML = getNextMonth(day, month, year);
                        break;
                    default:
                        showTmr.innerHTML = getNextDay(day, month, year);
                }
            } break;
        case 12:
            switch (day) {
                case 31:
                    showTmr.innerHTML = getNextYear(day, month, year);
                    break;
                default:
                    showTmr.innerHTML = getNextDay(day, month, year);
            } break;
        default:
            if (month == 4 || 6 || 9 || 11) {
                switch (day) {
                    case 30:
                        showTmr.innerHTML = getNextMonth(day, month, year);
                        break;
                    default:
                        showTmr.innerHTML = getNextDay(day, month, year);
                }
            } else {
                switch (day) {
                    case 31:
                        showTmr.innerHTML = getNextMonth(day, month, year);
                        break;
                    default:
                        showTmr.innerHTML = getNextDay(day, month, year);
                }
            }
    }
    // Operation tìm hôm qua
    switch (month) {
        case 3:
            if (year % 4 == 0 && !(year % 100 == 0)) { //năm nhuận
                switch (day) {
                    case 1:
                        showYtd.innerHTML = 29 + getPrevMonth( month, year);
                        break;
                    default:
                        showYtd.innerHTML = getPrevDay(day, month, year);
                }
            } else {
                switch (day) {
                    case 1:
                        showYtd.innerHTML = 28 + getPrevMonth(day, month, year);
                        break;
                    default:
                        showYtd.innerHTML = getPrevDay(day, month, year);
                }
            } break;
        case 1:
            switch (day) {
                case 1:
                    showYtd.innerHTML = getPrevYear(day, month, year);
                    break;
                default:
                    showYtd.innerHTML = getPrevDay(day, month, year);
            } break;
        default:
            if (month == 4+1 || 6+1 || 9+1 || 11+1) {
                switch (day) {
                    case 1:
                        showYtd.innerHTML = 30 + getPrevMonth(month, year);
                        break;
                    default:
                        showYtd.innerHTML = getPrevDay(day, month, year);
                }
            } else {
                switch (day) {
                    case 1:
                        showYtd.innerHTML = 31 + getPrevMonth(month, year);
                        break;
                    default:
                        showYtd.innerHTML = getPrevDay(day, month, year);
                }
            }
    }
}



// Bai 2
var txtDays = getEle('txtDays');
var countDays = function(){
    var month2 = Number(getEle('month2').value);
    var year2 = Number(getEle('year2').value);

    // Operation đếm số ngày trong tháng
    switch (month2) {
        case 2:
            if (year2 % 4 == 0 && !(year2 % 100 == 0)) { //năm nhuận
                txtDays.innerHTML = 29;
            } else {
                txtDays.innerHTML = 28;
            }
            break;
        case 4:
        case 6: 
        case 9: 
        case 11:
            txtDays.innerHTML = 30;
            break;
        default:
            txtDays.innerHTML = 31;
    }

}


// Bai 3
var txtNum = getEle('txtNum');
var sign, dg100, dg10, dg1;

var readNum = function(num){
    switch(num){
        case 1:
            num = 'Một';
            break;
        case 2:
            num = 'Hai';
            break;
        case 3:
            num = 'Ba';
            break;
        case 4:
            num = 'Bốn';
            break;
        case 5:
            num = 'Năm';
            break;
        case 6:
            num = 'Sáu';
            break;
        case 7:
            num = 'Bảy';
            break;
        case 8:
            num = 'Tám';
            break;
        case 9:
            num = 'Chín';
            break;
        default:
            num = 'N/A';
    }
    return num;
}

var readInt = function(){
    var int3dg = getEle('int3dg').value;
    if(int3dg < 0){
        sign = 'Âm ';
    }else{
        sign = '';
    }
    int3dg = Math.abs(int3dg);
    dg100 = Math.floor(int3dg/100);
    dg10 = Math.floor(((int3dg-dg100*100)/10));
    dg1 = Math.floor((int3dg-dg100*100-dg10*10));
    dg100 = readNum(dg100);
    dg10 = readNum(Math.floor(dg10));
    dg1 = readNum(Math.floor(dg1));

    txtNum.innerHTML = sign + dg100 + ' Trăm ' + dg10 + ' Mươi ' + dg1;
}


// Bai 4
// Input nơi output
var longD = getEle('longD');

// Input kinh độ, vĩ độ trường
const xValue0 = 0;
const yValue0 = 0;

var comDist = function(){
    // Input tên, kinh độ và vĩ độ SV
    // SV 1
    var name1 = getEle('name1').value;
    var xValue1 = getEle('xValue1').value;
    var yValue1 = getEle('yValue1').value;

    // SV 2
    var name2 = getEle('name2').value;
    var xValue2 = getEle('xValue2').value;
    var yValue2 = getEle('yValue2').value;

    // SV 3
    var name3 = getEle('name3').value;
    var xValue3 = getEle('xValue3').value;
    var yValue3 = getEle('yValue3').value;


    // Operation tính khoảng cách đến trường
    // SV 1
    var dist1 = Math.sqrt((xValue1 - xValue0) * (xValue1 - xValue0) + (yValue1 - yValue0) * (yValue1 - yValue0));

    // SV 2
    var dist2 = Math.sqrt((xValue2 - xValue0) * (xValue2 - xValue0) + (yValue2 - yValue0) * (yValue2 - yValue0));

    // SV 3
    var dist3 = Math.sqrt((xValue3 - xValue0) * (xValue3 - xValue0) + (yValue3 - yValue0) * (yValue3 - yValue0));
    
    // Operation tính khoảng cách nhỏ nhất
    var maxD;
    if(dist1 > dist2){
        if(dist1 > dist3){
            maxD = dist1;
            longD.innerHTML = name1;
        }else{
            maxD = dist3;
            longD.innerHTML = name3;
        }
    }else{
        if(dist2 > dist3){
            maxD = dist2;
            longD.innerHTML = name2;
        }else{
            maxD = dist3;
            longD.innerHTML = name3;
        }
    }
}