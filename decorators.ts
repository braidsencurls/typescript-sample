/*Decorators. Types:
    (1) class decorator (inject codes inside the constructor)
    (2)method decorator
    (3)property decorator (codes can be inserted in setter and getter)*/

//Enable experimentalDecorators in tsconfig.json
function log(configuration?:any) {
    return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value;
    //For methods who accepts parameters
    descriptor.value = function (...args: any[]) {
        console.log("Logging Started")
        //For method that returns a value
        if(configuration != undefined)
        {
            console.log(configuration.device);
            console.log(configuration.author);
            console.log(configuration.time)
        }
        let result = originalMethod.apply(this, args);
        console.log("Logging Ended");
        return result;
    }
    //Whatever is returned, that's the one executed
    return descriptor;
    }
}

class Banking
{
    private currentBalance:number = 0;

    constructor(currentBalance:number)
    {
        this.currentBalance = currentBalance;
    }

    @log({
        device:"ATM",
        author:"Christine",
        time:new Date()
    })
    public doWithdraw(amount:number):number
    {
        this.currentBalance = this.currentBalance - amount;
        return amount;
    }

    @log()
    public doDeposit(amount:number)
    {
        this.currentBalance = this.currentBalance + amount;
        return this.currentBalance;
    }

    @log()
    public getCurrentBalance():number
    {
        return this.currentBalance;
    }

    //method decorator
    @log()
    public displayCurrentBalance():void
    {
        console.log(this.currentBalance);
    }

}

let banking = new Banking(1000);
banking.displayCurrentBalance();
console.log(banking.getCurrentBalance());
console.log(banking.doWithdraw(500));
console.log(banking.doDeposit(100));