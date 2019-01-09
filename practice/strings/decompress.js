/*
 string = '2[ab]1[2[ab]c]' => 'abababc'
 */
function decompress(string) {
  let decompressed = '';
  let stack = [];
  let count = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
 
    if (/\d/.test(char)) {
      count += char;

      if (string[i + 1] === '[') {
        stack.push(new CompressedString(count));
        count = '';
      } 
    } else if (/[a-z]/.test(char)) {
      if (stack[stack.length - 1]) {

//        if (string[i - 1] === ']') {
//          stack[stack.length - 1].letters += (decompressed + char);
//        } else {
          stack[stack.length - 1].letters += char;
//        }
      } else {
        decompressed += char;
      }
    } else if (char === ']') {
      let compressedString = stack.pop();
      if (compressedString.hasLetters()) {
        decompressed += compressedString.decompress();
      } else {
        let newResult = '';
        for (let i = 0; i < compressedString.count - 1; i++) {
          newResult += decompressed;
        }
        decompressed = newResult;
      }
    }
  }

  return decompressed;
}

class CompressedString {
  constructor(count) {
    this.count = Number(count);
    this.letters = '';
  }

  decompress() {
    let result = '';
    const letters = this.letters;

    for (let i = 0; i < this.count - 1; i++) {
      this.letters += letters;
    }

    return this.letters;
  }
  
  hasLetters() {
    return !!this.letters.length;
  }
}

console.log('decompress: ', decompress('2[a3[b]c]'));
