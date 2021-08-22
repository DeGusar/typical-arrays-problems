
exports.min = function min(array) {
    
 return (typeof array !== 'undefined' && array.length !==0) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (typeof array !== 'undefined' && array.length !==0) ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length !== 0) {
        let result = array.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
        return result / array.length;
    } else return 0;
}
