import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v1 from './v1'

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
   *  A balance was set by root. \[who, free, reserved\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === 'a92387f1d03520a08b7b8b2bd39101b3bf212601aee60d919bafc081c8114fba'
  }

  /**
   *  A balance was set by root. \[who, free, reserved\]
   */
  get asV1(): [Uint8Array, bigint, bigint] {
    assert(this.isV1)
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
   *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === '0e37f078ad12c4f4d8487983ae310090f9f2bd53a38c24504ef6d3afcaf262a7'
  }

  /**
   *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
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
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss. \[account, balance\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '0e37f078ad12c4f4d8487983ae310090f9f2bd53a38c24504ef6d3afcaf262a7'
  }

  /**
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss. \[account, balance\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
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
   *  An account was created with some free balance. \[account, free_balance\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '0e37f078ad12c4f4d8487983ae310090f9f2bd53a38c24504ef6d3afcaf262a7'
  }

  /**
   *  An account was created with some free balance. \[account, free_balance\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
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
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   *  \[from, to, balance, destination_status\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '0181767890ada7f7e202ecaaf7ad2d245bf71f0ee12cad948f2052e17b7f5cba'
  }

  /**
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   *  \[from, to, balance, destination_status\]
   */
  get asV1(): [Uint8Array, Uint8Array, bigint, v1.BalanceStatus] {
    assert(this.isV1)
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
   *  Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === '0e37f078ad12c4f4d8487983ae310090f9f2bd53a38c24504ef6d3afcaf262a7'
  }

  /**
   *  Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
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
   *  Transfer succeeded. \[from, to, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '7c4c06f3385f324a5f2af348540ac6d2812cfe98ea41b1b1cd0320630f9dea6c'
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get asV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1)
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
   *  Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === '0e37f078ad12c4f4d8487983ae310090f9f2bd53a38c24504ef6d3afcaf262a7'
  }

  /**
   *  Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
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
   *  New authority set has been applied. \[authority_set\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Grandpa.NewAuthorities') === 'c4aff0bdb95bdbbfba49eebdc5a85bb501d011289965abfa3cb48643e1d2073e'
  }

  /**
   *  New authority set has been applied. \[authority_set\]
   */
  get asV1(): [Uint8Array, bigint][] {
    assert(this.isV1)
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
   *  Current authority set has been paused.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Current authority set has been paused.
   */
  get asV1(): null {
    assert(this.isV1)
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
   *  Current authority set has been resumed.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Current authority set has been resumed.
   */
  get asV1(): null {
    assert(this.isV1)
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
   *  The \[sudoer\] just switched identity; the old key is supplied.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  /**
   *  The \[sudoer\] just switched identity; the old key is supplied.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
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
   *  A sudo just took place. \[result\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === '6c4668c24588d31e73eba9c1b2a2561e09ac981a1ceb3c9fefab4194ae44ffd4'
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get asV1(): Result<null, v1.DispatchError> {
    assert(this.isV1)
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
   *  A sudo just took place. \[result\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get asV1(): boolean {
    assert(this.isV1)
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
   *  `:code` was updated.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  `:code` was updated.
   */
  get asV1(): null {
    assert(this.isV1)
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
   *  An extrinsic failed. \[error, info\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '8f2e90e6aab8eb714300f529bf2c1959ca0fa57534b7afcfe92932be302ba337'
  }

  /**
   *  An extrinsic failed. \[error, info\]
   */
  get asV1(): [v1.DispatchError, v1.DispatchInfo] {
    assert(this.isV1)
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
   *  An extrinsic completed successfully. \[info\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
  }

  /**
   *  An extrinsic completed successfully. \[info\]
   */
  get asV1(): v1.DispatchInfo {
    assert(this.isV1)
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
   *  An \[account\] was reaped.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  /**
   *  An \[account\] was reaped.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
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
   *  A new \[account\] was created.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.NewAccount') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  /**
   *  A new \[account\] was created.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationFailed') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  get asV1(): Uint8Array {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationKeySet') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  get asV1(): Uint8Array {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationKeyUpdated') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  get asV1(): Uint8Array {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getEventHash('Zeropool.VerificationSuccessful') === 'eb9997d9c1efd657b7dcdde022306856c9b02bf7525aedce4da606a1313d2673'
  }

  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}
