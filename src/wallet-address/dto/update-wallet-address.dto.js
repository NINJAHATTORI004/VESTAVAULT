"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWalletAddressDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wallet_address_dto_1 = require("./create-wallet-address.dto");
class UpdateWalletAddressDto extends (0, mapped_types_1.PartialType)(create_wallet_address_dto_1.CreateWalletAddressDto) {
}
exports.UpdateWalletAddressDto = UpdateWalletAddressDto;
