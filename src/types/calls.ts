import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v1 from './v1'

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
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '75cd17699a74ab8eea4974f63885c05e13937d102e770c3f159c86db40375fab'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get asV1(): {source: v1.LookupSource, dest: v1.LookupSource, value: bigint} {
    assert(this.isV1)
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
   *  Set the balances of a given account.
   * 
   *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   *  also decrease the total issuance of the system (`TotalIssuance`).
   *  If the new free or reserved balance is below the existential deposit,
   *  it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   *  The dispatch origin for this call is `root`.
   * 
   *  # <weight>
   *  - Independent of the arguments.
   *  - Contains a limited number of reads and writes.
   *  ---------------------
   *  - Base Weight:
   *      - Creating: 27.56 µs
   *      - Killing: 35.11 µs
   *  - DB Weight: 1 Read, 1 Write to `who`
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === '50bd1065c5ed050f606ec8f7d274adacc1667e5fa0c75119dd591d68b70e9526'
  }

  /**
   *  Set the balances of a given account.
   * 
   *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   *  also decrease the total issuance of the system (`TotalIssuance`).
   *  If the new free or reserved balance is below the existential deposit,
   *  it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   *  The dispatch origin for this call is `root`.
   * 
   *  # <weight>
   *  - Independent of the arguments.
   *  - Contains a limited number of reads and writes.
   *  ---------------------
   *  - Base Weight:
   *      - Creating: 27.56 µs
   *      - Killing: 35.11 µs
   *  - DB Weight: 1 Read, 1 Write to `who`
   *  # </weight>
   */
  get asV1(): {who: v1.LookupSource, newFree: bigint, newReserved: bigint} {
    assert(this.isV1)
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
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'c0262644e036af28c17e74940cdb2f2cfed7fc9879b8513e5c0c8b9ff64d97cb'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get asV1(): {dest: v1.LookupSource, value: bigint} {
    assert(this.isV1)
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
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c0262644e036af28c17e74940cdb2f2cfed7fc9879b8513e5c0c8b9ff64d97cb'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get asV1(): {dest: v1.LookupSource, value: bigint} {
    assert(this.isV1)
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
   *  Note that the current authority set of the GRANDPA finality gadget has
   *  stalled. This will trigger a forced authority set change at the beginning
   *  of the next session, to be enacted `delay` blocks after that. The delay
   *  should be high enough to safely assume that the block signalling the
   *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
   *  will start the new authority set using the given finalized block as base.
   *  Only callable by root.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
  }

  /**
   *  Note that the current authority set of the GRANDPA finality gadget has
   *  stalled. This will trigger a forced authority set change at the beginning
   *  of the next session, to be enacted `delay` blocks after that. The delay
   *  should be high enough to safely assume that the block signalling the
   *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
   *  will start the new authority set using the given finalized block as base.
   *  Only callable by root.
   */
  get asV1(): {delay: number, bestFinalizedBlockNumber: number} {
    assert(this.isV1)
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
   *  Report voter equivocation/misbehavior. This method will verify the
   *  equivocation proof and validate the given key ownership proof
   *  against the extracted offender. If both are valid, the offence
   *  will be reported.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Grandpa.report_equivocation') === 'ad1448af551bbcd8ed25241af33d8036f00a4a53a63b737bfdc31a4a3f87c65d'
  }

  /**
   *  Report voter equivocation/misbehavior. This method will verify the
   *  equivocation proof and validate the given key ownership proof
   *  against the extracted offender. If both are valid, the offence
   *  will be reported.
   */
  get asV1(): {equivocationProof: v1.GrandpaEquivocationProof, keyOwnerProof: v1.KeyOwnerProof} {
    assert(this.isV1)
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
   *  Report voter equivocation/misbehavior. This method will verify the
   *  equivocation proof and validate the given key ownership proof
   *  against the extracted offender. If both are valid, the offence
   *  will be reported.
   * 
   *  This extrinsic must be called unsigned and it is expected that only
   *  block authors will call it (validated in `ValidateUnsigned`), as such
   *  if the block author is defined it will be defined as the equivocation
   *  reporter.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === 'ad1448af551bbcd8ed25241af33d8036f00a4a53a63b737bfdc31a4a3f87c65d'
  }

  /**
   *  Report voter equivocation/misbehavior. This method will verify the
   *  equivocation proof and validate the given key ownership proof
   *  against the extracted offender. If both are valid, the offence
   *  will be reported.
   * 
   *  This extrinsic must be called unsigned and it is expected that only
   *  block authors will call it (validated in `ValidateUnsigned`), as such
   *  if the block author is defined it will be defined as the equivocation
   *  reporter.
   */
  get asV1(): {equivocationProof: v1.GrandpaEquivocationProof, keyOwnerProof: v1.KeyOwnerProof} {
    assert(this.isV1)
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
   *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === '088936eea39aa43461a2b9b8ca59e147f83e44648455c5e0e1026de7cbe9f752'
  }

  /**
   *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get asV1(): {new: v1.LookupSource} {
    assert(this.isV1)
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
   *  Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB write (event).
   *  - Weight of derivative `call` execution + 10,000.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '051b5b341c224b979a68593c0f60223f1d6f10872f5a4c59b0eab8d80eaf1370'
  }

  /**
   *  Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB write (event).
   *  - Weight of derivative `call` execution + 10,000.
   *  # </weight>
   */
  get asV1(): {call: v1.Type_68} {
    assert(this.isV1)
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
   *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
   *  a given account.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB write (event).
   *  - Weight of derivative `call` execution + 10,000.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '345f8579655d33dc90afe795b7894602e9e391ece13a35ce761da887a21f0415'
  }

  /**
   *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
   *  a given account.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB write (event).
   *  - Weight of derivative `call` execution + 10,000.
   *  # </weight>
   */
  get asV1(): {who: v1.LookupSource, call: v1.Type_68} {
    assert(this.isV1)
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
   *  Authenticates the sudo key and dispatches a function call with `Root` origin.
   *  This function does not check the weight of the call, and instead allows the
   *  Sudo user to specify the weight of the call.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - The weight of this call is defined by the caller.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e51199fb0eb900bca360b1062f51126c4a2bf321941a94f1fd447bf27f01d4dc'
  }

  /**
   *  Authenticates the sudo key and dispatches a function call with `Root` origin.
   *  This function does not check the weight of the call, and instead allows the
   *  Sudo user to specify the weight of the call.
   * 
   *  The dispatch origin for this call must be _Signed_.
   * 
   *  # <weight>
   *  - O(1).
   *  - The weight of this call is defined by the caller.
   *  # </weight>
   */
  get asV1(): {call: v1.Type_68, weight: bigint} {
    assert(this.isV1)
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
   *  A dispatch that will fill the block weight up to the given ratio.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   *  A dispatch that will fill the block weight up to the given ratio.
   */
  get asV1(): {ratio: number} {
    assert(this.isV1)
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
   *  Kill all storage items with a key that starts with the given prefix.
   * 
   *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   *  the prefix we are removing to accurately calculate the weight of this function.
   * 
   *  # <weight>
   *  - `O(P)` where `P` amount of keys with prefix `prefix`
   *  - `P` storage deletions.
   *  - Base Weight: 0.834 * P µs
   *  - Writes: Number of subkeys + 1
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   *  Kill all storage items with a key that starts with the given prefix.
   * 
   *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   *  the prefix we are removing to accurately calculate the weight of this function.
   * 
   *  # <weight>
   *  - `O(P)` where `P` amount of keys with prefix `prefix`
   *  - `P` storage deletions.
   *  - Base Weight: 0.834 * P µs
   *  - Writes: Number of subkeys + 1
   *  # </weight>
   */
  get asV1(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV1)
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
   *  Kill some items from storage.
   * 
   *  # <weight>
   *  - `O(IK)` where `I` length of `keys` and `K` length of one key
   *  - `I` storage deletions.
   *  - Base Weight: .378 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   *  Kill some items from storage.
   * 
   *  # <weight>
   *  - `O(IK)` where `I` length of `keys` and `K` length of one key
   *  - `I` storage deletions.
   *  - Base Weight: .378 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get asV1(): {keys: Uint8Array[]} {
    assert(this.isV1)
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
   *  Make some on-chain remark.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - Base Weight: 0.665 µs, independent of remark length.
   *  - No DB operations.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   *  Make some on-chain remark.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - Base Weight: 0.665 µs, independent of remark length.
   *  - No DB operations.
   *  # </weight>
   */
  get asV1(): {remark: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetChangesTrieConfigCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_changes_trie_config')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Set the new changes trie configuration.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage write or delete (codec `O(1)`).
   *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
   *  - Base Weight: 7.218 µs
   *  - DB Weight:
   *      - Writes: Changes Trie, System Digest
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
  }

  /**
   *  Set the new changes trie configuration.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage write or delete (codec `O(1)`).
   *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
   *  - Base Weight: 7.218 µs
   *  - DB Weight:
   *      - Writes: Changes Trie, System Digest
   *  # </weight>
   */
  get asV1(): {changesTrieConfig: (v1.ChangesTrieConfiguration | undefined)} {
    assert(this.isV1)
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
   *  Set the new runtime code.
   * 
   *  # <weight>
   *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   *  - 1 storage write (codec `O(C)`).
   *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
   *  - 1 event.
   *  The weight of this function is dependent on the runtime, but generally this is very expensive.
   *  We will treat this as a full block.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   *  Set the new runtime code.
   * 
   *  # <weight>
   *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   *  - 1 storage write (codec `O(C)`).
   *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
   *  - 1 event.
   *  The weight of this function is dependent on the runtime, but generally this is very expensive.
   *  We will treat this as a full block.
   *  # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
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
   *  Set the new runtime code without doing any checks of the given `code`.
   * 
   *  # <weight>
   *  - `O(C)` where `C` length of `code`
   *  - 1 storage write (codec `O(C)`).
   *  - 1 event.
   *  The weight of this function is dependent on the runtime. We will treat this as a full block.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   *  Set the new runtime code without doing any checks of the given `code`.
   * 
   *  # <weight>
   *  - `O(C)` where `C` length of `code`
   *  - 1 storage write (codec `O(C)`).
   *  - 1 event.
   *  The weight of this function is dependent on the runtime. We will treat this as a full block.
   *  # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
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
   *  Set the number of pages in the WebAssembly environment's heap.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage write.
   *  - Base Weight: 1.405 µs
   *  - 1 write to HEAP_PAGES
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   *  Set the number of pages in the WebAssembly environment's heap.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage write.
   *  - Base Weight: 1.405 µs
   *  - 1 write to HEAP_PAGES
   *  # </weight>
   */
  get asV1(): {pages: bigint} {
    assert(this.isV1)
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
   *  Set some items of storage.
   * 
   *  # <weight>
   *  - `O(I)` where `I` length of `items`
   *  - `I` storage writes (`O(1)`).
   *  - Base Weight: 0.568 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   *  Set some items of storage.
   * 
   *  # <weight>
   *  - `O(I)` where `I` length of `items`
   *  - `I` storage writes (`O(1)`).
   *  - Base Weight: 0.568 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get asV1(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSuicideCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.suicide')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Kill the sending account, assuming there are no references outstanding and the composite
   *  data is equal to its default value.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage read and deletion.
   *  --------------------
   *  Base Weight: 8.626 µs
   *  No DB Read or Write operations because caller is already in overlay
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.suicide') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Kill the sending account, assuming there are no references outstanding and the composite
   *  data is equal to its default value.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage read and deletion.
   *  --------------------
   *  Base Weight: 8.626 µs
   *  No DB Read or Write operations because caller is already in overlay
   *  # </weight>
   */
  get asV1(): null {
    assert(this.isV1)
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
   *  Set the current time.
   * 
   *  This call should be invoked exactly once per block. It will panic at the finalization
   *  phase, if this call hasn't been invoked by that time.
   * 
   *  The timestamp should be greater than the previous one by the amount specified by
   *  `MinimumPeriod`.
   * 
   *  The dispatch origin for this call must be `Inherent`.
   * 
   *  # <weight>
   *  - `O(T)` where `T` complexity of `on_timestamp_set`
   *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
   *  - 1 event handler `on_timestamp_set` `O(T)`.
   *  # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

  /**
   *  Set the current time.
   * 
   *  This call should be invoked exactly once per block. It will panic at the finalization
   *  phase, if this call hasn't been invoked by that time.
   * 
   *  The timestamp should be greater than the previous one by the amount specified by
   *  `MinimumPeriod`.
   * 
   *  The dispatch origin for this call must be `Inherent`.
   * 
   *  # <weight>
   *  - `O(T)` where `T` complexity of `on_timestamp_set`
   *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
   *  - 1 event handler `on_timestamp_set` `O(T)`.
   *  # </weight>
   */
  get asV1(): {now: bigint} {
    assert(this.isV1)
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
   *  Store Verificatoion Key - VK
   *  # <weight>
   *  - O(1).
   *  - At most one balance operation.
   *  - One storage read/write.
   *  - One event.
   *  # </weight>
   *  test with: yO5EICtE+JVjTbRYkayI0Y/BoOJtE9lsrqeCTKTDnxD8UjB8B51wrVsQsVrsi6Uk0b2UKGfs3AJUX2Eud5wnET/ze/CsefR74bOn50BmVoExPPDiJGRD2IejItInd/wbtAH7GstyB1Q1j9uROBBAgE2eEj/cwRcHJobe4MP1mQIsiHdC5KXrBZFMlcRQi19O5pRHJ3fra+CNrckf5PHVL1NDT3E4ah/xGoRIbB0DfMSC2AO5NCyuZzJiAMBEKEcLbiazu9JOT65EXSc7HGM9IKlQXgpITR/jikWNxJc/Jyn6KiimTBN/yj4NVjAogElMdLmVoelMa0SAen8Z5ZwkFc6j3IriiWbKQnnkocqd++FqYs4gTh2rFDvcn2YpAhAmnMf35ssgfTFSIOyLZeRQPJ/SzCQMvSq8p1TAkgF85xv+1Vwd0UmrwJXyPVWhevfis0jEd6Cw78ESIMwB7S4dJwNAnVjEBRrKGfOAAzBIiTQRVMSMY2a1nMP/vr57eJwrOYvVboNDUHw8N+u1KoT3vTQkt6+bdeUBw2X/HBbeuyLcmx9AdsbJ0QY1GGF4cgGnSx9kGtcL9UY4qMWVtJ++LAQAAABZB9VFKNzCZgjPMZ9MTfotIL1czmkU9p4L3+6udM/DCAIGsaMeBAN/AhWI+GDLJK3EPzfiVDtw9PWWv+mifJUEQqRUa63wkfB2CouGxTpfsMPlZW93gzGXl5C4lmqMSQnAYpBIHANPM/R/DtA6eMTKKgKBfqgSMjf8YwlmfckmEkbsEZYwsUj2B+ryafp/qj39z80B/33p62Wz+OdwpcIYLSyprNYGC1nyO/jlRIhqRFhx9qkBRjKz/ddvFv7bdAeyPpjCqbT/6zrE22RSdm1I+tceC6xm3OUJE3wX4d5XF5z1EXo17iShXLdYhwVcd//YzyysetRirUxRPeXNAuAh
   *  data is LE-encoded VK struct in base64 (check groth16verify description)
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Zeropool.set_vk') === '2ecf17d501819cc99d8fb8e5d7a81e24c0c5aec0f9ade9629c3dda331a3404ce'
  }

  /**
   *  Store Verificatoion Key - VK
   *  # <weight>
   *  - O(1).
   *  - At most one balance operation.
   *  - One storage read/write.
   *  - One event.
   *  # </weight>
   *  test with: yO5EICtE+JVjTbRYkayI0Y/BoOJtE9lsrqeCTKTDnxD8UjB8B51wrVsQsVrsi6Uk0b2UKGfs3AJUX2Eud5wnET/ze/CsefR74bOn50BmVoExPPDiJGRD2IejItInd/wbtAH7GstyB1Q1j9uROBBAgE2eEj/cwRcHJobe4MP1mQIsiHdC5KXrBZFMlcRQi19O5pRHJ3fra+CNrckf5PHVL1NDT3E4ah/xGoRIbB0DfMSC2AO5NCyuZzJiAMBEKEcLbiazu9JOT65EXSc7HGM9IKlQXgpITR/jikWNxJc/Jyn6KiimTBN/yj4NVjAogElMdLmVoelMa0SAen8Z5ZwkFc6j3IriiWbKQnnkocqd++FqYs4gTh2rFDvcn2YpAhAmnMf35ssgfTFSIOyLZeRQPJ/SzCQMvSq8p1TAkgF85xv+1Vwd0UmrwJXyPVWhevfis0jEd6Cw78ESIMwB7S4dJwNAnVjEBRrKGfOAAzBIiTQRVMSMY2a1nMP/vr57eJwrOYvVboNDUHw8N+u1KoT3vTQkt6+bdeUBw2X/HBbeuyLcmx9AdsbJ0QY1GGF4cgGnSx9kGtcL9UY4qMWVtJ++LAQAAABZB9VFKNzCZgjPMZ9MTfotIL1czmkU9p4L3+6udM/DCAIGsaMeBAN/AhWI+GDLJK3EPzfiVDtw9PWWv+mifJUEQqRUa63wkfB2CouGxTpfsMPlZW93gzGXl5C4lmqMSQnAYpBIHANPM/R/DtA6eMTKKgKBfqgSMjf8YwlmfckmEkbsEZYwsUj2B+ryafp/qj39z80B/33p62Wz+OdwpcIYLSyprNYGC1nyO/jlRIhqRFhx9qkBRjKz/ddvFv7bdAeyPpjCqbT/6zrE22RSdm1I+tceC6xm3OUJE3wX4d5XF5z1EXo17iShXLdYhwVcd//YzyysetRirUxRPeXNAuAh
   *  data is LE-encoded VK struct in base64 (check groth16verify description)
   */
  get asV1(): {vkb: Uint8Array} {
    assert(this.isV1)
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
   *  Verify groth16 by json including proof and input (verification key is loaded from storage)
   *  # <weight>
   *  - O(1).
   *  - At most one balance operation.
   *  - One storage read/write.
   *  - One event.
   *  # </weight>
   * 
   *  data is Proof struct and inputs in LE-encoding, base64 and JSON (check groth16verify description)
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Zeropool.test_groth16verify') === '2e044b7a1a49ea579987d660b410d41ca1e67b307e1efa9d09aad92b577b11ed'
  }

  /**
   *  Verify groth16 by json including proof and input (verification key is loaded from storage)
   *  # <weight>
   *  - O(1).
   *  - At most one balance operation.
   *  - One storage read/write.
   *  - One event.
   *  # </weight>
   * 
   *  data is Proof struct and inputs in LE-encoding, base64 and JSON (check groth16verify description)
   */
  get asV1(): {jproofinput: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}
