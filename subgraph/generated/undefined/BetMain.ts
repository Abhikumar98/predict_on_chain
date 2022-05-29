// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetEventLauncher extends ethereum.Event {
  get params(): BetEventLauncher__Params {
    return new BetEventLauncher__Params(this);
  }
}

export class BetEventLauncher__Params {
  _event: BetEventLauncher;

  constructor(event: BetEventLauncher) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get betId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get betAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get betMakerAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get betTakerAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get betWinnerAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get makerBetTeam(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class MatchUpdateLauncher extends ethereum.Event {
  get params(): MatchUpdateLauncher__Params {
    return new MatchUpdateLauncher__Params(this);
  }
}

export class MatchUpdateLauncher__Params {
  _event: MatchUpdateLauncher;

  constructor(event: MatchUpdateLauncher) {
    this._event = event;
  }

  get matchId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get teamOne(): string {
    return this._event.parameters[1].value.toString();
  }

  get teamTwo(): string {
    return this._event.parameters[2].value.toString();
  }

  get winningTeam(): string {
    return this._event.parameters[3].value.toString();
  }

  get betIds(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class BetMain extends ethereum.SmartContract {
  static bind(address: Address): BetMain {
    return new BetMain("BetMain", address);
  }

  _betIDs(): BigInt {
    let result = super.call("_betIDs", "_betIDs():(uint256)", []);

    return result[0].toBigInt();
  }

  try__betIDs(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_betIDs", "_betIDs():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  match_id(): BigInt {
    let result = super.call("match_id", "match_id():(uint256)", []);

    return result[0].toBigInt();
  }

  try_match_id(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("match_id", "match_id():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  toggleStatus(): boolean {
    let result = super.call("toggleStatus", "toggleStatus():(bool)", []);

    return result[0].toBoolean();
  }

  try_toggleStatus(): ethereum.CallResult<boolean> {
    let result = super.tryCall("toggleStatus", "toggleStatus():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateOwners(addAddress: Address): Array<Address> {
    let result = super.call(
      "updateOwners",
      "updateOwners(address):(address[])",
      [ethereum.Value.fromAddress(addAddress)]
    );

    return result[0].toAddressArray();
  }

  try_updateOwners(addAddress: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "updateOwners",
      "updateOwners(address):(address[])",
      [ethereum.Value.fromAddress(addAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class _createBetCall extends ethereum.Call {
  get inputs(): _createBetCall__Inputs {
    return new _createBetCall__Inputs(this);
  }

  get outputs(): _createBetCall__Outputs {
    return new _createBetCall__Outputs(this);
  }
}

export class _createBetCall__Inputs {
  _call: _createBetCall;

  constructor(call: _createBetCall) {
    this._call = call;
  }

  get _betAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _matchId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _teamName(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class _createBetCall__Outputs {
  _call: _createBetCall;

  constructor(call: _createBetCall) {
    this._call = call;
  }
}

export class _createMatchsCall extends ethereum.Call {
  get inputs(): _createMatchsCall__Inputs {
    return new _createMatchsCall__Inputs(this);
  }

  get outputs(): _createMatchsCall__Outputs {
    return new _createMatchsCall__Outputs(this);
  }
}

export class _createMatchsCall__Inputs {
  _call: _createMatchsCall;

  constructor(call: _createMatchsCall) {
    this._call = call;
  }

  get _teamOne(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _teamTwo(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class _createMatchsCall__Outputs {
  _call: _createMatchsCall;

  constructor(call: _createMatchsCall) {
    this._call = call;
  }
}

export class _joinBetCall extends ethereum.Call {
  get inputs(): _joinBetCall__Inputs {
    return new _joinBetCall__Inputs(this);
  }

  get outputs(): _joinBetCall__Outputs {
    return new _joinBetCall__Outputs(this);
  }
}

export class _joinBetCall__Inputs {
  _call: _joinBetCall;

  constructor(call: _joinBetCall) {
    this._call = call;
  }

  get _betId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class _joinBetCall__Outputs {
  _call: _joinBetCall;

  constructor(call: _joinBetCall) {
    this._call = call;
  }
}

export class ClaimYourWinningCall extends ethereum.Call {
  get inputs(): ClaimYourWinningCall__Inputs {
    return new ClaimYourWinningCall__Inputs(this);
  }

  get outputs(): ClaimYourWinningCall__Outputs {
    return new ClaimYourWinningCall__Outputs(this);
  }
}

export class ClaimYourWinningCall__Inputs {
  _call: ClaimYourWinningCall;

  constructor(call: ClaimYourWinningCall) {
    this._call = call;
  }
}

export class ClaimYourWinningCall__Outputs {
  _call: ClaimYourWinningCall;

  constructor(call: ClaimYourWinningCall) {
    this._call = call;
  }
}

export class RemoveOwnerCall extends ethereum.Call {
  get inputs(): RemoveOwnerCall__Inputs {
    return new RemoveOwnerCall__Inputs(this);
  }

  get outputs(): RemoveOwnerCall__Outputs {
    return new RemoveOwnerCall__Outputs(this);
  }
}

export class RemoveOwnerCall__Inputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }

  get removeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOwnerCall__Outputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }
}

export class SetbetWinnerAmountClaimableCall extends ethereum.Call {
  get inputs(): SetbetWinnerAmountClaimableCall__Inputs {
    return new SetbetWinnerAmountClaimableCall__Inputs(this);
  }

  get outputs(): SetbetWinnerAmountClaimableCall__Outputs {
    return new SetbetWinnerAmountClaimableCall__Outputs(this);
  }
}

export class SetbetWinnerAmountClaimableCall__Inputs {
  _call: SetbetWinnerAmountClaimableCall;

  constructor(call: SetbetWinnerAmountClaimableCall) {
    this._call = call;
  }

  get claimableAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetbetWinnerAmountClaimableCall__Outputs {
  _call: SetbetWinnerAmountClaimableCall;

  constructor(call: SetbetWinnerAmountClaimableCall) {
    this._call = call;
  }
}

export class ToggleStatusCall extends ethereum.Call {
  get inputs(): ToggleStatusCall__Inputs {
    return new ToggleStatusCall__Inputs(this);
  }

  get outputs(): ToggleStatusCall__Outputs {
    return new ToggleStatusCall__Outputs(this);
  }
}

export class ToggleStatusCall__Inputs {
  _call: ToggleStatusCall;

  constructor(call: ToggleStatusCall) {
    this._call = call;
  }
}

export class ToggleStatusCall__Outputs {
  _call: ToggleStatusCall;

  constructor(call: ToggleStatusCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateOwnersCall extends ethereum.Call {
  get inputs(): UpdateOwnersCall__Inputs {
    return new UpdateOwnersCall__Inputs(this);
  }

  get outputs(): UpdateOwnersCall__Outputs {
    return new UpdateOwnersCall__Outputs(this);
  }
}

export class UpdateOwnersCall__Inputs {
  _call: UpdateOwnersCall;

  constructor(call: UpdateOwnersCall) {
    this._call = call;
  }

  get addAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateOwnersCall__Outputs {
  _call: UpdateOwnersCall;

  constructor(call: UpdateOwnersCall) {
    this._call = call;
  }

  get value0(): Array<Address> {
    return this._call.outputValues[0].value.toAddressArray();
  }
}

export class UpdateWinningTeamCall extends ethereum.Call {
  get inputs(): UpdateWinningTeamCall__Inputs {
    return new UpdateWinningTeamCall__Inputs(this);
  }

  get outputs(): UpdateWinningTeamCall__Outputs {
    return new UpdateWinningTeamCall__Outputs(this);
  }
}

export class UpdateWinningTeamCall__Inputs {
  _call: UpdateWinningTeamCall;

  constructor(call: UpdateWinningTeamCall) {
    this._call = call;
  }

  get _matchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get winningTeam(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateWinningTeamCall__Outputs {
  _call: UpdateWinningTeamCall;

  constructor(call: UpdateWinningTeamCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall extends ethereum.Call {
  get inputs(): WithdrawFundsCall__Inputs {
    return new WithdrawFundsCall__Inputs(this);
  }

  get outputs(): WithdrawFundsCall__Outputs {
    return new WithdrawFundsCall__Outputs(this);
  }
}

export class WithdrawFundsCall__Inputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall__Outputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}
