function getLargestExpressionResult(a, b) {
    const array1 = [a + b, a - b, a * b, a / b]; 
  
    array1.sort(function (a, b){
      return a - b;
      });
  
    return array1[3];
  }





  function isBigLetter(ch) {
    const isLetter = ch.toLowerCase() !== ch.toUpperCase();
    const isBig = ch === ch.toUpperCase();
    
    return isLetter && isBig;
  }




  function makeAbbr(words) {
  
    let abbr = words.charAt(0);
  
    for(let i = 0; i < words.length; i++){
      if(words[i] == ' '){
        abbr += words[i + 1];
      }
    }
  
    return abbr.toUpperCase();
  }


  function getSuccessRate(statistic) {
  
  
    let count = 0;
  
    for(let ch of statistic){
      if(ch === '1'){
        count++;
      }
    }
  
    return (statistic.length > 0) ? Math.round(100 / statistic.length * count) : 0;
  }


  function getPlan(startProduction, numberOfMonths, percent) {
  
  
    if(numberOfMonths === 0){
      return [];
    }
  
    let arrPlan = [Math.floor(startProduction + (startProduction * percent / 100))];
  
    for(let i = 1; i < numberOfMonths; i++){
      arrPlan[i] = Math.floor(arrPlan[i - 1] + arrPlan[i - 1] * percent / 100); 
    }
  
    return arrPlan; 
  }


  function splitString(str) {
  
  
    let stringArr = [];
  
    if(str.length % 2 !== 0){
      str += '_';
    }
  
    for(let i = 0, x = 0; i < str.length; i +=2, x++){
        stringArr[x] = str[i] + str[i + 1];
      
    }
  
    return stringArr;
  }


  function scrollingText(word) {
  
    let wordArray = [];
  
    for(let i = 0; i < word.length; i++){
      wordArray[i] = (word.slice(i, word.length) + word.slice(0, i)).toUpperCase();
    }
  
    return wordArray;
  }


  function isSpecialNumber(n) {
  
    let strN = '' +  n;
  
    for(let i = 0; i < strN.length; i++){
      if(+strN[i] > 5){
        return 'NOT!!';
      }
    }
  
    return 'Special!!';
  }


  function isTidy(number) {
  
    let strN = '' + number;
  
    for(let i = 1; i < strN.length; i++){
      if(strN[i] < strN[i - 1]){
        return false;
      }
    }
    return true;
  }


  function isJumping(number) {
  
    let strNum = '' + number;
  
    if(strNum.includes('0123456789')){
      return 'JUMPING';
    }
  
    for(let i = 1; i < strNum.length; i++){
      if(Math.abs(+strNum[i] - +strNum[i - 1]) !== 1){
        return 'NOT JUMPING';
      }
    }
    return 'JUMPING';
  }


  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }


 function makeNegative(num) {
    return -Math.abs(num);
  }

  function removeChar(str){

     return str.slice(1, str.length - 1);
   };

   function removeChar1(str){
 
     let str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };


   function removeChar(str){
    return str.slice(1,-1)  // argument -1 is the same as 'str.length -1'
   };

   function removeChar(str){
     let input_str = str;
     let output_str = '';
     
     for (let i = 1; i < input_str.length-1; i++) {
       output_str += input_str[i];
     }
   
     return output_str;
   };


   function solution(str){
    return str.split('').reverse().join('');  
  }


  function repeatStr (n, s) {
    return s.repeat(n);
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }




  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }


  function noSpace(x){return x.split(' ').join('')}



const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}


function rowSumOddNumbers(n) {
  if( n===1){
    return 1;
  }
  
  let sum = 0;
  
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  
  sum = sum * 2 - 1;
  let num = sum;
  for(let i = n; i > 1; i--){
    sum -=2;
    num += sum ;  
  }
  
  return num;
  
}


function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}


function addBinary(a,b) {
    return (a + b).toString(2);
}


function validatePIN (pin) {
  
  let pink = pin.split('');
  console.log(pink);
  if(pink.length === 4 || pink.length === 6){
    for(let i = 0; i < pink.length; i++ ){
    if(!Number.isInteger(+pink[i]) || pink[i] === '\n'){
      return false;
    }
  }
  }
  else
    return false;

    return true;
  }


function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}


