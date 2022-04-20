function find(){
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/ig; 
return text.match(myRegex);
}

function matchEverything_Let_Num(){
    let quoteSample = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/g; // 
    return quoteSample.match(nonAlphabetRegex).length;
}

function restrictPossibleUsernames(){
    let username = "JackOfAllTrades";
    let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;; 
    return userCheck.test(username);
}

function possitiveNegative(){
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
    return pwRegex.test(sampleWord);
}

function checkForMixedGroupingOfChar(){
    let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor | Franklin |Franklin\sD.)/ig; 
return myRegex.test(myString);
}

function reusePatternsUsingCaptureGroups(){
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+)\s\1\s\1$/;
    return reRegex.test(repeatNum);   
}

function useCapturegroupsToSearchAndReplace(){
    let str = "one two three";
    let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
    let replaceText = '$3 $2 $1'; 
    return str.replace(fixRegex, replaceText);
}

function removeWhitespace_start_end(){
    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; 
    return hello.replace(wsRegex, ""); 
}

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = []; /* <-----  row has been declared inside the outer loop. 
       Now a new row will be initialised during each iteration of the outer loop allowing 
       for the desired matrix. */
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);


  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; 
    return sentence;
  }
  
  console.log(spreadOut());

  function filteredArray(arr, elem) {
    let newArr = [];
      for(let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) === -1){
          newArr.push(arr[i]);
        }
      }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  ///////////
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));

  ///////////////
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if(userObj.hasOwnProperty('Alan') && 
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')){
      return true;
    }
    return false;
  }
  
  console.log(isEveryoneHere(users));

  const users1 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let count = 0;
    for(let user in usersObj){
      if(usersObj[user].online === true){
        count++
      }
    }
    return count;
  }
  
  console.log(countOnline(users1));

  /////////////////
  let users2 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }
  
  console.log(getArrayOfUsers(users2));

  /////////////////
  let user3 = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
      userObj.data.friends.push(friend);
      return userObj.data.friends;
  }
  
  console.log(addFriend(user3, 'Pete'));

  function reverseString(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
       newStr += str[i]; 
    }
    return newStr;
  }
  
  reverseString("hello");

  function factorialize(num) {
    let sum = 1;
    for(let i = 1; i <=num;i++ ){
      sum *= i;
    }
    return sum;
  }
  
  factorialize(5);

  function findLongestWordLength(str) {
    let arr = str.split(" ");
     let max = arr[0];
     for(let i = 1; i < arr.length; i++){
       if(max.length < arr[i].length){
         max = arr[i]
       }
     }
     return max.length;
   }
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");

   function largestOfFour(arr) {
    let arrMax = [];
    for(let i = 0; i < arr.length; i++){
       arrMax.push(Math.max(...arr[i]))
      }
    console.log(arrMax)
    return arrMax;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  function confirmEnding(str, target) {
    let newStr = str.slice(-target.length)
    console.log(newStr)
    return newStr === target;
  }
  
  confirmEnding("Bastian", "n");

  function repeatStringNumTimes(str, num) {
    let arr = []
    if(num <= 0){
      return ''
    }
    for(let i = 0; i < num; i++){
      arr.push(str);
    }
    return arr.join('');
  }
  
  repeatStringNumTimes("abc", 3);

  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  function titleCase(str) {
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();  
    }
    return arr.join(' ');
  }
  
  titleCase("I'm a little tea pot");

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }  

  function getIndexToIns(arr, num) {
    arr.sort((a,b) => a - b);
    let n = 0;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] < num && arr[i + 1] >= num){
        n = i + 1;
      }
     else if(arr[i] < num && arr[i + 1] < num){
        n = arr.length;
      }
    }
    console.log(n, arr);
    return n;
    
  }
  
  getIndexToIns([2, 5, 10], 15);

  function getIndexToIns1(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
  }
  
  getIndexToIns1([2, 5, 10], 15);

  function mutation(arr) {
    let str0 = arr[0].toLowerCase(); 
    let str1 = arr[1].toLowerCase().split('');
        for(let x = 0; x < str1.length; x++){
        if(!(str0.includes(str1[x])))
          return false;
      }
    return true;
  }
  
  mutation(["hello", "hey"]);

  function mutation1(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
  }

  function chunkArrayInGroups(arr, size) {
    let arr1 = [];
    for(let i = 0; i < arr.length; i+=size){
        arr1.push(arr.slice(i, i + size))
    }
    return arr1;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)

  /* OBJECT ORIENTED PROGRAMING */

  class Dog {
    constructor(name) {
        this.name = name;
    }
}
  Dog.prototype.numLegs = 4;
  
  let pitbull = new Dog("Snoopy");

  ////////////////////
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};



let duck = Object.create(Animal.prototype); 
let CaneCorso = Object.create(Animal.prototype); 

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

class Dog {
    constructor() { }
}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

////////////////

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let straus = new Bird();
let boxer = new Dog();

/////////////////////////

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){console.log('Woof!');};

let mastif = new Dog();

////////////

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() { 
  return 'Alas, this is a flightless bird.';
  };

let penguin = new Penguin();
console.log(penguin.fly());

/////////////////////
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj){
    obj.glide = function(){
      console.log('Gliding, yuuhuu!')
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);

  ////////////////////

  function Bird() {
    let weight = 15;
  
    this.getWeight = function(){
      return weight;
    }
  }

  /**The immediatly invoked function expression life - IIFE*/

  (function () {
    console.log("A cozy nest is ready");
  })();

  //Use an IIFE to create a module

  let funModule = (function() {
    return{
    isCuteMixin : function(obj) {
      obj.cute = function(){
      return true;
    };
  },
   singMixin: function(obj){
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
   }
  }
  })();
  