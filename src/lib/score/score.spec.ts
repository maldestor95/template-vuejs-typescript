import { assert } from "chai";
import { describe, it } from "mocha";
import { SCORE } from "./score";

describe("Score", () => {
  let score: SCORE;
  beforeEach(() => {
    score = new SCORE();
    score.addround(50);
    score.addround(50);
    score.addround(100);
  });
  it("getCumul", () => {
    assert(score.getCumul() === 200, "fail getting cumul");
    assert(score.getCumul(2) === 100, "fail getting partial cumul");
    assert(score.getCumul(4) === null, "fail getting partial cumul");
    assert(score.getCumul(3) === 200, "fail getting partial cumul");
    assert(score.getCumul(1) === 50, "fail getting partial cumul");
  });
  it("getRound", () => {
    assert(score.getround(1) === 50, "fail getround(1) ");
    assert(score.getround(3) === 100, "fail getround(3)");
    assert(score.getround(100) === null, 'fail getround("out of bound")');
  });
  it("deleteRound", () => {
    assert(score.deleteRound(10) == false, "fail deleteround(1) ");
    assert(score.getCumul() === 200, "fail getting cumul");
    assert(score.deleteRound(1), "fail deleteroung(1) ");
    assert(score.getCumul() === 150, "fail getting cumul");
  });
  it("numberOfRound", () => {
    assert(score.getCumul() === 200, "fail checking cumul in numberOfRound");
    assert(score.numberOfRound == 3, "fail numberOfRound");
  });
  it("reset", () => {
    assert(score.reset());
    assert(score.getCumul() == 0);
    assert(score.numberOfRound == 0);
  });
  it("edit Round", () => {
    let test = score.editRound(1, 5);
    assert(test === true);
    assert(score.getround(1) == 5);
    score.editRound(10, 0);
    test = score.editRound(100, 5);
    assert(test === false, "fail editing outofbound value");
  });
});
