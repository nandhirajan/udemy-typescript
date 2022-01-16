//Number
let salary: number = 10000;

//String
let userName: string = "Nandhirajan";

//Boolean
let paidAccount: boolean = true;

//Array
let weekdays: number[] = [1, 2, 3, 4, 5, 6, 7];

//Tuple
let userDetails: [string, number, boolean];
userDetails = ["Nandhirajan", 10000, true];

//Enum
enum WeekDays { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
let approvalDay: WeekDays = WeekDays.Sunday;

//Any
let user: any[] = ["Nandhirajan", 10000, true];

//Void
function welcome(msg: string): void {
    console.log("Greetings");
}