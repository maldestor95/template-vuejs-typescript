import { SCORE } from './score';

/**
 *
 */
export default class PLAYER {
    private _name: string;

    score: SCORE;

    constructor(name?: string) {
        this._name = name || 'noName';
        this.score = new SCORE();
    }

    public set name(v : string) {
        this._name = v;
    }

    public get name() : string {
        return this._name;
    }
}
