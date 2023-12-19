function convertToRoman(num) {
    const split = String(num).split("");
    const initLength = split.length;
    const breakdown = [];
  
    let ctr = 1;
  
    for (let x = 0; breakdown.length != initLength; x++) {
      let dist = split[x] * Math.pow(10, split.length - ctr);
      let toPush = "";
  
      if (dist % 1000 == 0 && dist !== 0) {
        toPush += "M".repeat(dist / 1000);
        dist -= 1000 * (dist / 1000);
      }
  
      console.log(dist, "line 17");
  
      if (dist % 900 == 0 && dist !== 0) {
        toPush += "CM";
        dist -= 900;
      }
  
      console.log(dist, "line 24");
  
      if (dist > 500 && dist !== 0) {
        toPush += "D";
        dist -= 500;
      }
  
      console.log(dist, "line 31");
  
      if (dist % 500 == 0 && dist !== 0) {
        toPush += "D";
        dist -= 500;
      }
  
      console.log(dist, "line 38");
  
      if (dist % 400 == 0 & dist !== 0) {
        toPush += "CD";
        dist -= 400;
      }
  
      console.log(dist, "line 45");
  
      if (dist % 100 == 0 && dist !== 0) {
        toPush += "C".repeat(dist / 100);
        dist -= 100 * (dist / 100);
      }
  
      console.log(dist, "line 52");
  
      if (dist % 90 == 0 && dist !== 0) {
        toPush += "XC";
        dist -= 90;
      }
  
      console.log(dist, "line 59");
  
      if (dist > 50 && dist !== 0) {
        toPush += "L";
        dist -= 50;
      }
  
      console.log(dist, "line 66");
  
      if (dist % 50 == 0 && dist !== 0) {
        toPush += "L";
        dist -= 50;
      }
  
      console.log(dist, "line 73");
  
      if (dist % 40 == 0 && dist !== 0) {
        toPush += "XL";
        dist -= 40;
      }
  
      console.log(dist, "line 80");
  
      if (dist % 10 == 0) {
        toPush += "X".repeat(dist / 10);
        dist -= 10 * (dist / 10);
      }
  
      console.log(dist, "line 87");
  
      if (dist % 9 == 0 && dist != 0) {
        toPush += "IX"; 
        dist -= 9;
      }
  
      console.log(dist, "line 94");
  
      if (dist > 5) {
        toPush += "V";
        dist -= 5;
      }
  
      console.log(dist, "line 101");
  
      if (dist % 5 == 0 && dist != 0) {
        toPush = "V".repeat(dist / 5);
        dist -= 5;
      }
  
      console.log(dist, "line 108");
      
      if (dist % 4 == 0 && dist != 0) {
        toPush += "IV";
        dist -= 4;
        console.log(dist, "line 113");
  
      }
  
      if (dist % 1 == 0 && dist != 0) {
        toPush += "I".repeat(dist);
        dist -= 1;
        console.log(dist, "line 118");
      }
  
      console.log(dist, "line 121");
  
      breakdown.push(toPush);
  
      ctr++;
      }
  
    console.log(split);
    console.log(breakdown.join(""));
    return breakdown.join("");
  }
  
  convertToRoman(400);
  convertToRoman(666);