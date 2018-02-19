export class Ploeg {
  constructor(
    public ploeg_id: number,
    public naam: string,
    public leeftijdMax: number,
    public trainer_1: string,
    public trainer_2: string,
    public telTrainer_1: string,
    public telTrainer_2: string,
    public trainingsuur: string,
    public trainingsdagen: string,
    public fotoUrl: string,
    public sponsor_id: number,
    public mailTrainer_1: string,
    public mailTrainer_2: string
    ){}
}
