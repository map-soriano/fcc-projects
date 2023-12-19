function rot13(str) {
    const split = str.split("");
    const converted = split.map(x => x.charCodeAt(0));
  
    const unrot = converted.map(x => {
      if (x < 65 || x > 90) return x;
  
      if (x - 13 < 65) {
        let diff = x - 65;
        x = 90;
        x -= 12 - diff;
      } else x -= 13;
  
      return x;
      });
    const decrypt = unrot.map(x => String.fromCharCode(x));
  
    console.log("encrypted", str);
    console.log("step 1", split);
    console.log("step 2", converted);
    console.log("step 3", unrot);
    console.log("step 4", decrypt);
    console.log("decrypted", decrypt.join(""));
    console.log();
    
    return decrypt.join("");
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  