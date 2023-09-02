const hq = 42;

function distanceFromHqInBlocks(someValue) {
    const diff = someValue -hq;
    return Math.abs(diff);

  }

  function distanceFromHqInFeet(someValue) {
    const feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
  }

  function distanceTravelledInFeet(start, destination) {
    const fStart = start * 264;
    const fDest = destination * 264;
    const diff = fStart - fDest;
    return Math.abs(diff);

  }

  function calculatesFarePrice(start, destination) {
    const diffFeet = distanceTravelledInFeet(start, destination);
    if (diffFeet < 400) {
      return 0;
    }
    else if (diffFeet > 400 && diffFeet < 2000 ) {
      const charge = (diffFeet - 400) * .02;
      return charge;
    }
    else if (diffFeet > 2000 && diffFeet < 2500) {
      return 25;
    }
    else if ( diffFeet > 2500) {
      return 'cannot travel that far';
    }


  }
