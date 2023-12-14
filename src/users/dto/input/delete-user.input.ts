import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsArray, IsOptional } from "class-validator";

@InputType()
export class DeleteUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
}