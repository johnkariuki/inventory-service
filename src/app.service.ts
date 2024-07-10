import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inventory } from './schemas/inventory.schema';
import { Model } from 'mongoose';
import { filter } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,
    private readonly httpService: HttpService
  ) { }

  async create(body: Inventory): Promise<Inventory> {
    const inventoryModel = new this.inventoryModel(body);

    const inventory = await inventoryModel.save();
    this.notify(inventory);
    return inventory;
  }

  async update(id: string, body: Inventory): Promise<any> {
    const filter = { _id: id };
    const update = { level: body.level };

    await this.inventoryModel.findOneAndUpdate(filter, update);
    const inventory = await this.inventoryModel.findById({ _id: id }).exec();
    this.notify(inventory);
    return inventory;
  }

  notify(inventory: Inventory): void {
    const threshold = process.env.INVENTORY_THRESHOLD as any;
    if (inventory.level <= threshold) {
      //webhook
      this.httpService.post('https://webhook.site/a5d631c4-fe61-4ba6-8502-6a3327c294f1', inventory).subscribe({
        complete: () => {
          console.log('webhook sent');
        },
      })
    }
  }
}
