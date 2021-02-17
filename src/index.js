
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }

    return matrix.map(function (element, index) {
        if (index % 2 == 0 || index == 0) {
            return element;
        } else {
            return element.reverse();
        }
    }).flat();
}
