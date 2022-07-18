const oneNineteen = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const twentyNinety = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
module.exports = function toReadable (number) {
    if (number < 20) return oneNineteen[number];
    const nums = number%10;
    if (number < 100) return twentyNinety[~~(number/10)-2] + (nums? " " + oneNineteen[nums]: "");
    if (number < 1000) return oneNineteen[~~(number/100)] + " hundred" + (number%100 == 0? "": " " + toReadable(number%100));
}

// split делит строку и если number меньше 20 - возвращается элемент массива oneNineteen по порядку.
// if number > 19 and <100 - возвращается следующее... Например 67. 67/10 = 6,7-2=4.7 ~~ 4. 
//из const twentyNinety приходит sixty. + пробел + седьмой элемент массива oneNineteen (от нуля отсчет).

//
