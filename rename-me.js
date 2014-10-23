/**
 * Created by belalhossain on 10/20/2014.
 */

var JSLibrary = {
    patternPhone : function(input){
        var chunk = input.split('-');

        if(chunk.length != 3){
            return false;
        }else{
            var first = chunk[0];
            var second = chunk[1];
            var third = chunk[2];
            if(first.length < 1 || first.length != 3 || isNaN(first)){
                return false;
            }else if(second.length < 1 || second.length != 3 || isNaN(second)){
                return false;
            }else if(third.length < 1 || third.length != 4 || isNaN(third)){
                return false;
            }
            return true;
        }

    },
    patternEmail:function(input){
        var chunk = input.split('@');
        if(chunk.length < 2){
            return false;
        }
        var chunk1 = chunk[0];
        var chunk2 = chunk[1];
        if(!chunk2.contains('.')){
            return false;
        }else{
            var chunks = chunk2.split('.');
            if(chunks[0].length < 1){
                return false;
            }
            if(chunks[chunks.length -1].length < 2){
                return false;
            }else{
                return true;
            }
        }


    },
    patternUrl:function(input){
        var first = input.split('//');
        if(first.length < 2){
            return false;
        }else{

            if(first[0].contains('s') && first[0] != 'https:'){
                return false;
            }else if(!first[0].contains('s') && first[0] != 'http:'){
                return false;
            }
        }
        //console.log(first);
        return true;
    },
    titleCase:function(input){
        var splitStringArray = input.split(' ');
        var result = '';
        splitStringArray.forEach(function(entity){
            result += entity.charAt(0).toUpperCase() + entity.slice(1).toLowerCase() + ' ';
        });
        return result;
    },
    replaceFunction: function (str, separator, replaceWith) {
        var regex = new RegExp(separator, "g");
        return str.replace(regex,replaceWith);
    },
    decimalFormat:function(number, decimalplace){
        return parseFloat(number).toFixed(decimalplace);
    },
    fuzzyFunction:function(firstNumber, secondNumber, thirdNumber){
        var result = false;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        thirdNumber = parseFloat(thirdNumber);
        if(firstNumber < secondNumber){
            var percentage = (firstNumber/secondNumber)*100;
            if(percentage == thirdNumber){
                result = true;
            }
        }
        return result;
    },
    dateDiff:function(firstDate, secondDate, diffType){
        var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
        var date1 = new Date(firstDate);
        var date2 = new Date(secondDate);
        var timediff = date2 - date1;
        if (isNaN(timediff)) return NaN;
        if(diffType.toLowerCase() == 'hours'){
            return timediff / hour;
        }else if(diffType.toLowerCase() == 'days'){
            return timediff / day;
        }else{
            return 'Undefined';
        }

    },
    stringToNumber:function(input){
        //var input = 42;
        if(isNaN(input)){
           var result = parseInt(input, 10);
            if(isNaN(result)){
                input = input.replace(input.charAt(0), '');
                result = parseInt(input,10);

            }
            return result;

        }else{
            return 'Invalid input';
        }
    },
    smallestNumber:function(arrayInput, givenNumber){
        var newInputArray = arrayInput;
        var result = 0;
        for(var p=0,swapping; p<newInputArray.length-1; p++)
        {
            if(newInputArray[p]>newInputArray[p+1]){
                swapping=newInputArray[p+1];
                newInputArray[p+1] = newInputArray[p];
                newInputArray[p] = swapping;

            }
        }
        //alert(newInputArray);

        for(var j=0;j<newInputArray.length;j++)
        {
            if(newInputArray[j]>givenNumber)
            {
                var t=newInputArray[j];
                result = t;
                break;
            }
        }

        return result;
    },
    totalValue:function(inputArray){
        var total = 0;
        var j = 0;
        var newInputArray =[];
        for(var i=0;i<inputArray.length;i++)
        {
            if(typeof inputArray[i] == 'number')
            {
                
                total=total+inputArray[i];
            }
        }

        return total;
    },
    sorting:function(inputArray, keyValue){

        //var inputArray = [{a:2},{b:3},{a:1},{a:4}];
        var lookup = [];
        var other = [];
        for (var i = 0, len = inputArray.length; i < len; i++) {
            var find = inputArray[i][keyValue];
            if (typeof find != 'undefined'){
                lookup.push(inputArray[i]);
                //lookup[inputArray[i].a] = inputArray[i];
            }else{
                other.push(inputArray[i]);
            }

        }
        //console.log(lookup);
        var sortedArray = lookup.sort(dynamicSort(keyValue));
        return sortedArray.concat(other);
    }


};

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}