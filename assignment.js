// assignment-1
function feetToMile(feet) {
  const feetValue = parseFloat(feet);
  if (feetValue < 0) {
    return "feet must be positive";
  } else {
    const factor = 1 / 5280;
    return feetValue * factor;
  }
}

// assignment-2
function woodCalculator(chair, table, cot) {
  if (
    !Number.isInteger(chair + table + cot) &&
    chair < 0 &&
    table < 0 &&
    cot < 0
  ) {
    return "no decimal and negative input for any value is allowed.";
  } else {
    const woodForChair = parseInt(chair) * 1;
    const woodForTable = parseInt(table) * 3;
    const woodForCot = parseInt(cot) * 5;
    let totalWoodAmount = woodForChair + woodForTable + woodForCot;
    return totalWoodAmount;
  }
}

// assignment-3
function brickCalculator(noOfFloor) {
  let noOfFloors = parseInt(noOfFloor);
  if (Number.isInteger(noOfFloors) && noOfFloors > 0) {
    let remainingFloors = 0;
    let totalFeet = 0;
    switch (true) {
      case noOfFloors <= 10:
        totalFeet = noOfFloors * 15;
        break;
      case noOfFloors > 10 && noOfFloors <= 20:
        remainingFloors = noOfFloors - 10;
        totalFeet = remainingFloors * 12 + 10 * 15;
        break;
      case noOfFloors > 20:
        remainingFloors = noOfFloors - 20;
        totalFeet = remainingFloors * 10 + 10 * 15 + 12 * 10;
        break;
      default:
        totalFeet;
    }
    return totalFeet * 1000;
  } else {
    return "only positive integer allowed";
  }
}

// assignment-4
function tinyFriend(arrayOfFriendsName) {
  let nameArr = [...arrayOfFriendsName];
  let tiny = "";
  for (let i = 0; i < nameArr.length; i++) {
    if (i === 0) {
      tiny = nameArr[0];
    } else {
      if (tiny.length < nameArr[i].length) {
        tiny = tiny;
      } else {
        tiny = nameArr[i];
      }
    }
  }
  return tiny;
}
console.log(tinyFriend(["jannat", "tuhin", "tusher"]));
