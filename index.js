// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。

// TODO write your code here...
var name = 'hello';
name = name.toUpperCase();
console.log(name);


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。

//TODO write your code here...
var sentence = 'good afternoon, mr mike.';
var array = sentence.toLowerCase().split(" ")
for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length)
}
var string = array.join(" ")
console.log(string);



// 完成下面程序，将money变量中的金额提取出来，输出：20。

//TODO write your code here...
var money = '￥20';
console.log(money.substring(1,money.length));
