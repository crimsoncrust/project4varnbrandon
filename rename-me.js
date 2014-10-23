//sdi project 4
//created by brandon c varn
//


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