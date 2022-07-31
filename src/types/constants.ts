import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v100 from './v100'

export class BalancesExistentialDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get asV100(): bigint {
    assert(this.isV100)
    return this._chain.getConstant('Balances', 'ExistentialDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
  }
}

export class BalancesMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('Balances', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
  }
}

export class BalancesMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('Balances', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
  }
}

export class GrandpaMaxAuthoritiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max Authorities in use
   */
  get isV100() {
    return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max Authorities in use
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('Grandpa', 'MaxAuthorities')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') != null
  }
}

export class SystemBlockHashCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('System', 'BlockHashCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
  }
}

export class SystemBlockLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get asV100(): v100.BlockLength {
    assert(this.isV100)
    return this._chain.getConstant('System', 'BlockLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockLength') != null
  }
}

export class SystemBlockWeightsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'd29c2183888a350ee5f1702b52be3920c60d1d8dd2937c2870d4ec0d78845224'
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get asV100(): v100.BlockWeights {
    assert(this.isV100)
    return this._chain.getConstant('System', 'BlockWeights')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
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
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get asV100(): v100.RuntimeDbWeight {
    assert(this.isV100)
    return this._chain.getConstant('System', 'DbWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'DbWeight') != null
  }
}

export class SystemSS58PrefixConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The designated SS85 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The designated SS85 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('System', 'SS58Prefix')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
  }
}

export class SystemVersionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Get the chain's current version.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
  }

  /**
   *  Get the chain's current version.
   */
  get asV100(): v100.RuntimeVersion {
    assert(this.isV100)
    return this._chain.getConstant('System', 'Version')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'Version') != null
  }
}

export class TimestampMinimumPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get asV100(): bigint {
    assert(this.isV100)
    return this._chain.getConstant('Timestamp', 'MinimumPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
  }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get isV100() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get asV100(): number {
    assert(this.isV100)
    return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
  }
}
