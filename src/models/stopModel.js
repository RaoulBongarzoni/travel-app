export default class Stop {
  constructor(
    id,
    title,
    description,
    date,
    imgs = [],
    notes,
    rate,
    food,
    curiosities,
    position = [lat, lon]
  ) {
    this.id = Date.now();
  }
}
