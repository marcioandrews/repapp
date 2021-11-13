import { json, Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import userModel from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {

    async authenticate(request: Request, response: Response) {
        const usersRepository = getRepository(userModel);
            let {
                login,
                password,
            } = request.body;
            
            const result = login.indexOf("@") > -1;
            
            if (result) {
                let email = login 
                if ( email != (null || "")) {
                    email = email.toLowerCase();
                    console.log("email")
                    const userEmail = await usersRepository.findOne({ where: { email }});
                    
                    
                    if (!userEmail) {
                        return response.status(401).json("Invalid username.");
                    }
                    const isValidPassword = await bcrypt.compare(password, userEmail.password);
                    if(!isValidPassword) {
                        return response.status(401).json("Invalid password.");
                    }
                    const token = jwt.sign({id: userEmail.id}, '@uhjiihh2324jnsd', { expiresIn: '1d'});
                    
                    return response.json({
                        userEmail,
                        token,
                    });
                }
            }
            if (!result) {
                let userName = login 
                if ( userName != (null || "")) {
                    userName = userName.toLowerCase();
                    console.log("user")
                    const userUserName = await usersRepository.findOne({ where: { userName }});
                    
                    
                    if (!userUserName) {
                        return response.status(401).json("Invalid username.");
                    }
                    const isValidPassword = await bcrypt.compare(password, userUserName.password);
                    if(!isValidPassword) {
                        return response.status(401).json("Invalid password.");
                    }
                    const token = jwt.sign({id: userUserName.id}, '@uhjiihh2324jnsd', { expiresIn: '1d'});
                    
                    return response.json({
                        userUserName,
                        token,
                    });
                }
            }
    
            return response.status(401).json("Preencha o campo de login");
        }
    }