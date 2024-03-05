export class Species{
  id: string;
  name: string;
  classificationYear: number;


  constructor(id: string, name: string, classificationYear: number) {
    this.id = id;
    this.name = name;
    this.classificationYear = classificationYear;
  }
}
