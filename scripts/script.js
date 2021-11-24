function random(){
  let rRandom = Math.random() * 255;
  let gRandom = Math.random() * 255;
  let bRandom = Math.random() * 255;
  let colorRGB = document.getElementById("color");
  
  document.body.style.backgroundColor = "rgb(" + rRandom + "," + gRandom + "," + bRandom + ")";
  
  return colorRGB.innerHTML = document.body.style.backgroundColor;
}

function generateRandom(){
  let rRandom = Math.random() * 255;
  let gRandom = Math.random() * 255;
  let bRandom = Math.random() * 255;
  let colorRGB = document.getElementById("color");
  
  document.body.style.backgroundColor = "rgb(" + rRandom + "," + gRandom + "," + bRandom + ")";
  
  return colorRGB.innerHTML = document.body.style.backgroundColor;
}