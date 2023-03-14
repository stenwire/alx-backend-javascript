export default function createInt8TypedArray(length, position, value) {
  if (position > length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer, 0, length);
  dataview.setInt8(position, value);
  return dataview;
}
