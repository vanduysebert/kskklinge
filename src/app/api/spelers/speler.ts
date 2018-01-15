export class Speler {
  constructor(
    public speler_id: number,
    public voornaam: string,
    public naam: string,
    public geboortedatum: string,
    public email: string,
    public telefoonnummer: string,
    public adres: string,
    public ingeschreven: boolean,
    public ploeg_id: number,
    public fotoUrl: string,
    public positie: string,
    public doelpunten: number
    ){}
}
