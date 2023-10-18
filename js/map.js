// map script
const canvasF = document.querySelector('#my-canvasF');
// 콘텍스트 가져오기
const contextF = canvasF.getContext('2d');

// Image 인스턴스 생성
const imgF = new Image();


// 이미지 로딩 후 처리
imgF.onload = () => {
  // 콘텍스트로 캔버스에 그리기
  contextF.drawImage(imgF, 0, 0);
};
// 이미지 로딩 시작
imgF.src = '../images/map/map_none.png';
// imgF.crossOrigin = "Anonymous";


// 캔버스 요소 참조
const canvas = document.querySelector('#my-canvas');
// 콘텍스트 가져오기
const context = canvas.getContext('2d');

// Image 인스턴스 생성
const img = new Image();


// 이미지 로딩 후 처리
img.onload = () => {
  // 콘텍스트로 캔버스에 그리기
  context.drawImage(img, 0, 0);
};
// 이미지 로딩 시작
img.src = '../images/map/map_color.png';
// img.crossOrigin = "Anonymous";

// 마우스 이동 시
canvasF.addEventListener('mousemove', (event) => {
// 마우스 좌표 가져오기
const x = event.layerX;
const y = event.layerY;
// imageData 가져오기
const imageData = context.getImageData(x, y, 1, 1);
// 화소 배열 가져오기
const data = imageData.data;
const r = data[0];  // 빨
const g = data[1];  // 녹
const b = data[2];  // 파
const a = data[3];  // 알파
// 문자열로 색 정보 다루기
const color = `rgba(${r}, ${g}, ${b}, ${a})`;

const el = document.querySelector('.map-txt');

if(color == "rgba(255, 242, 0, 255)") {
    el.textContent = "서울";
    imgF.src = '../images/map/map_sl.png';
  } else if (color == "rgba(136, 0, 21, 255)") {
    el.textContent = "경기";
    imgF.src = '../images/map/map_gg.png';
  } else if (color == "rgba(255, 127, 39, 255)") {
    el.textContent = "인천";
    imgF.src = '../images/map/map_ic.png';
  } else if (color == "rgba(34, 177, 76, 255)") {
    el.textContent = "강원";
    imgF.src = '../images/map/map_gw.png';
  } else if (color == "rgba(63, 72, 204, 255)") {
    el.textContent = "충남";
    imgF.src = '../images/map/map_cn.png';
  } else if (color == "rgba(163, 73, 164, 255)") {
    el.textContent = "세종";
    imgF.src = '../images/map/map_sj.png';
  } else if (color == "rgba(185, 122, 87, 255)") {
    el.textContent = "대전";
    imgF.src = '../images/map/map_dj.png';
  } else if (color == "rgba(0, 162, 232, 255)") {
    el.textContent = "충북";
    imgF.src = '../images/map/map_cb.png';
  } else if (color == "rgba(255, 174, 201, 255)") {
    el.textContent = "경북";
    imgF.src = '../images/map/map_gb.png';
  } else if (color == "rgba(255, 201, 14, 255)") {
    el.textContent = "전북";
    imgF.src = '../images/map/map_jb.png';
  } else if (color == "rgba(153, 217, 234, 255)") {
    el.textContent = "경남";
    imgF.src = '../images/map/map_gn.png';
  } else if (color == "rgba(239, 228, 176, 255)") {
    el.textContent = "전남";
    imgF.src = '../images/map/map_jn.png';
  } else if (color == "rgba(181, 230, 29, 255)") {
    el.textContent = "광주";
    imgF.src = '../images/map/map_gj.png';
  } else if (color == "rgba(112, 146, 190, 255)") {
    el.textContent = "대구";
    imgF.src = '../images/map/map_dg.png';
  } else if (color == "rgba(200, 191, 231, 255)") {
    el.textContent = "울산";
    imgF.src = '../images/map/map_us.png';
  } else if (color == "rgba(0, 128, 128, 255)") {
    el.textContent = "부산";
    imgF.src = '../images/map/map_bs.png';
  } else if (color == "rgba(255, 0, 128, 255)") {
    el.textContent = "제주";
    imgF.src = '../images/map/map_jj.png';
  }
});