
exports.min = function min (array) {
    if (!array) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        let numberMin = array[0];
        array.forEach(function(item) {
            if (item < numberMin) {
                numberMin = item;
            }
        });
        return numberMin;
    }
}

exports.max = function max (array) {
    if (!array) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        let numberMax = array[0];
        array.forEach(function(item) {
            if (item > numberMax) {
                numberMax = item;
            }
        });
        return numberMax;
    }
}

exports.avg = function avg (array) {
    if (!array) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        array.forEach(function(item) {
            sum += item;
        });
        let number = sum / array.length;
        return number;
    }
}

