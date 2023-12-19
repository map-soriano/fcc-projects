function palindrome(str) {
    const cleanStr = str.replace(/[\s\W_]/g, "").toLowerCase();
    const original = cleanStr.split("");
    const reverse = cleanStr.split("").reverse();
    let isPalindrome = false;
  
    for (let x in original) {
      console.log(original[x], reverse[x]);
      if (original[x] !== reverse[x]) {
        isPalindrome = false;
        break;
      } else isPalindrome = true;
    }
  
    console.log(original);
    console.log(reverse);
    console.log(isPalindrome);
    console.log();
  
    return isPalindrome;
  }
  
  palindrome("_eye");
  palindrome("almostomla");