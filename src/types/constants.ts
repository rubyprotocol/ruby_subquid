import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1 from './v1'

export class BalancesExistentialDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('Balances', 'ExistentialDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
  }
}

export class SystemBlockExecutionWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base weight of executing a block, independent of the transactions in the block.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'BlockExecutionWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The base weight of executing a block, independent of the transactions in the block.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('System', 'BlockExecutionWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockExecutionWeight') != null
  }
}

export class SystemBlockHashCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of blocks to allow in mortal eras.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of blocks to allow in mortal eras.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.getConstant('System', 'BlockHashCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
  }
}

export class SystemDbWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get asV1(): v1.RuntimeDbWeight {
    assert(this.isV1)
    return this._chain.getConstant('System', 'DbWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'DbWeight') != null
  }
}

export class SystemExtrinsicBaseWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'ExtrinsicBaseWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('System', 'ExtrinsicBaseWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'ExtrinsicBaseWeight') != null
  }
}

export class SystemMaximumBlockLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'MaximumBlockLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.getConstant('System', 'MaximumBlockLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'MaximumBlockLength') != null
  }
}

export class SystemMaximumBlockWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum weight of a block.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('System', 'MaximumBlockWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The maximum weight of a block.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('System', 'MaximumBlockWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'MaximumBlockWeight') != null
  }
}

export class TimestampMinimumPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected* period
   *  that the block production apparatus provides. Your chosen consensus system will generally
   *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
   *  period on default settings.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected* period
   *  that the block production apparatus provides. Your chosen consensus system will generally
   *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
   *  period on default settings.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('Timestamp', 'MinimumPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
  }
}

export class TransactionPaymentTransactionByteFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The fee to be paid for making a transaction; the per-byte portion.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The fee to be paid for making a transaction; the per-byte portion.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('TransactionPayment', 'TransactionByteFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') != null
  }
}

export class TransactionPaymentWeightToFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The polynomial that is applied in order to derive fee from weight.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
  }

  /**
   *  The polynomial that is applied in order to derive fee from weight.
   */
  get asV1(): v1.WeightToFeeCoefficient[] {
    assert(this.isV1)
    return this._chain.getConstant('TransactionPayment', 'WeightToFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') != null
  }
}

export class ZeropoolMaxLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length a proof may be.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('Zeropool', 'MaxLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length a proof may be.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.getConstant('Zeropool', 'MaxLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Zeropool', 'MaxLength') != null
  }
}

export class ZeropoolMinLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum length a proof may be.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('Zeropool', 'MinLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum length a proof may be.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.getConstant('Zeropool', 'MinLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Zeropool', 'MinLength') != null
  }
}

export class ZeropoolReservationFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Reservation fee.
   */
  get isV1() {
    return this._chain.getConstantTypeHash('Zeropool', 'ReservationFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Reservation fee.
   */
  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.getConstant('Zeropool', 'ReservationFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Zeropool', 'ReservationFee') != null
  }
}
