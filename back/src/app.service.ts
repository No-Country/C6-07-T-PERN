import { Injectable } from '@nestjs/common';
//Stablish general services for methods
@Injectable()
export class AppService {
  getHello(): string {
    return 'This is Miravos app backend 😜';
  }
}
