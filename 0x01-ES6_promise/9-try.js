export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const divident = mathFunction();
    queue.push(divident, 'Guardrail was processed');
  } catch (err) {
    queue.push(`Error: ${err.message}`, 'Guardrail was processed');
  }
  return queue;
}
