
//Calculating the are of the triangles

// First Case

const triangleOneBase = 10;
const triangleOneHeight = 13;
const triangleOneArea = ( (triangleOneBase * triangleOneHeight) / 2)
//console.log(triangleOneArea);

const triangleTwoBase = 16.5;
const triangleTwoHeight = 20.3;
const triangleTwoArea = ( (triangleTwoBase * triangleTwoHeight) / 2);
//console.log(triangleTwoArea);

if (triangleOneArea > triangleTwoArea) {
    console.log('${triangleOneArea} is bigger than ${triangleTwoArea}');
} else if (triangleTwoArea > triangleOneArea) {
    console.log("The second triangle is bigger!")
} else {
    console.log("They are equal in size!")
}

// Second case

const triangleThreeBase = 16.5;
const triangleThreeHeight = 20.3;
const triangleThreeArea = ( (triangleThreeBase * triangleThreeHeight) / 2);
//console.log(triangleThreeArea);

const triangleFourBase = 20.3;
const triangleFourHeight = 16.5;
const triangleFourArea = ( (triangleFourBase * triangleFourHeight) / 2);
//console.log(triangleFourArea);

if (triangleThreeArea > triangleFourArea) {
    console.log('${triangleThreeArea} is bigger than ${triangleFourArea}');
} else if (triangleFourArea > triangleThreeArea) {
    console.log("The second triangle is bigger!")
} else {
    console.log("They are equal in size!")
}

const triangleFiveBase = 7.8;
const triangleFiveHeight = 5.6;
const triangleFiveArea = ( (triangleFiveBase * triangleFiveHeight) / 2);
//console.log(triangleFiveArea);

const triangleSixBase = 9.3;
const triangleSixHeight = 12.4;
const triangleSixArea = ( (triangleSixBase * triangleSixHeight) / 2);
//console.log(triangleSixArea);


if (triangleFiveArea > triangleSixArea) {
    console.log('${triangleFiveArea} is bigger than ${triangleSixArea}');
} else if (triangleSixArea > triangleFiveArea) {
    console.log("The second triangle is bigger!")
} else {
    console.log("They are equal in size!")
}


// The question:

// We use parentheses to let JS know which order we want things to be
//calculated. If we don't specify with parentheses it will calculate it wrong.
