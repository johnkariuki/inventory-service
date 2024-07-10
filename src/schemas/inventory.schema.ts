import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type InventoryDocument = HydratedDocument<Inventory>

@Schema({ collection: 'inventory', timestamps: true })
export class Inventory {
    @Prop()
    level: number
}

export const InventorySchema = SchemaFactory.createForClass(Inventory)