import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const class19 = new ClassRoom(19);
  const class20 = new ClassRoom(20);
  const class34 = new ClassRoom(34);
  return [class19, class20, class34];
}
