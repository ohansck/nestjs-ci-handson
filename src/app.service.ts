import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Cloud In December CICD v1.5';
=======
    return 'Cloud In December CICD v2.0';
>>>>>>> main
  }

  checkHealth(): string {
    return 'okay';
  }
}
