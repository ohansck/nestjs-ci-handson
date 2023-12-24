import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Cloud In December CICD v2.0';
  }

  checkHealth(): string {
    return 'okay';
  }
}
