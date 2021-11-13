import { Request, response, Response } from "express";
import { getRepository } from "typeorm";
import cardModel from "../models/CardModel";
import * as Yup from "yup";
import columnModel from "../models/ColumnModel";

export default {

    async restore(request: Request, response: Response) {
        const { id } = request.params;
        const cardId = id
        const card = await getRepository(cardModel).restore(cardId)
            if (card) {
                await getRepository(cardModel).findOne(cardId)
                return response.status(200).json("card restored.")
            }
        return response.status(404).json("Card id not found!");
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const cardId = id
        const card = await getRepository(cardModel).findOne(cardId)
            if (card) {
                await getRepository(cardModel).softDelete(cardId)
                return response.status(200).json("card deleted.")
            }
        return response.status(404).json("Card id not found!");
    },

    async update(request: Request, response: Response) {
        let {
            title,
            description,
            tags,
            priority,
        } = request.body;

        if ( (title && description && tags && priority ) == null)  {
                 return response.status(404).json("No new data for update.");
            };
        const { id } = request.params;
        const cardId = id
        const cardsRepository = getRepository(cardModel);
        const card = await cardsRepository.findOne(cardId);
        if (card) {
            getRepository(cardModel).merge(card, request.body);
            const results = await getRepository(cardModel).save(card);
            return response.json(results)
        }
        return response.status(404).json("Card not found.");
    },

    async index(request: Request, response: Response) {
        const { id } = request.params;
        const columnsRepository = getRepository(columnModel);
        const column = await columnsRepository.findOne(id)
        const cardsRepository = getRepository(cardModel);
        const cards = await cardsRepository.find({ where: {columnId:id}});
        if (column) {
            return response.status(200).json(cards)
        }
        return response.status(404).json("Column id not found");
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const cardId = id
        const cardsRepository = getRepository(cardModel);
        const card = await cardsRepository.findOne(cardId);
        if (card) {
            return response.status(200).json(card)
        }
        return response.status(404).json("Card not found");
    },

    async create(request: Request, response: Response) {
        const {
            title,
            description,
            tags,
            priority,
            columnId,
        } = request.body;

        const cardsRepository = getRepository(cardModel);

        const data = {
            title,
            description,
            tags,
            priority,
            columnId,
        };

        const schema = Yup.object().shape({
            title: Yup.string().required('Title required.'),
            description: Yup.string().required('Description required.'),
            tags: Yup.string().required('Tags required.'),
            priority: Yup.string().required('Priority required.'),
            columnId: Yup.string().required('ColumnId required.'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const card = cardsRepository.create(data);

        await cardsRepository.save(card);

        return response.status(201).json(card);
    }

}