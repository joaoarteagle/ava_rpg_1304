import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.provicers";


@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule{}