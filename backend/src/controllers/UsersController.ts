import { Request, response, Response } from "express";
import { getRepository, Repository } from "typeorm";
import userModel from "../models/UserModel";
import usersView from "../views/users_view";
import * as Yup from "yup";

export default {

    async restore(request: Request, response: Response) {
        const { id } = request.params;
        const user = await getRepository(userModel).restore(id)
            if (user) {
                await getRepository(userModel).findOne(id)
                return response.status(200).json("User restored.")
            }
        return response.status(404).json("Id not found!");
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const user = await getRepository(userModel).findOne(id)
            if (user) {
                await getRepository(userModel).softDelete(id)
                return response.status(200).json("User deleted.")
            }
        return response.status(404).json("Id not found!");
    },

    async update(request: Request, response: Response) {
        let {
            userName,
            name,
            email,
            password,
        } = request.body;

        if ( (userName && name && email && password) == null)  {
                 return response.status(404).json("No new data for update.");
            };
        const { id } = request.params;
        const usersRepository = getRepository(userModel);
        const user = await usersRepository.findOne(id);
        if (user) {
            getRepository(userModel).merge(user, request.body);
            const results = await getRepository(userModel).save(user);
            return response.status(200).json(results)
        }
        return response.status(404).json("User not found.");
    },

    async index(request: Request, response: Response) {
        // const usersRepository = getRepository(userModel);
        // const users = await usersRepository.find();
        // return response.json(usersView.renderMany(users));
        return response.send({ userId: request.userId});

    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const usersRepository = getRepository(userModel);
        const user = await usersRepository.findOne(id);
        if (user) {
            return response.json(usersView.render(user));
        }
        return response.status(404).json("User not found");
    },

    async create(request: Request, response: Response) {
        let {
            userName,
            name,
            email,
            password,
        } = request.body;
        
        userName = userName.toLowerCase()
        email = email.toLowerCase()
       

        const usersRepository = getRepository(userModel);

        const userNameExists = await usersRepository.findOne({ where: {userName} });
        if (userNameExists) {
            return response.status(409).json("This username already exists.");
        };

        const emailExists = await usersRepository.findOne({ where: {email} });
        if (emailExists) {
            return response.status(409).json("This email already exists.");
        }
        
        const data = {
            userName,
            name,
            email,
            password,
        };

        const schema = Yup.object().shape({
            userName: Yup.string().required('Title required.'),
            name: Yup.string().required('Name required.'),
            email: Yup.string().required('Email required.'),
            password: Yup.string().required('Password required.'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });


        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return response.status(201).json(user);
    }

}