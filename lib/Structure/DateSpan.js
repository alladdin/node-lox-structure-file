
var DateSpan = function (start, end) {
    var start_array = start.split('-');
    this.start_month = start_array[0];
    this.start_day = start_array[1];
    var end_array = end.split('-');
    this.end_month = end_array[0];
    this.end_day = end_array[1];
};

module.exports = DateSpan;
