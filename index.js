function distanceFromHqInBlocks(start) {
    let distance;
    if (start > 42) {
      distance = start - 42;
    } else {
      distance = 42 - start;
    }
    return distance;
  }
function distanceFromHqInFeet(start) {
    let distance;
    if (start > 42) {
      distance = (start - 42) * 264;
    } else {
      distance = (42 - start) * 264;
    }
    return distance;
  }
  function distanceTravelledInFeet(start, destination) {
    let distance;
    if (start > destination) {
      distance = (start - destination) * 264;
    } else {
      distance = (destination - start) * 264;
    }
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }
  
  