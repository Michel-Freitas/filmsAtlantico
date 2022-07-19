/**
 * Function for the purpose of returning a random number between two values.
 * Min and max values are also included.
 * @param min 
 * @param max 
 * @returns generated random value
 */
export function randomNumberBetween(min: number, max: number): number {
    return Math.floor(max * Math.random() + min);
}