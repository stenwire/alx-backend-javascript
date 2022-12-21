export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const arg of args) {
    total += 1;
  }
  return total;
}
