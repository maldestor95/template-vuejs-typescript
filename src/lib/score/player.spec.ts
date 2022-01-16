import { assert } from "chai";
import PLAYER from "./player";

describe("Class Player", () => {
  const player1 = new PLAYER();
  beforeEach(() => {
    player1.score.addround(50);
  });
  it("check player score", () => {
    assert(player1.score.numberOfRound == 1);
    assert(player1.score.getCumul() == 50);
    player1.name = "toto";
    assert(player1.name == "toto");
  });
});
