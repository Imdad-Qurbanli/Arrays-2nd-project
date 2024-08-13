
// Arrayda tekrarlanan ilk eded:
var arr =[1, 2, 3, 4, 5, 6, 3, 8, 9]
for ( var i = 0; i < arr.length; i++) {
  if ( arr[3] === arr[i + 1]) {
    console.log(arr[i]);
    break;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 3, 8, 9 ]
for ( var i = 0; i < arr.length; i++) {
  if ( arr[i] === 3) {
    console.log(arr[i]);
    break;
  }
}
//ilk herf boyuk
   var arr= ['men', 'sen', 'biz'];
   for ( var i = 0; i < arr.length; i++){                      
      if ( typeof arr[0] === 'string') {
         arr[0] = arr[0].toUpperCase();
      }
   }
   console.log(arr[0]);

// max-min numbers

let numbers = [1,2,3,4,5,6,7,8,9,];
let maxNumber = '';
let minNumber = '';
for (let i = 0; i < numbers.length; i++) {
   let maxNumber = Math.max(...numbers);
   let minNumber = Math.min(...numbers);
   console.log("en boyuk eded:" , maxNumber);
   console.log("en kicik eded:" , minNumber);
}





// Arrayda ilk herfi boyuk ele

     var words = ['sam sulek', 'ayla']

         var capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

         console.log(capitalizedWords);




   


//  Arrayda son herif boyuk

var inputArray = ['men', 'sen', 'biz'];
        for(let i = 0 ; i < inputArray.length; i++){

            inputArray[i] = inputArray[i].slice(0 ,-1 ) + inputArray[i].slice(-1).toUpperCase()
            
        }
        console.log(inputArray);





// tersine cevirmek(methot ve ya mod ile)

var arr = [ 1, 2, 3, 4, 5]
arr.reverse();
console.log(arr);



// cemi cutdurse true deyikse false olsun

var arr = [ 1, 2, 3, 4, 5, ]
var sum = 0; 
for ( var i = 0; i < arr.length; i++) {
   sum = sum + arr[i]}
if ( sum % 2 === 0) {s
   console.log("True");  
  }
  else{
     console.log("False");    
  }



// 2 ededin cemi

let arr = [ 1, 2, 3, 4, 5, 7, 6, 5, 8, 7];
let newArray = ''
for ( let i = 0; i < arr.length; i++) {
   newArray = sumBetweenPairs(arr);
   console.log(newArray);
   
}





// hem yazi hem herf var yazilari cixart

var arr = [ 'men', 'sen', 'biz',8 , 7, 5, 7, 6, 5,]

for ( var i = 0; i < arr.length; i++) {

  var numbers = arr.filter(item => typeof item === 'number');
}
console.log(numbers);




// yalniz string

var arr = [ 5,'salam','=',8 , 7,'dunya']
for ( var i = 0; i < arr.length; i++) {
   var string = arr.filter(item => typeof item ==='string');

}
console.log(string);
