const arr = [1,2,5,7,10,12,13];

const newArray = arr.map(function(item, index) {
    return item + index;
});
console.log(newArray);

const sum = arr.reduce(function (total, next) {
    return total + next;
})
console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
})
console.log(filter);

const find = arr.find(function(item) {
    return item === 7;
})
console.log(find);