function validatePIN (pin) {
  //return true or false
  let n = pin.length;
  if( n !== 4 && n !== 6)
      return false;
  for (let i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}


function validatePIN(pin) {
    if (pin.length == 4 || pin.length == 6) {

  
        if (isNaN(pin) == true) {
            return false
        }
        else if (pin < 0) { return false }
        else if (pin.startsWith('+', '-', ' ', '.')) { return false }
        else if (pin.includes('.', "'", "+", " ")) { return false }
        else if(pin.endsWith('\n')){return false}
        else {
            return true
        }
    } else { return false }
}


function printerError(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}


const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;


function printerError(s) {

  let regexp = /[N-Z]/gi;

  let count = s.match(regexp);
  return `${count !== null ? count.length : 0}/${s.length}`;
}


function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}


function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}


const openOrSenior = data => {
  let getOpenOrSenior = [];
  for(i=0; i<data.length; i++){
    if(data[i][0]>=55 && data[i][1]>7){
      getOpenOrSenior.push("Senior");
    }else{
      getOpenOrSenior.push("Open");
    }
  }
  return getOpenOrSenior;
}


function friend(friends){
  return friends.filter(w => w.length === 4 );
}


function friend(friends){
  
  //Create new array called "myFriends" for add your friends
  let i,
      len = friends.length,
      myFriends = [];
  
  
  for (i = 0; i < len; i++) {
        
       //Check for names with length equal to four and it is not a number
       if(friends[i].length == 4 && isNaN(friends[i])) {
          myFriends.push(friends[i]);
       }
      
  }
    
  return myFriends;
}


function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let sym = (Math.sqrt(sq) + 1) ** 2;
  return (sym % 1 === 0) ? sym : -1;
}


function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}


function findNextSquare(sq) {
  let number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}


function nbYear(p0, percent, aug, p) {
  
  let l = p0;
  let i = 0;
  while(l < p){
    l += Math.floor(l * (percent / 100) + aug);
    i++;
  }
  return i;
}


function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}


function longest(s1, s2) {
  
  let s3 = (s1 + s2).split('').sort();
  for(let i = 1; i < s3.length; i++){
    if(s3[i] === s3[i - 1])
      s3[i - 1]= '';
  }
  return s3.join('');
}


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}


function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}


function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function (a, b) {
               return a - b;
               });
  return numbers[0] + numbers[1];
  
}


function sumTwoSmallestNumbers(numbers) {  
  let smallestNumber = 0,
      secondSmallest = 0;
  
  smallestNumber = Math.min(numbers[0], numbers[1]);
  secondSmallest = Math.max(numbers[0], numbers[1]);
  
  for (let index = 2; index < numbers.length; index++) {
    if (numbers[index] < smallestNumber) {
      secondSmallest = smallestNumber;
      smallestNumber = numbers[index];
    } else if (numbers[index] < secondSmallest) {
      secondSmallest = numbers[index];
    }
  }
  
  return (smallestNumber + secondSmallest);
};


function getSum( a,b )

{
  if(a === b)
    return a;
  let arr = [a, b].sort((a, b) => a - b);
  let sum = 0;
  for(let i = arr[1]; i >= arr[0]; i--)
    sum += i;
  return sum;
}


const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum( a,b ) {
   let result = 0;
   let bigger = a > b ? a : b;
   let smaller = a > b ? b : a;
   for (let i = smaller; i <= bigger; i++) { result += i }
   return result
}


function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


function maskify(cc) {
  cc = cc.split("");
  for(let i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}


function maskify(cc) {
  let aa = '';
  if(cc.length > 4){
    aa = cc.substr(cc.length - 4, 4);
    for(let i = 0; i < cc.length - 4; i++){
      aa = '#' + aa;
    }
    return aa;
  }
  return cc;
}


let pairs1 = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs1[v] }).join('');
}


let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);


function DNAStrand(dna){

  let result= "";
      for(var i =0; i<dna.length; i++) 
      {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
     }
     return result;
  }


function DNAStrand(dna){
  
  let dnk = dna.split('');
  
  for(let i = 0; i < dnk.length; i++){
    if(dnk[i] === 'A'){
      dnk[i] = 'T';
      }
    else if(dnk[i] === 'T'){
      dnk[i] = 'A';
      }
    else if(dnk[i] === 'C'){
      dnk[i] = 'G';
      }
    else if(dnk[i] === 'G'){
      dnk[i] = 'C';
      }
    
  }
  console.log(dnk.join(''));
  return dnk.join('');
}


String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};


String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};


String.prototype.toJadenCase = function (str) {
  //...
  
  let arr = this.split(' ');
  
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};


function findShort(s){
  let arr = s.split(" ");
  let small = arr[0];
  
  for(let i = 1; i < arr.length; i++){
    if(small.length > arr[i].length)
      small = arr[i];
  }
  return small.length;
}


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;


