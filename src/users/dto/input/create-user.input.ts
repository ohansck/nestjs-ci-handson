import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsArray, IsEmail } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    age: number;
}