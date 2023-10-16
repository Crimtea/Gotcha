// JavaScript Document

function notMath(event) { // 只允许输入整数或者小数
    var input = event.target.value;
    var regex = /[^0-9.]/g;
    if (regex.test(input)) {
        event.target.value = input.replace(regex, "");
    }
    if (input.includes('.') && (input.split('.').length - 1) > 1) {
        var lastIndex = input.lastIndexOf('.');
        var filteredInput = input.substring(0, lastIndex) + input.substring(lastIndex + 1);
        event.target.value = filteredInput;
    }
}
