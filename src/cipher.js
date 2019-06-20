window.cipher = {
  encode:(offset,string)=> {
    let result= '';
    string = string. toUpperCase();
    for(let i=0; i<string.length; i++ ){
      const ascii= string[i].charCodeAt();
      const formula= (ascii-65+offset)%25+65;
      const letter= string.fromCharCode(formula)
      result= result+ letter
    }
    return result
  },
};
