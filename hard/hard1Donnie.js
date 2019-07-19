let coordinatesArray;
const canvasSize = 1000;
let currentIndex = 0;
const circleRadius = 10;
function setup() {
    createCanvas(canvasSize, canvasSize);
    background(255);
    setGraphCoordinates(canvasSize);
}

/*
This function is debugged. 
It sets the coordiante plane first quadrant coordinates for the circles
that serve as points for a parabola y = (x^2/30) 
In English: 1/30 multiplied by x squared. 

Parameter: canvasSize, a number
returns: coordinatesArray, a 2D array containing (x, y coordinates)

*/
function setGraphCoordinates(canvasSize) {
    let xCoordinate = 0;
    const decimalIncrement = 0.1;
    let coordinatesArray = []
    while(yCoordinate < canvasSize) {
        let orderedPair = generateOrderedPair(xCoordinate);
        coordinatesArray.push(orderedPair);
        xCoordinate +=decimalIncrement;
    }
    return coordinatesArray
}

/*
This function is debugged. 
It creates the x, y coordinates for the parabola.

Parameter: xCoordinate, a number
Returns: orderedPair, a array 

*/
function generateOrderedPair(xCoordinate) {
    let yCoordinate = xCoordinate*xCoordinate;
    let orderedPair = [xCoordinate, yCoordinate];
    orderedPair = TransformCoordinates(orderedPair);
    return orderedPair
}

/*
This function is debugged.
It takes the pixel coordinates and transforms them into
coordinate plane first quadrant coordinates

Parameter: orderedPair, an Array containing pixel coordinates
Return: orderedPair, an Array containing coordinate plane first quadrant coordinates
*/

function TransformCoordinates(orderedPair) {
    let xCoordinate = orderedPair[0]
    orderedPair[0] = xCoordinate*30
    // makes parabola look like a quadrant 1 parabola
    let yCoordinate = orderedPair[1];
    orderedPair[1] = canvasSize - yCoordinate;
    return orderedPair;

}


/*

This function is not debugged. 

What do you do?

*/

function draw() {
    ellipseMode(RADIUS)
    fill(255, 0, 0);
    if (currentIndex < coordinatesArray.length) {
        let orderedPair = coordinatesArray.slice(currentIndex, currentIndex+1)
        let xCoordinate = orderedPair[0];
        let yCoordinate = orderedPair[1];
        ellipse(xCoordinate, yCoordinate, circleRadius, circleRadius);
        currentIndex += 1;
    }
}