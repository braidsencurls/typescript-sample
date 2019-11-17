//Generics
class CustomArray<T>
{

    private myArray:T[] = [];

    getItems():T[]
    {
        return this.myArray;
    }

    addItems(item:T)
    {
         this.myArray.push(item);
         console.log(item + " has been added!");
    }

    removeItems(item:T)
    {
        let index:number = this.myArray.indexOf(item);
        if(index != -1)
        {
            this.myArray.splice(index, 1)
        }
    }

}

let customArray = new CustomArray<String>();
console.log("--- Adding Items ---")
customArray.addItems("Christine");
customArray.addItems("Grace");

console.log("--- Before Removing ---")
customArray.getItems();
console.log(customArray.getItems());

console.log("--- After Removing ---");
customArray.removeItems("Christine");
console.log(customArray.getItems());