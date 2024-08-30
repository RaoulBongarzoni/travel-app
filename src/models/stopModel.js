export default class Stop {
  constructor(
    id,
    title,
    description,
    date,
    timeStart,
    timeEnd,
    imgs = [],
    notes,
    rate,
    food,
    curiosities,
    position = [lat, lon]
  ) {
    this.id = Date.now();

    this.title = title;
    this.description = description;
    this.date = date;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.imgs = imgs;
    this.notes = notes;
    this.rate = rate;
    this.food = food;
    this.curiosities = curiosities;
    this.position = position;
  }
}
