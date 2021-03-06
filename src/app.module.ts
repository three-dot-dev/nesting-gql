import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { TypeOrmModule } from "@nestjs/typeorm"

import { UserModule } from "./user/user.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { typeOrmConfig } from "./config"
import { PokemonModule } from "pokemon/pokemon.module"

@Module({
    imports: [
        UserModule,
        PokemonModule,
        GraphQLModule.forRoot({
            autoSchemaFile: "schema.gql",
            debug: true,
            playground: true,
            context: ({ req }) => ({ headers: req.headers })
        }),
        TypeOrmModule.forRoot(typeOrmConfig)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
