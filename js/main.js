var timerID; // setInterval用
var now; // Dateを格納
var hour = -1; // 時
var clockHour; // 表示している時
var minute = -1; // 分
var clockMinute; // 表示している分
//var second = 60; // 秒
var timerInterval = 500; // 500msごとに計時
var halfSecond = 0; // 500msごとに0と1を切り替え

function getNowDate() {
  now = new Date();
  hour = now.getHours(); // 時
  minute = now.getMinutes(); // 分
//  second = now.getSeconds(); // 秒
}

function start() {
  getNowDate();
  updateHour();
  updateMinute();
  timerID = setInterval(update, timerInterval);
}

function update() {
  if(halfSecond == 0) {
    $('#collon').css('visibility','visible');
    //updateSecond();
  } else {
    $('#collon').css('visibility','hidden');

  }
  halfSecond = (halfSecond+1) % 2;
  
  getNowDate();
  if(minute != clockMinute) { // ちょうど0秒になったら
    updateMinute();
    if(hour != clockHour) { // ちょうど0分になったら
      updateHour();
    }
  }
}

function updateHour() {
  clockHour = hour;
  updateElement("hour");
}

function updateMinute() {
  clockMinute = minute;
  $('#minute').html(elementLi[clockMinute]["Sym"]);
  updateElement("minute");
}

function updateElement(time_type) {
  switch (time_type) {
    case "hour":
    id = "#hour"
    z = clockHour;
    break;
    case "minute":
    id = "#minute"
    z = clockMinute;
    break;
    default:
    id = "#";
    z = 0;
    break;
  }
  switch (elementLi[z]["type"]) {
    case "Alkali metals":
    color = "#FF6666";
    break;
    case "Alkaline earth metals":
    color = "#FFDEAD";
    break;
    case "Lanthanides":
    color = "#FFBFFF";
    break;
    case "Actinides":
    color = "#FF99CC";
    break;
    case "Transition metals":
    color = "#FFC0C0";
    break;
    case "Post-transition metals":
    color = "#CCCCCC";
    break;
    case "Metalloids":
    color = "#CCCC99";
    break;
    case "Other non-metals":
    color = "#A0FFA0";
    break;
    case "Halogens":
    color = "#FFFF99";
    break;
    case "Noble gases":
    color = "#C0FFFF";
    break;
    case "Unknown chemical properties":
    color = "#E8E8E8";
    break;
    default:
    color = "#FFFFFF";
  }
  $(id).html(elementLi[z]["Sym"]);
  $(id).css('background','-moz-linear-gradient(left top, '+color+', #666)');
  $(id).css('background','-webkit-gradient(linear, left top, right bottom, from('+color+'), to(#666))');
}
