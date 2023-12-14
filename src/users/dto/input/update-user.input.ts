import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsArray, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    @IsOptional()
    age?: number;

    @Field({ nullable: true })
    @IsOptional()
    isSubscribed?: boolean
}