import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Cloud In December CICD v1.5';
  }

  checkHealth(): string {
    return 'okay';
  }
}
