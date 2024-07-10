import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Inventory } from './schemas/inventory.schema';

@Controller('inventory')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  create(@Body() inventory: Inventory): Promise<Inventory> {
    return this.appService.create(inventory);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Inventory): Promise<Inventory> {
    return this.appService.update(id, body)
  }
}
