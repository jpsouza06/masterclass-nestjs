import { Body, Controller, Post } from '@nestjs/common';

import { CreateMemberBody } from './dtos/create-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);

    // const member = await this.prisma.member.create({
    //   data: {
    //     id: randomUUID(),
    //     name: name,
    //     function: memberFunction,
    //   },
    // });
  }
}
