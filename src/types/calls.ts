import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v100 from './v100'

export class BalancesForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV100(): {source: v100.MultiAddress, dest: v100.MultiAddress, value: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceUnreserveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_unreserve')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV100(): {who: v100.MultiAddress, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesSetBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.set_balance')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also alter the total issuance of the system (`TotalIssuance`) appropriately.
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also alter the total issuance of the system (`TotalIssuance`) appropriately.
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   */
  get asV100(): {who: v100.MultiAddress, newFree: bigint, newReserved: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV100(): {dest: v100.MultiAddress, value: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV100(): {dest: v100.MultiAddress, keepAlive: boolean} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   */
  get asV100(): {dest: v100.MultiAddress, value: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class GrandpaNoteStalledCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Grandpa.note_stalled')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Note that the current authority set of the GRANDPA finality gadget has stalled.
   * 
   * This will trigger a forced authority set change at the beginning of the next session, to
   * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
   * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
   * The block production rate (which may be slowed down because of finality lagging) should
   * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
   * authority will start voting on top of `best_finalized_block_number` for new finalized
   * blocks. `best_finalized_block_number` should be the highest of the latest finalized
   * block of all validators of the new authority set.
   * 
   * Only callable by root.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
  }

  /**
   * Note that the current authority set of the GRANDPA finality gadget has stalled.
   * 
   * This will trigger a forced authority set change at the beginning of the next session, to
   * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
   * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
   * The block production rate (which may be slowed down because of finality lagging) should
   * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
   * authority will start voting on top of `best_finalized_block_number` for new finalized
   * blocks. `best_finalized_block_number` should be the highest of the latest finalized
   * block of all validators of the new authority set.
   * 
   * Only callable by root.
   */
  get asV100(): {delay: number, bestFinalizedBlockNumber: number} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class GrandpaReportEquivocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Grandpa.report_equivocation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Report voter equivocation/misbehavior. This method will verify the
   * equivocation proof and validate the given key ownership proof
   * against the extracted offender. If both are valid, the offence
   * will be reported.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Grandpa.report_equivocation') === 'c013519536bd18b242d3dd1699b5d15a8ae1fccf0dd04c12f721418f3b34a23b'
  }

  /**
   * Report voter equivocation/misbehavior. This method will verify the
   * equivocation proof and validate the given key ownership proof
   * against the extracted offender. If both are valid, the offence
   * will be reported.
   */
  get asV100(): {equivocationProof: v100.EquivocationProof, keyOwnerProof: v100.Void} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class GrandpaReportEquivocationUnsignedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Grandpa.report_equivocation_unsigned')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Report voter equivocation/misbehavior. This method will verify the
   * equivocation proof and validate the given key ownership proof
   * against the extracted offender. If both are valid, the offence
   * will be reported.
   * 
   * This extrinsic must be called unsigned and it is expected that only
   * block authors will call it (validated in `ValidateUnsigned`), as such
   * if the block author is defined it will be defined as the equivocation
   * reporter.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === 'c013519536bd18b242d3dd1699b5d15a8ae1fccf0dd04c12f721418f3b34a23b'
  }

  /**
   * Report voter equivocation/misbehavior. This method will verify the
   * equivocation proof and validate the given key ownership proof
   * against the extracted offender. If both are valid, the offence
   * will be reported.
   * 
   * This extrinsic must be called unsigned and it is expected that only
   * block authors will call it (validated in `ValidateUnsigned`), as such
   * if the block author is defined it will be defined as the equivocation
   * reporter.
   */
  get asV100(): {equivocationProof: v100.EquivocationProof, keyOwnerProof: v100.Void} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSetKeyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.set_key')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get asV100(): {new: v100.MultiAddress} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'acf19cb33dcd621361a2f58581a520856a3aa1610b26c74d0304f74e3dde398b'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV100(): {call: v100.Call} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_as')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '62d8be53ba15c2924140c2b3df25561c931f44fe19c14cd514eed03c9398ce38'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV100(): {who: v100.MultiAddress, call: v100.Call} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoUncheckedWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_unchecked_weight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'bf7245875ed7ed792c77eae2954b1c08a1f85854ea7a42216003ebcab5485516'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV100(): {call: v100.Call, weight: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemFillBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.fill_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get asV100(): {ratio: number} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillPrefixCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_prefix')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   */
  get asV100(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill some items from storage.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   * Kill some items from storage.
   */
  get asV100(): {keys: Uint8Array[]} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get asV100(): {remark: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkWithEventCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark_with_event')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark and emit event.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark and emit event.
   */
  get asV100(): {remark: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get asV100(): {code: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeWithoutChecksCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code_without_checks')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get asV100(): {code: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetHeapPagesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_heap_pages')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   */
  get asV100(): {pages: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set some items of storage.
   */
  get isV100(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   * Set some items of storage.
   */
  get asV100(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class TimestampSetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Timestamp.set')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get asV100(): {now: bigint} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class ZeropoolSetVkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Zeropool.set_vk')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Store Verificatoion Key - VK
   * # <weight>
   * - O(1).
   * - At most one balance operation.
   * - One storage read/write.
   * - One event.
   * # </weight>
   * test with: yO5EICtE+JVjTbRYkayI0Y/BoOJtE9lsrqeCTKTDnxD8UjB8B51wrVsQsVrsi6Uk0b2UKGfs3AJUX2Eud5wnET/ze/CsefR74bOn50BmVoExPPDiJGRD2IejItInd/wbtAH7GstyB1Q1j9uROBBAgE2eEj/cwRcHJobe4MP1mQIsiHdC5KXrBZFMlcRQi19O5pRHJ3fra+CNrckf5PHVL1NDT3E4ah/xGoRIbB0DfMSC2AO5NCyuZzJiAMBEKEcLbiazu9JOT65EXSc7HGM9IKlQXgpITR/jikWNxJc/Jyn6KiimTBN/yj4NVjAogElMdLmVoelMa0SAen8Z5ZwkFc6j3IriiWbKQnnkocqd++FqYs4gTh2rFDvcn2YpAhAmnMf35ssgfTFSIOyLZeRQPJ/SzCQMvSq8p1TAkgF85xv+1Vwd0UmrwJXyPVWhevfis0jEd6Cw78ESIMwB7S4dJwNAnVjEBRrKGfOAAzBIiTQRVMSMY2a1nMP/vr57eJwrOYvVboNDUHw8N+u1KoT3vTQkt6+bdeUBw2X/HBbeuyLcmx9AdsbJ0QY1GGF4cgGnSx9kGtcL9UY4qMWVtJ++LAQAAABZB9VFKNzCZgjPMZ9MTfotIL1czmkU9p4L3+6udM/DCAIGsaMeBAN/AhWI+GDLJK3EPzfiVDtw9PWWv+mifJUEQqRUa63wkfB2CouGxTpfsMPlZW93gzGXl5C4lmqMSQnAYpBIHANPM/R/DtA6eMTKKgKBfqgSMjf8YwlmfckmEkbsEZYwsUj2B+ryafp/qj39z80B/33p62Wz+OdwpcIYLSyprNYGC1nyO/jlRIhqRFhx9qkBRjKz/ddvFv7bdAeyPpjCqbT/6zrE22RSdm1I+tceC6xm3OUJE3wX4d5XF5z1EXo17iShXLdYhwVcd//YzyysetRirUxRPeXNAuAh
   * data is LE-encoded VK struct in base64 (check groth16verify description)
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Zeropool.set_vk') === '2ecf17d501819cc99d8fb8e5d7a81e24c0c5aec0f9ade9629c3dda331a3404ce'
  }

  /**
   * Store Verificatoion Key - VK
   * # <weight>
   * - O(1).
   * - At most one balance operation.
   * - One storage read/write.
   * - One event.
   * # </weight>
   * test with: yO5EICtE+JVjTbRYkayI0Y/BoOJtE9lsrqeCTKTDnxD8UjB8B51wrVsQsVrsi6Uk0b2UKGfs3AJUX2Eud5wnET/ze/CsefR74bOn50BmVoExPPDiJGRD2IejItInd/wbtAH7GstyB1Q1j9uROBBAgE2eEj/cwRcHJobe4MP1mQIsiHdC5KXrBZFMlcRQi19O5pRHJ3fra+CNrckf5PHVL1NDT3E4ah/xGoRIbB0DfMSC2AO5NCyuZzJiAMBEKEcLbiazu9JOT65EXSc7HGM9IKlQXgpITR/jikWNxJc/Jyn6KiimTBN/yj4NVjAogElMdLmVoelMa0SAen8Z5ZwkFc6j3IriiWbKQnnkocqd++FqYs4gTh2rFDvcn2YpAhAmnMf35ssgfTFSIOyLZeRQPJ/SzCQMvSq8p1TAkgF85xv+1Vwd0UmrwJXyPVWhevfis0jEd6Cw78ESIMwB7S4dJwNAnVjEBRrKGfOAAzBIiTQRVMSMY2a1nMP/vr57eJwrOYvVboNDUHw8N+u1KoT3vTQkt6+bdeUBw2X/HBbeuyLcmx9AdsbJ0QY1GGF4cgGnSx9kGtcL9UY4qMWVtJ++LAQAAABZB9VFKNzCZgjPMZ9MTfotIL1czmkU9p4L3+6udM/DCAIGsaMeBAN/AhWI+GDLJK3EPzfiVDtw9PWWv+mifJUEQqRUa63wkfB2CouGxTpfsMPlZW93gzGXl5C4lmqMSQnAYpBIHANPM/R/DtA6eMTKKgKBfqgSMjf8YwlmfckmEkbsEZYwsUj2B+ryafp/qj39z80B/33p62Wz+OdwpcIYLSyprNYGC1nyO/jlRIhqRFhx9qkBRjKz/ddvFv7bdAeyPpjCqbT/6zrE22RSdm1I+tceC6xm3OUJE3wX4d5XF5z1EXo17iShXLdYhwVcd//YzyysetRirUxRPeXNAuAh
   * data is LE-encoded VK struct in base64 (check groth16verify description)
   */
  get asV100(): {vkb: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}

export class ZeropoolTestGroth16VerifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Zeropool.test_groth16verify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Verify groth16 by json including proof and input (verification key is loaded from storage)
   * # <weight>
   * - O(1).
   * - At most one balance operation.
   * - One storage read/write.
   * - One event.
   * # </weight>
   * 
   * data is Proof struct and inputs in LE-encoding, base64 and JSON (check groth16verify description)
   */
  get isV100(): boolean {
    return this._chain.getCallHash('Zeropool.test_groth16verify') === '2e044b7a1a49ea579987d660b410d41ca1e67b307e1efa9d09aad92b577b11ed'
  }

  /**
   * Verify groth16 by json including proof and input (verification key is loaded from storage)
   * # <weight>
   * - O(1).
   * - At most one balance operation.
   * - One storage read/write.
   * - One event.
   * # </weight>
   * 
   * data is Proof struct and inputs in LE-encoding, base64 and JSON (check groth16verify description)
   */
  get asV100(): {jproofinput: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeCall(this.call)
  }
}
