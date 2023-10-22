const myArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
    '+', '=', '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.',
    '/', '<', '>', '?', '`', '~', '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9'
  ];
 

export function encode(str, shift) {
    let encodedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = myArray.indexOf(char);
      shift = parseInt(shift);
  
      if (index !== -1) {
        const newIndex = (index + shift ) % myArray.length;
        encodedStr += myArray[newIndex];
      } else {
        encodedStr += char;
      }
    }
  
    return encodedStr;
  };
  
export function decode(str, shift) {
    let decodedStr = '';
    shift = parseInt(shift);
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = myArray.indexOf(char);
  
      if (index !== -1) {
        const newIndex = (index - shift + myArray.length) % myArray.length;
        decodedStr += myArray[newIndex];
      } else {
        decodedStr += char;
    }   
  }
  return decodedStr;
};
  
