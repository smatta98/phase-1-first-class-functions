function receivesAFunction(param1,param2){
    return param1(param2);
}

receivesAFunction(param1,function(param2){return 'My first callback function'});

function returnsANamedFunction(){
    let something = function returnFunc(){

    }
    return something

}

function returnsAnAnonymousFunction(){
    return (function(){})
    
}

