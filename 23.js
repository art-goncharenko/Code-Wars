// Bob needs a fast way to calculate the volume of a cuboid
// with three values: the length, width and height of the cuboid.
//     Write a function to help Bob with this calculation.
//


function getVolumeOfCuboid(length, width, height) {
    return length * width * height
}


function getVolumeOfCuboid (length, width, height) {
    return length * width * height
}

// console.log(getVolumeOfCuboid(1,2,2))

//make the same but with class and constructor

function getVolume() {
    return this.length * this.width * this.height
}
