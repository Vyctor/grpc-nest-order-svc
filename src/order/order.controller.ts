import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { CreateOrderResponse, ORDER_SERVICE_NAME } from './proto/order.pb';
import { CreateOrderRequestDto } from './order.dto';

@Controller('order')
export class OrderController {
  @Inject(OrderService)
  private readonly orderService: OrderService;

  @GrpcMethod(ORDER_SERVICE_NAME, 'CreateOrder')
  private async createOrder(
    data: CreateOrderRequestDto,
  ): Promise<CreateOrderResponse> {
    return this.orderService.createOrder(data);
  }
}
