import { BigInt } from "@graphprotocol/graph-ts"
import {
  BetMain,
  BetEventLauncher,
  MatchUpdateLauncher
} from "../generated/undefined/BetMain"
import { Match } from "../generated/schema"
import { Bet } from "../generated/schema"

export function handleMatchUpdateLauncher(eventOne: MatchUpdateLauncher): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entityOne = Match.load(
    eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityOne) {
    entityOne = new Match(
      eventOne.transaction.hash.toHex() + "-" + eventOne.logIndex.toString()
    );
    // BigInt and BigDecimal math are supported
    entityOne._matchId = eventOne.params.matchId;
    entityOne._teamOne = eventOne.params.teamOne;
    entityOne._teamTwo = eventOne.params.teamTwo;
    entityOne._winningTeam = eventOne.params.winningTeam;
    entityOne._betIds = eventOne.params.betIds;

    entityOne.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._betIDs(...)
  // - contract.match_id(...)
  }
}

export function handleBetEventLauncher(eventTwo: BetEventLauncher): void {

  let entityTwo = Bet.load(
    eventTwo.transaction.hash.toHex() + "-" + eventTwo.logIndex.toString()
  );

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entityTwo) {
    entityTwo = new Bet(
      eventTwo.transaction.hash.toHex() + "-" + eventTwo.logIndex.toString()
    );
    // BigInt and BigDecimal math are supported
    entityTwo._matchId = eventTwo.params.matchId;
    entityTwo._betId = eventTwo.params.betId;
    entityTwo._betAmount = eventTwo.params.betAmount;
    entityTwo._betMakerAddress = eventTwo.params.betMakerAddress.toHexString();
    entityTwo._betTakerAddress = eventTwo.params.betTakerAddress.toHexString();
    entityTwo._betWinnerAddress = eventTwo.params.betWinnerAddress.toHexString();
    entityTwo._makerBetTeam = eventTwo.params.makerBetTeam;

    entityTwo.save();
  }
}
