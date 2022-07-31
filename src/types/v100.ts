import type {Result} from './support'

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional

export interface DispatchError_Other {
  __kind: 'Other'
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
}

export interface DispatchError_Module {
  __kind: 'Module'
  value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
  __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export interface DispatchError_Transactional {
  __kind: 'Transactional'
  value: TransactionalError
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: Uint8Array
}

export interface MultiAddress_Index {
  __kind: 'Index'
  value: null
}

export interface MultiAddress_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface MultiAddress_Address32 {
  __kind: 'Address32'
  value: Uint8Array
}

export interface MultiAddress_Address20 {
  __kind: 'Address20'
  value: Uint8Array
}

export interface EquivocationProof {
  setId: bigint
  equivocation: Equivocation
}

export type Void = never

export type Call = Call_System | Call_Timestamp | Call_Grandpa | Call_Balances | Call_Sudo | Call_Zeropool

export interface Call_System {
  __kind: 'System'
  value: SystemCall
}

export interface Call_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Call_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Call_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export interface Call_Zeropool {
  __kind: 'Zeropool'
  value: ZeropoolCall
}

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface BalanceLock {
  id: Uint8Array
  amount: bigint
  reasons: Reasons
}

export interface ReserveData {
  id: Uint8Array
  amount: bigint
}

export type Releases = Releases_V1_0_0 | Releases_V2_0_0

export interface Releases_V1_0_0 {
  __kind: 'V1_0_0'
}

export interface Releases_V2_0_0 {
  __kind: 'V2_0_0'
}

export interface StoredPendingChange {
  scheduledAt: number
  delay: number
  nextAuthorities: [Uint8Array, bigint][]
  forced: (number | undefined)
}

export type StoredState = StoredState_Live | StoredState_PendingPause | StoredState_Paused | StoredState_PendingResume

export interface StoredState_Live {
  __kind: 'Live'
}

export interface StoredState_PendingPause {
  __kind: 'PendingPause'
  scheduledAt: number
  delay: number
}

export interface StoredState_Paused {
  __kind: 'Paused'
}

export interface StoredState_PendingResume {
  __kind: 'PendingResume'
  scheduledAt: number
  delay: number
}

export interface AccountInfo {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface PerDispatchClass {
  normal: bigint
  operational: bigint
  mandatory: bigint
}

export interface Digest {
  logs: DigestItem[]
}

export interface EventRecord {
  phase: Phase
  event: Event
  topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
  __kind: 'ApplyExtrinsic'
  value: number
}

export interface Phase_Finalization {
  __kind: 'Finalization'
}

export interface Phase_Initialization {
  __kind: 'Initialization'
}

export interface LastRuntimeUpgradeInfo {
  specVersion: number
  specName: string
}

export type Type_108 = Type_108_V1Ancient | Type_108_V2

export interface Type_108_V1Ancient {
  __kind: 'V1Ancient'
}

export interface Type_108_V2 {
  __kind: 'V2'
}

export interface BlockLength {
  max: Type_58
}

export interface BlockWeights {
  baseBlock: bigint
  maxBlock: bigint
  perClass: Type_54
}

export interface RuntimeDbWeight {
  read: bigint
  write: bigint
}

export interface RuntimeVersion {
  specName: string
  implName: string
  authoringVersion: number
  specVersion: number
  implVersion: number
  apis: [Uint8Array, number][]
  transactionVersion: number
  stateVersion: number
}

export interface ModuleError {
  index: number
  error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
  __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
  __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
  __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
  __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
  __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
  __kind: 'Frozen'
}

export interface TokenError_Unsupported {
  __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
  __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
  __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
  __kind: 'DivisionByZero'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
  __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
  __kind: 'NoLayer'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
  __kind: 'Normal'
}

export interface DispatchClass_Operational {
  __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
  __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
  __kind: 'Prevote'
  value: Type_82
}

export interface Equivocation_Precommit {
  __kind: 'Precommit'
  value: Type_88
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
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
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
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
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

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
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
  __kind: 'report_equivocation'
  equivocationProof: EquivocationProof
  keyOwnerProof: Void
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
export interface GrandpaCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned'
  equivocationProof: EquivocationProof
  keyOwnerProof: Void
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
export interface GrandpaCall_note_stalled {
  __kind: 'note_stalled'
  delay: number
  bestFinalizedBlockNumber: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

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
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  value: bigint
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
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  newFree: bigint
  newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  value: bigint
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
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve'
  who: MultiAddress
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

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
export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Call
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
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Call
  weight: bigint
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
export interface SudoCall_set_key {
  __kind: 'set_key'
  new: MultiAddress
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
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: MultiAddress
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ZeropoolCall = ZeropoolCall_set_vk | ZeropoolCall_test_groth16verify

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
export interface ZeropoolCall_set_vk {
  __kind: 'set_vk'
  vkb: Uint8Array
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
export interface ZeropoolCall_test_groth16verify {
  __kind: 'test_groth16verify'
  jproofinput: Uint8Array
}

export type Reasons = Reasons_Fee | Reasons_Misc | Reasons_All

export interface Reasons_Fee {
  __kind: 'Fee'
}

export interface Reasons_Misc {
  __kind: 'Misc'
}

export interface Reasons_All {
  __kind: 'All'
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
}

export type Event = Event_System | Event_Grandpa | Event_Balances | Event_TransactionPayment | Event_Sudo | Event_Zeropool

export interface Event_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Event_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaEvent
}

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Event_TransactionPayment {
  __kind: 'TransactionPayment'
  value: TransactionPaymentEvent
}

export interface Event_Sudo {
  __kind: 'Sudo'
  value: SudoEvent
}

export interface Event_Zeropool {
  __kind: 'Zeropool'
  value: ZeropoolEvent
}

export interface Type_58 {
  normal: number
  operational: number
  mandatory: number
}

export interface Type_54 {
  normal: WeightsPerClass
  operational: WeightsPerClass
  mandatory: WeightsPerClass
}

export interface Type_82 {
  roundNumber: bigint
  identity: Uint8Array
  first: [Prevote, Uint8Array]
  second: [Prevote, Uint8Array]
}

export interface Type_88 {
  roundNumber: bigint
  identity: Uint8Array
  first: [Precommit, Uint8Array]
  second: [Precommit, Uint8Array]
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  dispatchError: DispatchError
  dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  sender: Uint8Array
  hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
  __kind: 'NewAuthorities'
  authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
  __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
  __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  account: Uint8Array
  freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  account: Uint8Array
  amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  who: Uint8Array
  free: bigint
  reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
  destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
  __kind: 'Withdraw'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
  __kind: 'Slashed'
  who: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
  __kind: 'TransactionFeePaid'
  who: Uint8Array
  actualFee: bigint
  tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  sudoResult: Result<null, DispatchError>
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  sudoResult: Result<null, DispatchError>
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ZeropoolEvent = ZeropoolEvent_VerificationKeySet | ZeropoolEvent_VerificationKeyUpdated | ZeropoolEvent_VerificationSuccessful | ZeropoolEvent_VerificationFailed

export interface ZeropoolEvent_VerificationKeySet {
  __kind: 'VerificationKeySet'
  value: Uint8Array
}

export interface ZeropoolEvent_VerificationKeyUpdated {
  __kind: 'VerificationKeyUpdated'
  value: Uint8Array
}

export interface ZeropoolEvent_VerificationSuccessful {
  __kind: 'VerificationSuccessful'
  value: Uint8Array
}

export interface ZeropoolEvent_VerificationFailed {
  __kind: 'VerificationFailed'
  value: Uint8Array
}

export interface WeightsPerClass {
  baseExtrinsic: bigint
  maxExtrinsic: (bigint | undefined)
  maxTotal: (bigint | undefined)
  reserved: (bigint | undefined)
}

export interface Prevote {
  targetHash: Uint8Array
  targetNumber: number
}

export interface Precommit {
  targetHash: Uint8Array
  targetNumber: number
}
