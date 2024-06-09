let table;

function preload() {
  table = loadTable('Book2.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);
  background(0);
  
  let rowCount = table.getRowCount();
  let colCount = table.getColumnCount();
  
  let barWidth = width / rowCount;
  
  textSize(16);
  fill(255);
  textAlign(CENTER, CENTER);
  
  for (let i = 0; i < rowCount; i++) {
    let category = table.getString(i, 0);
    let value = table.getNum(i, 1);
    
    let barHeight = map(value, 0, maxValue(table), 0, height - 150);
    
    fill(255, 0, 0);
    rect(i * barWidth, height - barHeight - 50, barWidth - 10, barHeight);
    
    fill(255);
    text(category, i * barWidth + barWidth / 2, height - 20);
    text(value, i * barWidth + barWidth / 2, height - barHeight - 70);
  }
}

function maxValue(table) {
  let maxVal = 0;
  for (let i = 0; i < table.getRowCount(); i++) {
    let value = table.getNum(i, 1);
    if (value > maxVal) {
      maxVal = value;
    }
  }
  return maxVal;
}
