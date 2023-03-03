import { IsNotEmpty } from 'class-validator';

export class CreateMemberBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty({
    message: 'The member funtion shoul not be empty',
  })
  function: string;
}
