let person = {
    "name" : "Krunalkumar Shah",
    "nationality" : "India",
    "age" : 27,
    "profession" : "Mentor"
}

function traverseObject(obj){
    //following loop will print the key value pair
    for(let key in obj){
        console.log(key +":"+obj[key])
    }
}

traverseObject(person);