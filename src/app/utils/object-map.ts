export class ObjectMap<ObjectClass> {

  private idKey: string;
  private map: { [identifier: string]: ObjectClass };

  constructor(idKey: string) {
    this.idKey = idKey;
    this.map = {};
  }

  add(obj: ObjectClass): void {
    if (obj[this.idKey]) {
      this.map[obj[this.idKey]] = obj;
    }
  }

  addList(objList: Array<ObjectClass>): void {
    for (const obj of objList) {
      this.add(obj)
    }
  }

  remove(idKey: string): void {
    this.map[idKey] = null;
  }

  // TODO: Precisa testar
  getIdDiff(idList: Array<string>) {
    let mapIdList = Object.keys(this.map);
    return idList.filter(id => mapIdList.indexOf(id) < 0)
  }

  get(id: string): ObjectClass {
    return this.map[id];
  }

}