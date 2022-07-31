import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v100 from './v100'

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asV100(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV100(): {who: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV100(): {account: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asV100(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV100(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v100.BalanceStatus} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV100(): {who: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV100(): {who: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV100(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV100(): {who: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV100(): {who: Uint8Array, amount: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class GrandpaNewAuthoritiesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Grandpa.NewAuthorities')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New authority set has been applied.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
  }

  /**
   * New authority set has been applied.
   */
  get asV100(): {authoritySet: [Uint8Array, bigint][]} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class GrandpaPausedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Grandpa.Paused')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Current authority set has been paused.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Current authority set has been paused.
   */
  get asV100(): null {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class GrandpaResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Grandpa.Resumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Current authority set has been resumed.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Current authority set has been resumed.
   */
  get asV100(): null {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get asV100(): {oldSudoer: (Uint8Array | undefined)} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.Sudid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === '790144505f3238f63eeea8b351d8b0c3c90a3b9cd88e7ee262cd9b81c35d80c6'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV100(): {sudoResult: Result<null, v100.DispatchError>} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudoAsDoneEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.SudoAsDone')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV100(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === '790144505f3238f63eeea8b351d8b0c3c90a3b9cd88e7ee262cd9b81c35d80c6'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV100(): {sudoResult: Result<null, v100.DispatchError>} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.CodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `:code` was updated.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * `:code` was updated.
   */
  get asV100(): null {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic failed.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
  }

  /**
   * An extrinsic failed.
   */
  get asV100(): {dispatchError: v100.DispatchError, dispatchInfo: v100.DispatchInfo} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic completed successfully.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV100(): {dispatchInfo: v100.DispatchInfo} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemKilledAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.KilledAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was reaped.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account was reaped.
   */
  get asV100(): {account: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemNewAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.NewAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new account was created.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * A new account was created.
   */
  get asV100(): {account: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemRemarkedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.Remarked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * On on-chain remark happened.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
  }

  /**
   * On on-chain remark happened.
   */
  get asV100(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class TransactionPaymentTransactionFeePaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TransactionPayment.TransactionFeePaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get isV100(): boolean {
    return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get asV100(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZeropoolVerificationFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Zeropool.VerificationFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV100(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationFailed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV100(): Uint8Array {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZeropoolVerificationKeySetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Zeropool.VerificationKeySet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV100(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationKeySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV100(): Uint8Array {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZeropoolVerificationKeyUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Zeropool.VerificationKeyUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV100(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationKeyUpdated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV100(): Uint8Array {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZeropoolVerificationSuccessfulEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Zeropool.VerificationSuccessful')
    this._chain = ctx._chain
    this.event = event
  }

  get isV100(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationSuccessful') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV100(): Uint8Array {
    assert(this.isV100)
    return this._chain.decodeEvent(this.event)
  }
}
