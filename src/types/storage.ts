import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v100 from './v100'

export class AuraAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current authority set.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Aura', 'Authorities') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current authority set.
   */
  async getAsV100(): Promise<Uint8Array[]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Aura', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Aura', 'Authorities') != null
  }
}

export class AuraCurrentSlotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current slot of this block.
   * 
   *  This will be set in `on_initialize`.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Aura', 'CurrentSlot') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The current slot of this block.
   * 
   *  This will be set in `on_initialize`.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Aura', 'CurrentSlot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Aura', 'CurrentSlot') != null
  }
}

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountData> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.AccountData)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV100(key: Uint8Array): Promise<v100.BalanceLock[]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.BalanceLock[])[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') != null
  }
}

export class BalancesReservesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Named reserves on some account balances.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV100(key: Uint8Array): Promise<v100.ReserveData[]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Reserves', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.ReserveData[])[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') != null
  }
}

export class BalancesStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV100(): Promise<v100.Releases> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class GrandpaCurrentSetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'CurrentSetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') != null
  }
}

export class GrandpaNextForcedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  next block number where we can force a change.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'NextForced') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  next block number where we can force a change.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'NextForced')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'NextForced') != null
  }
}

export class GrandpaPendingChangeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  async getAsV100(): Promise<v100.StoredPendingChange | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'PendingChange')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') != null
  }
}

export class GrandpaSetIdSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  async getAsV100(key: bigint): Promise<number | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'SetIdSession', key)
  }

  async getManyAsV100(keys: bigint[]): Promise<(number | undefined)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Grandpa', 'SetIdSession', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') != null
  }
}

export class GrandpaStalledStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  `true` if we are currently stalled.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'Stalled') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  `true` if we are currently stalled.
   */
  async getAsV100(): Promise<[number, number] | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'Stalled')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'Stalled') != null
  }
}

export class GrandpaStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  State of the current authority set.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'State') === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
  }

  /**
   *  State of the current authority set.
   */
  async getAsV100(): Promise<v100.StoredState> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'State')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'State') != null
  }
}

export class RandomnessCollectiveFlipRandomMaterialStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  async getAsV100(): Promise<Uint8Array[]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'RandomnessCollectiveFlip', 'RandomMaterial')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') != null
  }
}

export class SudoKeyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV100(): Promise<Uint8Array | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountInfo> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<(v100.AccountInfo)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAllExtrinsicsLenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
  }
}

export class SystemBlockHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of block numbers to block hashes.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsV100(key: number): Promise<Uint8Array> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockHash', key)
  }

  async getManyAsV100(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') != null
  }
}

export class SystemBlockWeightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current weight for the block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV100(): Promise<v100.PerDispatchClass> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') != null
  }
}

export class SystemDigestStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV100(): Promise<v100.Digest> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Digest') != null
  }
}

export class SystemEventCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsV100(): Promise<number> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'EventCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') != null
  }
}

export class SystemEventTopicsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  async getAsV100(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<([number, number][])[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') != null
  }
}

export class SystemEventsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: The item is unbound and should therefore never be read on chain.
   *  It could otherwise inflate the PoV size of a block.
   * 
   *  Events have a large in-memory size. Box the events to not go out-of-memory
   *  just in case someone still reads them from within the runtime.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '1db48a1a28fc00dfdf72795091d8003fcaf0367c84ae4e8d0dcbc62b3945d98b'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: The item is unbound and should therefore never be read on chain.
   *  It could otherwise inflate the PoV size of a block.
   * 
   *  Events have a large in-memory size. Box the events to not go out-of-memory
   *  just in case someone still reads them from within the runtime.
   */
  async getAsV100(): Promise<v100.EventRecord[]> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Events') != null
  }
}

export class SystemExecutionPhaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The execution phase of the block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV100(): Promise<v100.Phase | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') != null
  }
}

export class SystemExtrinsicCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total extrinsics count for the current block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') != null
  }
}

export class SystemExtrinsicDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsV100(key: number): Promise<Uint8Array> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicData', key)
  }

  async getManyAsV100(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
  }
}

export class SystemLastRuntimeUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsV100(): Promise<v100.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}

export class SystemNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsV100(): Promise<number> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'Number')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Number') != null
  }
}

export class SystemParentHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Hash of the previous block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsV100(): Promise<Uint8Array> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') != null
  }
}

export class SystemUpgradedToTripleRefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToTripleRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') != null
  }
}

export class SystemUpgradedToU32RefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class TimestampDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') != null
  }
}

export class TimestampNowStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current time for the current block.
   */
  get isV100() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'Now')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') != null
  }
}

export class TransactionPaymentNextFeeMultiplierStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV100() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') != null
  }
}

export class TransactionPaymentStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV100() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
  }

  async getAsV100(): Promise<v100.Type_108> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') != null
  }
}

export class ZeropoolVerificationKeyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV100() {
    return this._chain.getStorageItemTypeHash('Zeropool', 'VerificationKey') === '2057524b406c0da066a71270ca14868d7d6ec1450784f1c659ab6e5726329a76'
  }

  async getAsV100(key: Uint8Array): Promise<[Uint8Array, bigint] | undefined> {
    assert(this.isV100)
    return this._chain.getStorage(this.blockHash, 'Zeropool', 'VerificationKey', key)
  }

  async getManyAsV100(keys: Uint8Array[]): Promise<([Uint8Array, bigint] | undefined)[]> {
    assert(this.isV100)
    return this._chain.queryStorage(this.blockHash, 'Zeropool', 'VerificationKey', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Zeropool', 'VerificationKey') != null
  }
}
