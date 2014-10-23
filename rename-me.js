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

        //var pattern = /^[1-9]\d{2}-\d{3}-\d{4}$/;
        ////var input = "407-695-0100";
        //var matching = new RegExp(pattern);
        //var result = input.search(matching);
        //if(result<0){
        //    return false;
        //}
        //else{
        //    return true;
        //}
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



        //var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        ////var input = "407-695-0100";
        //var matching = new RegExp(pattern);
        //var result = input.search(matching);
        //if(result<0){
        //    return false;
        //}
        //else{
        //    return true;
        //}
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

        //var pattern = /^(http(s?):\/\/){1}\S+/;
        ////var input = "407-695-0100";
        //var matching = new RegExp(pattern);
        //var result = input.search(matching);
        //if(result<0){
        //    return false;
        //}
        //else{
        //    return true;
        //}
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
