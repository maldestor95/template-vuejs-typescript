import PLAYER from "./player";

export default class GAME {
  private _players: PLAYER[];

  constructor() {
    this._players = [];
  }

  addPlayer(name?: string): void {
    const newPlayer = new PLAYER(name);
    this._players.push(newPlayer);
  }

  deletePlayer(nameOrId: string | number): boolean | undefined {
    if (typeof nameOrId === "string") {
      if (!this.playersNames.includes(nameOrId)) return false;
      this._players = this._players.filter((pl) => pl.name != nameOrId);
      return true;
    }
    if (typeof nameOrId === "number") {
      if (nameOrId > this.numberOfPlayer || nameOrId <= 0) return false;
      this._players.splice(nameOrId - 1, 1);
      return true;
    }
  }

  public get numberOfPlayer(): number {
    return this._players.length;
  }

  public get playersNames(): string[] {
    return this._players.map((pl) => pl.name);
  }

  public get numberOfRound(): number {
    if (this._players.length == 0) return 0;
    return this._players[0].score.numberOfRound;
  }

  public getPlayer(nameOrId: string | number): PLAYER {
    switch (typeof nameOrId) {
      case "string":
        return this._players.filter((pl) => pl.name == nameOrId)[0];
        break;
      case "number":
        if (nameOrId > this.numberOfPlayer || nameOrId <= 0) {
          return this._players[0];
        }
        return this._players[nameOrId];
        break;
      default:
        // eslint-disable-next-line no-case-declarations
        const _exhaustiveCheck: never = nameOrId;
        return _exhaustiveCheck;
    }
  }

  addround(roundScores: number[]): boolean {
    // TODO check roundID vs roundnumbers rather than num of players

    if (roundScores.length != this.numberOfPlayer) return false;
    for (let index = 0; index < roundScores.length; index++) {
      this._players[index].score.addround(roundScores[index]);
    }
    return true;
  }

  deleteRound(roundId: number): boolean {
    // TODO check roundID vs roundnumbers rather than num of players
    if (roundId > this.numberOfPlayer || roundId <= 0) return false;

    for (let index = 0; index < this._players.length; index++) {
      this._players[index].score.deleteRound(roundId);
    }
    return true;
  }

  editRound(roundId: number, roundScores: number[]): boolean {
    if (roundScores.length != this.numberOfPlayer) return false;
    if (roundId > this.numberOfPlayer || roundId <= 0) return false;

    for (let index = 0; index < this._players.length; index++) {
      //   this._players[index].score.(roundId);
    }
    return true;
  }
}
