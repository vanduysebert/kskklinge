export class Wedstrijd {
  constructor(
    public wedstrijd_id: number,
    public thuisSpelend: boolean,
    public tegenstander: string,
    public datum: string,
    public verslag: string,
    public doelpuntenKSK: number,
    public doelpuntenTegenstander: number,
    public ploeg_id: number,
    public ploegNaam: string
    ){}
}
