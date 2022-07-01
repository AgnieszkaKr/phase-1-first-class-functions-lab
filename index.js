// Code your solution in this file!
const returnFirstTwoDrivers  = (arr) => {
    return [arr[0], arr[1]]
}
const returnLastTwoDrivers = (arr)=>{
    return [arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers(arr), returnLastTwoDrivers(arr)]


function createFareMultiplier(int){
    return function(int) { return int*int}
}

const fareDoubler = function() {
    let b = createFareMultiplier(int)*2
    return b
}

const fareTripler = () =>{
    let a = createFareMultiplier(int) *3
    return a
}
const selectDiffrentDrivers = (arrayOfDrivers, aaa) => {

}
