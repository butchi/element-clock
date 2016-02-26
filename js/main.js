(function() {
  'use strict';

  var clockHour; // 表示している時
  var clockMinute; // 表示している分
  var clockSecond; // 表示している秒

  var $elementHour = $('.element.hour');
  var $elementMinute = $('.element.minute');
  var $elementSecond = $('.element.second');

  var colorLi = {
    "Alkali metals": "#FF6666",
    "Alkaline earth metals": "#FFDEAD",
    "Lanthanides": "#FFBFFF",
    "Actinides": "#FF99CC",
    "Transition metals": "#FFC0C0",
    "Post-transition metals": "#CCCCCC",
    "Metalloids": "#CCCC99",
    "Other non-metals": "#A0FFA0",
    "Halogens": "#FFFF99",
    "Noble gases": "#C0FFFF",
    "Unknown chemical properties": "#E8E8E8",
  }

  function initialize() {
    $elementHour.on('change', updateElement);
    $elementMinute.on('change', updateElement);
    $elementSecond.on('change', updateElement);

    requestAnimationFrame(update);
  }

  function update() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var millisecond = now.getMilliseconds();

    var showColon = millisecond < 500;

    if(showColon) {
      $('.collon').addClass('show');
    } else {
      $('.collon').removeClass('show');
    }

    if(hour !== clockHour) {
      clockHour = hour;
      $elementHour.trigger('change', clockHour);
    }
    if(minute !== clockMinute) {
      clockMinute = minute;
      $elementMinute.trigger('change', clockMinute);
    }
    if(second !== clockSecond) {
      clockSecond = second;
      $elementSecond.trigger('change', clockSecond);
    }

    requestAnimationFrame(update);
  }

  function updateElement(evt, data) {
    var $this = $(this);
    var elmId = data;
    var color = colorLi[elementLi[elmId]["type"]] || '#FFFFFF';
    $this.html(elementLi[elmId]["Sym"]);
    $this.css('background','-moz-linear-gradient(left top, '+color+', #666)');
    $this.css('background','-webkit-gradient(linear, left top, right bottom, from('+color+'), to(#666))');
  }

  initialize();
})();
