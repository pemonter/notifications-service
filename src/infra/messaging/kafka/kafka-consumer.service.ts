import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['internal-tapir-6983-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aW50ZXJuYWwtdGFwaXItNjk4MyQisLhEOQBgm1MrHPnaHBTCDRO5jTUXvlr24WE',
          password:
            'ezfohV4PZ2hPrmCsIIeiWytgKqQ_CETtNcSPeGU9JOaEtUXjhIJMk46C2cJAdel989d6wA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
