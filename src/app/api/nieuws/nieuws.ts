export class Nieuws {
  constructor(
    public nieuws_id: number,
    public titel: string,
    public inhoud: string,
    public datum: string,
    public eventDate: string,
    public newsType: any,
    public kanInschrijven: boolean,
    public geldigheid: number
    ){}
}
