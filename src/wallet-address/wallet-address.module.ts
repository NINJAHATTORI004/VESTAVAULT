import { Module } from '@nestjs/common';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddressService } from './wallet-address.service';

@Module({
  controllers: [WalletAddressController],
  providers: [WalletAddressService]
})
export class WalletAddressModule {}
