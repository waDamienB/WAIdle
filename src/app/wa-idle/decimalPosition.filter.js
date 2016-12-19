export function DecimalPosition() {
    return function (input) {
        input = input || 0;
        let out = input;
        if (input !== "" && !isNaN(input)) {
            let inputLength = input.toString().length;
            if (inputLength >= 4 && inputLength <= 6) {
                out = input / 1000;
                return out.toFixed(2) + "K";
            } else if (inputLength >= 7 && inputLength <= 9) {
                out = input / 1000000;
                return out.toFixed(2) + "M";
            } else if (inputLength >= 10 && inputLength <= 12) {
                out = input / 1000000000;
                return out.toFixed(2) + "B";
            } else {
                return out;
            }
        }
        return out;
    };
}