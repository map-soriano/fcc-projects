/* There's probably a more optimized way to do this.
   So, I'll be back to fix this when I master the art of RE!
*/

function telephoneCheck(str) {
    if (/\(/g.test(str)) {
      if (!/\)/g.test(str)) return false;
    }
  
    if (/\)/g.test(str)) {
      if (!/\(/g.test(str)) return false;
    }
  
    if (/^\-/.test(str)) return false;
  
    if (/\(....+\)/.test(str)) return false;
  
    if (/^(\d\d) /.test(str)) return false;
  
    const clean = str.replace(/[\s\-()]/g, "");
    console.log(str);
    console.log(clean);
    console.log(clean.length);
  
    if (/[A-z]/g.test(str)) return false;
    if (clean.length < 10) return false;
    if (clean.length > 11) return false;
    if (clean.length > 10 && String(clean[0]) !== "1") return false;
  
    return true;
  }
  
  // console.log(telephoneCheck("555-555-5555"));
  console.log();
  // console.log(telephoneCheck("1 (555) 555-5555"));
  console.log();
  // console.log(telephoneCheck("5555555555"));
  // console.log(telephoneCheck("55 55-55-555-5"));
  // console.log(telephoneCheck("(6054756961)"));
  // console.log(telephoneCheck("-1 (757) 622-7382"));