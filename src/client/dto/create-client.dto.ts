import { IsBoolean, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    details: string;

    @IsString()
    phone: string;
}
