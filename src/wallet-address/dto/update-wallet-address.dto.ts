import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletAddressDto } from './create-wallet-address.dto';

export class UpdateWalletAddressDto extends PartialType(CreateWalletAddressDto) {}
