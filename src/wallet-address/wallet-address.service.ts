import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  async findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<WalletAddress> {
    const walletAddress = await this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
    if (!walletAddress) {
      throw new NotFoundException(`WalletAddress with ID ${id} not found`);
    }
    return walletAddress;
  }

  async create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = this.walletAddressRepository.create(createWalletAddressDto);
    return this.walletAddressRepository.save(walletAddress);
  }

  async update(id: number, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = await this.walletAddressRepository.preload({
      id: +id,
      ...updateWalletAddressDto,
    });
    if (!walletAddress) {
      throw new NotFoundException(`WalletAddress with ID ${id} not found`);
    }
    return this.walletAddressRepository.save(walletAddress);
  }

  async remove(id: number): Promise<void> {
    const walletAddress = await this.findOne(id);
    await this.walletAddressRepository.remove(walletAddress);
  }
}
