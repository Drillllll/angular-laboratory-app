export class Kingdom {
  id: string;
  name: string;
  taxonomyYear: number;

  constructor(id: string, name: string, taxonomyYear: number) {
    this.name = name;
    this.id = id;
    this.taxonomyYear = taxonomyYear;
  }
}
