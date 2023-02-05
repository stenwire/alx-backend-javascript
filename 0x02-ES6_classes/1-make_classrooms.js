import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const result = [JSON.stringify(room1), JSON.stringify(room2), JSON.stringify(room3)];
  return result;
}
