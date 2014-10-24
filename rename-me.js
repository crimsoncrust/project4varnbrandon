//Brandon C Varn
//1014
//I have decided to drop this program and go back to web development.  
//The last two days doing this was extremely difficult.  Time consuming and honestly difficult.
//I did however like how the functions needed were listed.  It made doing it a lot easier as I had a solid idea as to what you wanted line by line.
//I still did not have enough time to do this right and do the flow charts.  I am going to get them all done tonight.
//var global

var JSLibrary = {
    patternPhone : function(input){   //passing one parameter
        var chunk = input.split('-');

        if(chunk.length != 3){  //if length  is not equal 3
            return false;       // then return false
        }else{
            var first = chunk[0];   //put a variable  1st, 2nd, and 3rd number
            var second = chunk[1];
            var third = chunk[2];
            if(first.length < 1 || first.length != 3 || isNaN(first)){  //check the length
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
        var chunk = input.split('@');  //Theck that are @ Exists
        if(chunk.length < 2){  
            return false;
        }
        var chunk1 = chunk[0];
        var chunk2 = chunk[1];
        if(!chunk2.contains('.')){  //check are . exists or not if not return false
            return false;
        }else{
            var chunks = chunk2.split('.'); //else . found
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
        var first = input.split('//'); //  Input //
        if(first.length < 2){ //check length 
            return false;
        }else{

            if(first[0].contains('s') && first[0] != 'https:'){ //if  'https:' not found return false
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
        var splitStringArray = input.split(' ');  //split Every input documentation 
        var result = '';
        splitStringArray.forEach(function(entity){
            result += entity.charAt(0).toUpperCase() + entity.slice(1).toLowerCase() + ' '; //Ist characte convert uppercase and next character is lower case.
        });
        return result;
    },
    replaceFunction: function (str, separator, replaceWith) {  //3 parameter are passed this function
        var regex = new RegExp(separator, "g");
        return str.replace(regex,replaceWith);
    },
    decimalFormat:function(number, decimalplace){  //2 parameter are passed
        return parseFloat(number).toFixed(decimalplace);
    },
    Function:function(firstNumber, secondNumber, thirdNumber){ //this function are passed 3 parameter
        var result = false;            //say, result false
        firstNumber = parseFloat(firstNumber); //parse Input number
        secondNumber = parseFloat(secondNumber);
        thirdNumber = parseFloat(thirdNumber);
        if(firstNumber < secondNumber){      //Compare ist and 2nd number
            var percentage = (firstNumber/secondNumber)*100; //cal percentage
            if(percentage == thirdNumber){   //If percentage equals 3 rd number
                result = true;   //return true
            }
        }
        return result;
    },
    dateDiff:function(firstDate, secondDate, diffType){
        var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;   //convert week, day,minutes
        var date1 = new Date(firstDate); //first date put date1
        var date2 = new Date(secondDate); 
        var timediff = date2 - date1; //time different between two given time.
        if (isNaN(timediff)) return NaN;  // Nan=Not a number
        if(diffType.toLowerCase() == 'hours'){  //hours converted to lower case
            return timediff / hour;
        }else if(diffType.toLowerCase() == 'days'){
            return timediff / day;
        }else{
            return 'Undefined';  //return Undefine
        }

    },
    stringToNumber:function(input){
        //var input = 42;
        if(isNaN(input)){
           var result = parseInt(input, 10); //Parse the number
            if(isNaN(result)){
                input = input.replace(input.charAt(0), ''); //Replace Character(0)
                result = parseInt(input,10);

            }
            return result;

        }else{
            return 'Invalid input';
        }
    },
    smallestNumber:function(arrayInput, givenNumber){ //Input 2 parameter
        var newInputArray = arrayInput;
        var result = 0;
        for(var p=0,swapping; p<newInputArray.length-1; p++) //for loop
        {
            if(newInputArray[p]>newInputArray[p+1]){  //If Test check
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
    totalValue:function(inputArray){  //input array
        var total = 0;
        var j = 0;
        var newInputArray =[];
        for(var i=0;i<inputArray.length;i++)   //for loop
        {
            if(typeof inputArray[i] == 'number')  //Check if array is a number
            {
                //newInputArray[j]=inputArray[i];
                //j++;
                total=total+inputArray[i];  //Sum
            }
        }

        return total;
    },
    sorting:function(inputArray, keyValue){  //input 2 parameter

        //var inputArray = [{a:2},{b:3},{a:1},{a:4}];
        var lookup = [];   
        var other = [];
        for (var i = 0, len = inputArray.length; i < len; i++) {  //for loop
            var find = inputArray[i][keyValue];
            if (typeof find != 'undefined'){
                lookup.push(inputArray[i]);
                //lookup[inputArray[i].a] = inputArray[i];
            }else{
                other.push(inputArray[i]);
            }

        }
        //console.log(lookup);
        var sortedArray = lookup.sort(dynamicSort(keyValue)); //Sort the array
        return sortedArray.concat(other);  //return sort
    }


};

function dynamicSort(property) {   
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);   //
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}