function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


function XO(str) {
  let countX = 0;
  let countO = 0;
  let stn = str.split('');
  
  for(let i = 0; i < stn.length; i++){
    if(stn[i] === 'x' || stn[i] === 'X'){
      countX++;
      }
    if(stn[i] === 'o' || stn[i] === 'O'){
      countO++;
       }
  }

  return countX === countO;
}


function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => Number.isInteger(el));
}


function filter_list(l) {
  return l.filter(Number.isInteger);
}


const filter_list = l => l.filter(c => typeof c === 'number');


function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str){
  let i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}


function isIsogram(str){
  if(str.length === 0){
    return true;
  }
  let arr = str.toLowerCase().split('').sort();
  
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] === arr[i - 1])
      return false;
  }
  
  return true;
}


function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


const isSquare = n => Number.isInteger(Math.sqrt(n));


let isSquare = function(n){  
  return (Math.sqrt(n) % 1 === 0) && n >= 0; 
}


function getMiddle(s)
{
  let i  = Math.round(s.length / 2);
  
  if (s.length === 1){
    return s;
  }
  else if(s.length % 2 === 0){
    return `${s[i - 1]}${s[i]}`; 
  }
  else 
    return s[i - 1];
  
}


function getMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}


function accum(s) {
  function add(v, ind){
    let a = v.toUpperCase();
    for(let i = 1; i < ind + 1; i++){
      a += v.toLowerCase();
    }
    return a; 
  }
  
  let arr = [];
  
  for(let i = 0; i < s.length; i++){
    arr[i] = add(s[i], i);
  }
  return arr.join('-');
}


function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


function descendingOrder(n){
  return Number.parseInt(n.toString().split('').sort((a, b) => a - b).reverse().join(''));
}


function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a, b) => a - b);
  return `${arr[arr.length - 1]} ${arr[0]}`;
}


function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


function disemvowel(str) {
  function isVowelRegEx(char) {
  if (char.length == 1) {
    return /[aeiouAEIOU]/.test(char);
  }
}
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(isVowelRegEx(arr[i])){
      arr[i] = '';
    }
  }
  return arr.join('');
}


function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
    
  
};


function squareDigits(num){
  
  return Number.parseInt(num.toString().split('').map(a => a ** 2).join(''));
}


function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};


function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}


function getCount(str) {
  var vowelsCount = 0;
  function isVowel(char) {
     if (char.length == 1) {
    let vowels = new Array("a", "e", "i", "o", "u");
    let isVowel = false;

    for (e in vowels) {
      if (vowels[e] == char) {
        isVowel = true;
      }
    }
    return isVowel;
  }
  }
  for(let i = 0; i < str.length; i++){
    if(isVowel(str[i])){
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}



function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

function abbrevName(name){

  let nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  return n.toString().split('').reverse().map(string => +string);
}

const digitize = (x) => {
  x = `${x}`.split('').reverse();
  let a = []
  for(let i = 0; i < x.length; i++){
    a.push(+x[i])
  }
  return a
}

function digitize(n) {
  return n.toString().split("").reverse().map(function(i){
    return parseInt(i);
  });
}

function findNeedle(haystack) {

  for(let ch of haystack){
    if(ch === 'needle'){
      return 'found the needle at position ' + haystack.indexOf(ch);
    }
  }
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function maps(x){
    return x.map((num) => num * 2); 
}

maps = x => x.map(e => e * 2);

function maps(x){

  let newArr = [];
  
  x.map(function(y){
    newArr.push(y*2);
});

return newArr;



}

function maps(x){
//return x.map(el => el * 2);
let arr = [];
for(let i = 0; i < x.length; i++){
arr.push(x[i] * 2);
}
return arr;
}

var stringToNumber = function(str){
  return parseInt(str);
}

function invert(array) {
   return array.map(el => -el);
}

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

function solution(str, ending){
  return  str.endsWith(ending);
}

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

function solution(str, ending){
  if(str.length < ending.length){
    return false;
  }
  if(!ending)
    return true;
  
  let strRes = str.slice(-ending.length);
  console.log(strRes, str, ending)
  
  for(let i = 0 ; i < strRes.length; i++){
    if(strRes[i] !== ending[i]){
      return false;
    }
  }
  return true;
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}


function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};


function divisors(integer) {
  
  let arr = [];
  
  for(let i = 2; i < integer -1; i++){
    if(integer % i === 0){
      arr.push(i);
    }
  }
  if(arr.length === 0){
    return `${integer} is prime`;
  }
  
  return arr;
};


function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};


const number1 = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}