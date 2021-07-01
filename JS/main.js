
function sapXepThuTu() {
  var sapXepBaSo1 = document.getElementById("soThuNhat").value;
  var sapXepBaSo2 = document.getElementById("soThuHai").value;
  var sapXepBaSo3 = document.getElementById("soThuBa").value;
var sapXepNao = ""

var arr = [sapXepBaSo1, sapXepBaSo2, sapXepBaSo3];

console.log(arr.sort(function(a, b){
	return a - b;
}));
var sapXepNao = document.getElementById('sapXepNao');
sapXepNao.innerHTML = arr;

}



function hoiAiDo(){
var chaoHoi = document.getElementById('chaoHoi').value;
  var txt = "";
  switch (chaoHoi) {
     case "B" : 
        txt = "Chào Bố"
       break;
      case "M" : 
        txt = "Chào Mẹ"
       break;
      case "A" : 
        txt = "Chào Anh"
       break;
      case "E" : 
        txt = "Chào Em"
       break;
   
   }
  var chaoAiDo = document.getElementById("chaoAiDo");
  chaoAiDo.innerHTML = txt;
}

function XacMinhChanLe() {
var number1 =document.getElementById('numberOne').value;
var number2 =document.getElementById('numberTwo').value;
var number3 =document.getElementById('numberThree').value;

var txt1 = "";
var txt2 = "";
var txt3 = "";
var countChan = 0;
var countLe = 0;

if (number1 % 2 == 0) {
 txt1 = " Số 1 là số chẵn";
 countChan += 1;
}
else {
txt1 = "Số 1 là số lẻ";
countLe += 1;
}
if (number2 % 2 == 0) {
 txt2 = " Số 2 là số chẵn";
 countChan += 1;
}
else {
txt2 = "Số 2 là số lẻ";
countLe += 1;
}

if (number3 % 2 == 0) {
 txt3 = " Số 3 là số chẵn";
 countChan += 1;
}
else {
txt3 = "Số 3 là số lẻ";
countLe += 1;
}
var showNumBerOne = document.getElementById("showNumBerOne");
showNumBerOne.innerHTML = txt1;
var showNumBerTwo = document.getElementById("showNumBerTwo");
showNumBerTwo.innerHTML = txt2;
var showNumBerThree = document.getElementById("showNumBerThree");
showNumBerThree.innerHTML = txt3;


var tongSoChan = countChan;

  var spanEl = document.createElement("span");
  spanEl.innerHTML = "Tổng số chẵn : " + tongSoChan;

  var tongSoChanEl = document.getElementById("tongSoChan");
  tongSoChanEl.style.display = "block";
  tongSoChanEl.appendChild(spanEl);

  var tongSoLe = countLe;

  var spanEl = document.createElement("span");
  spanEl.innerHTML = "Tổng số chẵn : " + tongSoLe;

  var tongSoLeEl = document.getElementById("tongSoLe");
  tongSoLeEl.style.display = "block";
  tongSoLeEl.appendChild(spanEl);

}

function xacDinhTamGiac() {
var canhTamGiac1 =document.getElementById('canhA').value;
var canhTamGiac2 =document.getElementById('canhB').value;
var canhTamGiac3 =document.getElementById('canhC').value;

if (canhTamGiac1 == canhTamGiac2 && canhTamGiac1 > canhTamGiac3 && canhTamGiac2 >canhTamGiac3) {
txt = "Đây là tam giác cân"

}
else if (canhTamGiac1 == canhTamGiac2 && canhTamGiac1 == canhTamGiac3 && canhTamGiac2 == canhTamGiac3){
  txt = " Đây là tam giác đều"
}

else {
  txt = "Đây là tâm giác vuông"
}

var daylaTamGiac = document.getElementById("daylaTamGiac");
daylaTamGiac.innerHTML = txt;




}
