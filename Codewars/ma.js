
function getYears(amount, percent, limit) {
  let sum = amount;
  let i = 0;
  const arr = [];

  while (true) {
    arr[i] = (sum += sum * percent / 100);

    if (sum > limit) {
      break;
    }
    i++;
  }

  const length = arr.filter(function(number) {
    return number <= limit;
  }).length;

  return length;
}


function isAlphabet(letters) {
  if (letters.length === 0) {
    return false;
  }

  const newLetter = letters.toLowerCase();

  for (let i = 1; i < newLetter.length; i++) {
    if (newLetter[i].charCodeAt() - newLetter[i - 1].charCodeAt() !== 1) {
      return false;
    }
  }

  return true;
}


function getGuestsCount(guestInput) {
  let count = 0;

  if (!(/^[a-z]/ig.test(guestInput))) {
    count = parseInt(guestInput.match(/\d+/).join(''));
  } else {
    return 'not a number';
  }

  return count;
}


function canTheyBook(adultsCount, childrenCount) {

  if (((adultsCount + childrenCount < 8)
   (adultsCount <= 8 && Object.is(childrenCount, undefined)))
  && (adultsCount >= 1)
  && ((childrenCount - adultsCount <= childrenCount / 2)
   (adultsCount && Object.is(childrenCount, undefined)))) {
    return true;
  }

  return false;
}


function canTheyBook(adultsCount, childrenCount, babiesCount) {
  if (((adultsCount + childrenCount <= 8)
   (adultsCount + childrenCount + babiesCount <= 9 && babiesCount > 1)
   (adultsCount <= 8
  && (Object.is(childrenCount, undefined)
  && Object.is(babiesCount, undefined))))
  && (adultsCount >= 1)
  && (((childrenCount + babiesCount) - adultsCount
  <= (childrenCount + babiesCount) / 2
  && adultsCount + childrenCount + babiesCount <= 9)
   (adultsCount && (Object.is(childrenCount, undefined)
  && Object.is(babiesCount, undefined)))
   (childrenCount - adultsCount <= childrenCount / 2
  && Object.is(babiesCount, undefined)))) {
    return true;
  }

  return false;
}

function recommendRoom(adultsCount, childrenCount, babiesCount) {
  if ((adultsCount + childrenCount + babiesCount <= 4)) {
    return 'small room';
  } else if (adultsCount + childrenCount <= 4 && babiesCount >= 0) {
    return 'small room + extra bed';
  } else if ((adultsCount + childrenCount + babiesCount > 4
  && adultsCount + childrenCount + babiesCount < 8)
   (adultsCount + childrenCount <= 8 && Object.is(babiesCount, undefined))
   (adultsCount <= 8
  && Object.is(childrenCount, undefined)
  && Object.is(babiesCount, undefined))) {
    return 'big room';
  } else if (((adultsCount + childrenCount >= 4
  && adultsCount + childrenCount <= 8) || (adultsCount >= 4
  && adultsCount <= 8)) && babiesCount >= 0) {
    return 'big room + extra bed';
  }
}


function getTriathlonDistance(distance) {
  if (distance === 0) {
    return 'Starting Line... Good Luck!';
  } else if (distance > 0 && distance < 3.86) {
    const remainder = Math.round((226.31 - distance) * 100) / 100;

    return { swim: `${remainder} to go!` };
  } else if (distance >= 3.86 && distance < 184.11) {
    const remainder = Math.round((226.31 - distance) * 100) / 100;

    return { bike: `${remainder} to go!` };
  } else if (distance >= 184.11 && distance < 226.31) {
    const remainder = Math.round((226.31 - distance) * 100) / 100;

    return { run: `${remainder} to go!` };
  } else if (distance >= 226.31) {
    return 'You\'re done! Stop running!';
  }
}


function addFullName(user) {
  const values = Object.values(user);

  user.fullName = `${values[0]} ${values[1]}`;
}


function restoreNames(users) {
  
  for (let i = 0; i < users.length; i++) {
    if (!users[i].firstName) {
      users[i].firstName = users[i].fullName.split(' ')[0];
    }
  }
}


function removeFemaleAges(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === 'female') {
      delete people[i].age;
    }
  }
}


function getOutdated(robots, newVersion) {
  const arr = [];

  for (let i = 0; i < robots.length; i++) {
    if (robots[i].coreVersion < newVersion) {
      arr.push(i);
    }
  }

  return arr;
}


