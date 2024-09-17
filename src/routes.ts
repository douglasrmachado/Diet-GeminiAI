import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) =>{
        
        let responseText = "```json\n{\n  \"nome\": \"Douglas\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 22,\n  \"altura\": 1.74,\n  \"peso\": 97,\n  \"objetivo\": \"Emagrecimento\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 ovo cozido\",\n        \"1 xícara de café com leite desnatado\",\n        \"1 banana\",\n        \"1 colher de sopa de granola\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n          \"1 iogurte natural desnatado com 1 colher de sopa de granola\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"100g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"1 porção de salada verde com azeite de oliva e vinagre\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 maça\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"1 filé de peixe grelhado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Ceia\",\n      \"alimentos\": [\n        \"1 iogurte natural desnatado com 1 colher de sopa de chia\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteína do soro do leite\",\n    \"Creatina\",\n    \"Ômega 3\"\n  ]\n}\n```"

        try{
            
            //Extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
            
            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject });

        
        }catch(err){
            console.log(err)
        }

        reply.send({ ok: true})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}