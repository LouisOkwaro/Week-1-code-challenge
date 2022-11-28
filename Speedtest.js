//Speeds lower than the limit 70, it should print “Ok”.
//Speeds higher than the limit 70,points are calculated.
//If points are below, they are returned otherwise, license is suspended.

function speedDetector(speed) {
    let points = (speed - 70) / 5; // Calculation of number of points with every 5 units above limit same as a point.
    if (speed <= 70) {
        console.log("Ok");
    } else if (points > 12) {
        console.log("License suspended"); //License suspended is the output if the driver surpasses 12 points
    } else {
        console.log(`Points: ${points}`);
    }
}

speedDetector(130)
