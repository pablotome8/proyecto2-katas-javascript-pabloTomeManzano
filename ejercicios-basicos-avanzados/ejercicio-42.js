// wap temporal
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,index1,index2) { // fantasticfour,0,2
    const temporal = array[index1];  // temp vale 0
    array[index1] = array[index2];   // 0 vale 2
    array[index2] = temporal;        // 2 vale 0
    console.log(array);                     
}
swap(fantasticFour,0,2);