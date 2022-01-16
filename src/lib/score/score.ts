/**
 * class SCORE to be used for a single player
 */
export class SCORE {
  private score: number[];

  constructor() {
    this.score = [0];
  }

  public addround(round: number): void {
    this.score.push(round);
  }

  public getround(roundid: number): number | null {
    if (roundid <= this.score.length) {
      return this.score[roundid];
    }
    return null;
  }

  public getCumul(roundid?: number): number | null {
    if (roundid === undefined) {
      return this.score.reduce(sumReducer);
    }
    if (roundid < this.score.length) {
      const subScore = this.score.slice(0, roundid + 1);
      return subScore.reduce(sumReducer);
    }
    return null;
  }

  public deleteRound(roundId: number): boolean {
    if (roundId <= this.score.length) {
      this.score.splice(roundId, 1);
      return true;
    }
    return false;
  }

  public get numberOfRound(): number {
    return this.score.length - 1;
  }

  public editRound(roundId: number, score: number): boolean {
    if (roundId <= this.score.length) {
      this.score[roundId] = score;
      return true;
    }
    return false;
  }

  public reset(): boolean {
    this.score = [0];
    return true;
  }
}
function sumReducer(previous: number, next: number): number {
  return previous + next;
}
