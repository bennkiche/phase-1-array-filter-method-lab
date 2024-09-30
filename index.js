
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


const drivers = ['Alice', 'Bob', 'Charlie', 'alice'];
const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' }
];

console.log(findMatching(drivers, 'alice')); 
console.log(fuzzyMatch(drivers, 'Al'));
console.log(matchName(driverObjects, 'Alice')); 
