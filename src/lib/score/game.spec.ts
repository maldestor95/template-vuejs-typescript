import { assert } from "chai";
import GAME from "./game";

describe("class Game", () => {
  let game: GAME;
  beforeEach(() => {
    game = new GAME();
    game.addPlayer("player1");
    game.addPlayer("player2");
  });
  it("getters", () => {
    assert(game.numberOfPlayer == 2);
    assert(
      JSON.stringify(game.playersNames) ==
        JSON.stringify(["player1", "player2"])
    );
  });
  it("addPlayer", () => {
    game.addPlayer("player3");
    assert(
      game.numberOfPlayer == 3,
      `expected 3 and got ${game.numberOfPlayer}`
    );
  });
  it("deletePlayers", () => {
    assert(game.deletePlayer("player1"));
    assert(game.numberOfPlayer == 1);
    assert(JSON.stringify(game.playersNames) == '["player2"]');
    assert(game.deletePlayer("unknown") == false);
    assert(game.deletePlayer(50) == false);
    assert(game.deletePlayer(0) == false);
    assert(game.numberOfPlayer == 1);
    assert(game.deletePlayer(1) == true);
    assert(game.numberOfPlayer == 0);
  });
  it("addRound", () => {
    assert(game.addround([5]) === false, "add round failed");
    assert(game.getPlayer("player1").score.getCumul() == 0);
    assert(game.getPlayer(0).score.getCumul() == 0);

    assert(game.addround([5, 10, 20]) === false, "add round failed");
    assert(game.addround([5, 10]) === true, "add round failed");
    assert(game.getPlayer("player1").score.getCumul() == 5);
    assert(game.getPlayer("player2").score.getCumul() == 10);
  });
  it("delete Round", () => {
    assert(game.addround([5, 10]) === true, "add round failed");
    assert(game.addround([10, 10]) === true, "add round failed");
    assert(game.addround([20, 10]) === true, "add round failed");

    assert(game.deleteRound(5) === false, "fail deleting unknown round");
    assert(game.deleteRound(-1) === false, "fail deleting unknown round");
    assert(game.deleteRound(0) === false, "fail deleting unknown round");
    assert(game.numberOfRound == 3, "fail deleting unknown round");

    assert(game.deleteRound(2) === true, "fail deleting known round");
    assert(game.numberOfRound == 2, "fail deleting unknown round");
    assert(game.getPlayer(0).score.getCumul() == 25);
  });
  it("edit Round", () => {
    assert(game.addround([5, 10]) === true, "add round failed");
    assert(game.addround([10, 10]) === true, "add round failed");
    assert(game.addround([20, 10]) === true, "add round failed");
    game.editRound(1, [50, 50]);
    const roundResult = game.getPlayer(1).score.getround(1);
    assert(roundResult == 50, `expected 50, got ${roundResult}`);
  });
});
