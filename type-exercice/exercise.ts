let bankAccount: {
    money: number
    , deposit: (all:number)=> void
} = {
    money: = 2000,
    deposit(value:number) {
        this.money += value;
    }
};

let myself: {
    name: string
    , bankAccount: any
    , hobbies: string[]
} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

