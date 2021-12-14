import { Request, response, Response } from "express";
import { Column, getRepository } from "typeorm";
import columnModel from "../models/ColumnModel";
import * as Yup from "yup";
import userModel from "../models/UserModel";

export default {

    async restore(request: Request, response: Response) {
        const { id } = request.params;
        const column = await getRepository(columnModel).restore(id)
            if (column) {
                await getRepository(columnModel).findOne(id)
                return response.status(200).json("Column restored.")
            }
        return response.status(404).json("Id not found!");
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const column = await getRepository(columnModel).findOne(id)
            if (column) {
                await getRepository(columnModel).softDelete(id)
                return response.status(200).json("Column deleted.")
            }
        return response.status(404).json("Id not found!");
    },

    async update(request: Request, response: Response) {
        let {
            title,
        } = request.body;

        if ( (title) == null)  {
                 return response.status(404).json("No new data for update.");
            };
        const { id } = request.params;
        const columnsRepository = getRepository(columnModel);
        const column = await columnsRepository.findOne(id);
        if (column) {
            getRepository(columnModel).merge(column, request.body);
            const results = await getRepository(columnModel).save(column);
            return response.json(results)
        }
        return response.status(404).json("User not found.");
    },

    async index(request: Request, response: Response) {
        const { id } = request.params;
        const usersRepository = getRepository(userModel);
        const user = await usersRepository.findOne(id);
        const columnsRepository = getRepository(columnModel);
        const columns = await columnsRepository.find({ where: {userId:id}, relations: ['cards']})
        if (user) {
            return response.status(200).json(columns)
        }
        return response.status(404).json("User id not found");
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const columnsRepository = getRepository(columnModel);
        const column = await columnsRepository.findOne(id, {
            relations: ['cards']
        });
        if (column) {
            return response.status(200).json(column)
        }
        return response.status(404).json("Column not found");
    },

    async create(request: Request, response: Response) {
        const {
            title,
            userId,
        } = request.body;

        const columnsRepository = getRepository(columnModel);

        const data = {
            title,
            userId,
        };

        const schema = Yup.object().shape({
            title: Yup.string().required('Title required.'),
            userId: Yup.string().required('Id required.'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const column = columnsRepository.create(data);
        await columnsRepository.save(column);
        const getColumnsRepository = getRepository(columnModel);
        const columnRes = await getColumnsRepository.findOne(column.id, {
            relations: ['cards']
        });
        return response.status(201).json(columnRes);

    }
}