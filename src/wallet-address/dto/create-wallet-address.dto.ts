import { IsString, IsInt } from 'class-validator';

export class CreateWalletAddressDto {
  @IsInt()
  user_id: number;

  @IsString()
  address: string;

  @IsString()
  type: string;
}