function countBoxes(boxes) {
  if (!boxes.length) {
    return {};
  }

  const arr = boxes.split('').sort();

  const valuesMap = new Map();

  arr.forEach(elem => {
    valuesMap.set(elem, valuesMap.has(elem) ? valuesMap.get(elem) + 1 : 1);
  });

  const newarr = [...valuesMap.entries()].sort((a, b) => a[1] - b[1]);

  return Object.fromEntries(newarr);
}


function getRobotSchema(robot) {
  const schema = Object.assign({}, robot);

  for (const key in schema) {
    schema[key] = typeof schema[key];
  }

  return schema;
}


const compareRobots = (robot1, robot2) => {
  const arr1 = Object.entries(robot1);
  const arr2 = Object.entries(robot2);
  const max = Math.max(arr1.length, arr2.length);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 1; i < max; i++) {
    if (arr1[i][1] !== arr2[i][1] || arr1[i][0] !== arr2[i][0]
    || arr1.length !== arr2.length) {
      return false;
    }
  }

  return true;
}


function colorStones(stones) {
  if (stones.length === 0) {
    return 0;
  }

  const arr = stones.split('');
  const newArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    newArr.push(arr[i - 1]);
  }

  return (arr.length - newArr.length) - 1;
}


function findSmallerDigits(arr) {
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] > arr[x]) {
        count++;
      }
    }
    numbers.push(count);
  }

  return numbers;
}


function getProductId(url) {
  const arr = url.match(/p-\d+?-/g);
  const productId = arr[0].replace(/[p-]/g, '');

  return productId;
}


function getLeaders(numbers) {

  const leaders = [];

  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;

    for (let x = i + 1; x < numbers.length; x++) {
      sum += numbers[x];
    }

    if (numbers[i] > sum) {
      leaders.push(numbers[i]);
    }
  }

  return leaders;
}


function getArrayProduct(numbers) {
  const productArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let multiply = 1;
    const deleteNum = numbers.splice(i, 1);

    for (let x = 0; x < numbers.length; x++) {
      multiply *= numbers[x];
    }
    productArray.push(multiply);
    numbers.splice(i, 0, deleteNum);
  }

  return productArray;
}


function getRowWeights(array) {
  if (array.length === 1) {
    return [array[0], 0];
  }

  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arr1.push(array[i]);
    } else {
      arr2.push(array[i]);
    }
  }

  const num1 = arr1.reduce((x, y) => x + y, 0);
  const num2 = arr2.reduce((x, y) => x + y, 0);

  return [num1, num2];
}


function getKiller(suspects, dead) {
  for (const key in suspects) {
    if (dead.every(people => suspects[key].includes(people))) {
      return key;
    }
  }
}


function whoIsOnline(friends) {
  const activity = {};

  for (const key in friends) {
    if ((friends[key].status === 'online'
    && friends[key].lastActivity <= 10)
    && !('online' in activity)) {
      activity.online = [friends[key].username];
    } else if ((friends[key].status === 'online'
    && friends[key].lastActivity <= 10)
    && 'online' in activity) {
      activity.online.push(friends[key].username);
    } else if ((friends[key].status === 'online'
    && friends[key].lastActivity > 10)
    && !('away' in activity)) {
      activity.away = [friends[key].username];
    } else if ((friends[key].status === 'online'
    && friends[key].lastActivity > 10)
    && 'away' in activity) {
      activity.away.push(friends[key].username);
    } else if (friends[key].status === 'offline'
    && !('offline' in activity)) {
      activity.offline = [friends[key].username];
    } else if (friends[key].status === 'offline'
    && ('offline' in activity)) {
      activity.offline.push(friends[key].username);
    }
  }

  return activity;
}


function addNumbers(object) {
  let count = 0;

  for (const key in object) {
    if (Number.isInteger(object[key])) {
      count += object[key];
    }
  }

  return count;
}


function countLettersInString(str) {
  const arr = str.split('');

  const valuesMap = new Map();

  arr.forEach(elem => {
    valuesMap.set(elem, valuesMap.has(elem) ? valuesMap.get(elem) + 1 : 1);
  });
  // Map convert to Objects

  return Object.fromEntries(valuesMap);
}


function sumObjects(...args) {
  const mergeData = data => {
    const result = {};

    data.forEach(numbers => {
      for (const [key, value] of Object.entries(numbers)) {
        if (result[key]) {
          result[key] += value;
        } else {
          result[key] = value;
        }
      }
    });

    return result;
  };

  return mergeData(args);
}


function countMatchingSocks(colors) {
  const map = new Map();

  colors.forEach(elem => {
    map.set(elem, map.has(elem) ? map.get(elem) + 1 : 1);
  });

  const arr = [...map.values()];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / 2);
  }

  return count;
}