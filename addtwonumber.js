exports.addTwoNumber = function(a){
    //a dan b harus integer
    let syarat = 0;
    for(var i=1; i<=a; i++){
        if(a%i==0){
            syarat++;
        }
    }
    if(syarat <= 2){
        return "prima";
    }
    else{
        return "bukan prima";
    }
};