var progressbar = $('#progressbar'),
max = progressbar.attr('max'),
value = progressbar.val(),
time = (1000/max)*5;

var loading = function() {
    value += 1;
    addValue = progressbar.val(value);
    $('.progress-value').html(value + '%');
    if (value == 80) {
        clearInterval(animate);
    }
}

var animate = setInterval(function() {
    loading();
}, time);