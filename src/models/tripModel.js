export default class Trip {
  constructor(name, description, startDate, finishDate, stops = []) {
    this.id = Date.now();
    this.title = name;
    this.description = description;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.stops = stops;
  }
}
