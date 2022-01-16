/**
 * NOTES:
 * Use ? for optional arugments
 * Use = for fallback value assignment
 * Don't use mandatory arguments after the optional arguments
 * use ... operators to consider rest of the arguments as array
 */

// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
// 	console.log(street);
// 	if (streetTwo) {
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 540');
// printAddress('123 Any St', 'Suite 540', 'UT');

function lineupCard(team: string, ...players: string[]) {
    console.log('Team: ' + team);
    for (let player of players) {
        console.log(player);
    }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');
