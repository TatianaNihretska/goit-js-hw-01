function getElementWidth(content, padding, border){
    const cNumber = parseFloat(content);
    const pNumber = parseFloat(padding);
    const bNumber = parseFloat(border);
    const box = cNumber + pNumber*2 +bNumber*2 ;
 console.log(box)
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
