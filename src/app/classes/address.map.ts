export class AddressMap {

  public lat: number;
  public lng: number;
  public address: string;

  constructor(opts: any) {
    Object.keys(opts).forEach((key) => {
      this[key] = opts[key];
    });
  }
}
