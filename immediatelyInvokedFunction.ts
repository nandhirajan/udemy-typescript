/**
 * NOTE: Also called as Anyonymous function
 */

let names: string[] = ['Jordan', 'Tiffany', 'Kristine'];
let counter: number = 0;

(function () {
    for (let name in names) {
        counter++;
    }
})();

console.log(counter);