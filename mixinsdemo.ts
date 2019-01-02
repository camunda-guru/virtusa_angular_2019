// Disposable Mixin
class Voice {

    talk():string {
        return "invoke caller";
    }

}

// Activatable Mixin
class SMS {

    text():string {
        return "send Text";
    }
}

class Phone implements Voice, SMS {

    talk():string
    {
         return "Phone voice"
    }
    text():string
    {
        return "Phone sms"
    }
}
applyMixins(Phone, [Voice, SMS]);

let phone= new Phone();
console.log(phone.talk());

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}