import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Extrinsic {
  constructor(props?: Partial<Extrinsic>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: false})
  txHash!: string

  @Index_()
  @Column_("text", {nullable: false})
  module!: string

  @Index_()
  @Column_("text", {nullable: false})
  call!: string

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockHeight!: bigint

  @Column_("bool", {nullable: false})
  success!: boolean

  @Column_("bool", {nullable: false})
  isSigned!: boolean
}
