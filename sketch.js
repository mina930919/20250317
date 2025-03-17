let colors = [];

function setup() { //初始設定函數,只會執行一次
  // createCanvas(400, 400);
  //產生一個寬高為視窗寬與高的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定畫布背景色為透明
  clear();

 
  // 生成顏色數組
  for (let j = 0; j < 10; j++) {
    colors[j] = color(random(255), random(255), random(255));
  }
}

function draw() {
  clear(); // 清除之前的繪製內容
  
  // 繪製十條海草形線條
  for (let j = 0; j < 10; j++) {
    // 設定每條線的顏色
    stroke(colors[j]);
    strokeWeight(10); // 設定線條寬度為1公分
    
    let x = (width / 10) * j + (width / 20); // 計算每條線的初始 x 位置
    let y = height;
    
    beginShape();
    for (let i = 0; i < 20; i += 1) { // 設定線條長度為20公分（200像素）
      let offsetX = sin(i * 0.1 + j + frameCount * 0.02) * 20; // 上方線條左右搖擺，速度減慢
      vertex(x + offsetX, y - i * 10);
    }
    endShape();
  }
}

