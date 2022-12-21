const task = false;
const task2 = true;

export default function taskBlock (trueOrFalse) {
  if (trueOrFalse) {
    return [task, task2];
  }

  return [task, task2];
}
