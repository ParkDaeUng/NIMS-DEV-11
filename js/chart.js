// 차트 데이터
var data1 = [
  120, 
  {
    value: 200,
    itemStyle: {
      color: '#0095FF'
    }
  }, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130, 80, 70, 110];

var data2 = [
  45, 78, 62, 
  {
    value: 82,
    itemStyle: {
      color: '#2C69EE'
    }
  }, 55, 40, 70, 62, 30, 55, 40, 70];

var data3 = [45, 78, 62, 30, 55, 40, {
    value: 70,
    itemStyle: {
      color: '#884DFF'
    }
  }, 30, 55, 40, 70];

var data4 = [
  { value: 67,
    name: "남자",
    itemStyle: {
      color: "#0095FF"
    }
  },
  { value: 33,
    name: "여자",
    itemStyle: {
      color: "#EF4444"
    }
  },
];

var data5 = [
  120, 
  {
    value: 200,
    itemStyle: {
      color: '#0095FF'
    }
  }, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130, 80, 70, 110
];

var data6 = [
  { value: 67,
    name: "사용중",
    itemStyle: {
      color: "#2C69EE"
    }
  },
  { value: 33,
    name: "사용가능",
    itemStyle: {
      color: "#ECECEC"
    }
  },
];

var data7 = [
  { value: 37,
    name: "사용중",
    itemStyle: {
      color: "#0095FF"
    }
  },
  { value: 63,
    name: "사용가능",
    itemStyle: {
      color: "#ECECEC"
    }
  },
];

var data8 = [
  { value: 23,
    name: "사용중",
    itemStyle: {
      color: "#0095FF"
    }
  },
  { value: 77,
    name: "사용가능",
    itemStyle: {
      color: "#ECECEC"
    }
  },
];

// 차트 생성
var chart1 = echarts.init(document.getElementById('chart1'));
var chart2 = echarts.init(document.getElementById('chart2'));
var chart3 = echarts.init(document.getElementById('chart3'));
var chart4 = echarts.init(document.getElementById('chart4'));
var chart5 = echarts.init(document.getElementById('chart5'));
var chart6 = echarts.init(document.getElementById('chart6'));
var chart7 = echarts.init(document.getElementById('chart7'));
var chart8 = echarts.init(document.getElementById('chart8'));

// Chart 1 설정
var option1 = {
  title: {
    text: '위배처방기준별',
    left: 'center',
    top: '2%',
  },
  xAxis: { 
    type: 'category', 
    data: [], 
    axisLine: {
      lineStyle: {
        color: '#D5DDE4'
      }
    }
  },
  yAxis: { type: 'value' },
  series: [{
    type: 'bar',
    data: data1,
    itemStyle: {
      borderRadius: [20, 20, 0, 0],
      color: "#D5DDE4"
    }
  }]
};

// Chart 2 설정
var option2 = {
  title: {
    text: '처방기관별',
    left: 'center',
    top: '2%',
  },
  xAxis: { type: 'value', },
  yAxis: { 
    type: 'category', 
    data: [],
    axisLine: {
      lineStyle: {
        color: '#D5DDE4'
      }
    }
  },
  series: [{
    type: 'bar',
    data: data2,
    itemStyle: {
      borderRadius: [0, 20, 20, 0],
      color: "#D5DDE4"
    }
  }]
};

// Chart 3 설정
var option3 = {
  title: {
    text: '처방의사별',
    left: 'center',
    top: '2%',
  },
  xAxis: { type: 'value' },
  yAxis: { 
    type: 'category', 
    data: [],
    axisLine: {
      lineStyle: {
        color: '#D5DDE4'
      }
    }
  },
  series: [{
    type: 'bar',
    data: data3,
    itemStyle: {
      borderRadius: [0, 20, 20, 0],
      color: "#D5DDE4"
    }
  }]
};

// Chart 4 설정
var option4 = {
  title: {
    text: '성별',
    left: 'center',
    top: '2%',
  },
  legend: {
    orient: 'vertical',
    left: 'center',
    bottom: 'bottom',
  },
  series: [{ type: 'pie', data: data4, label: {show: false}}]
};

// Chart 5 설정
var option5 = {
  xAxis: { 
    type: 'category', 
    data: [], 
    axisLine: {
      lineStyle: {
        color: '#D5DDE4',
      }
    }
  },
  yAxis: { type: 'value' },
  series: [{
    type: 'bar',
    data: data5,
    itemStyle: {
      borderRadius: [20, 20, 0, 0],
      color: "#D5DDE4"
    }
  }]
};

// Chart 6 설정
var option6 = {
  series: [{ type: 'pie', data: data6, label: {show: false}}]
};

// Chart 7 설정
var option7 = {
  series: [{ type: 'pie', data: data7, label: {show: false}}]
};

// Chart 8 설정
var option8 = {
  series: [{ type: 'pie', data: data8, label: {show: false}}]
};

// 차트에 설정 적용
chart1.setOption(option1);
chart2.setOption(option2);
chart3.setOption(option3);
chart4.setOption(option4);
chart5.setOption(option5);
chart6.setOption(option6);
chart7.setOption(option7);
chart8.setOption(option8);