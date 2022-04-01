import e, { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Staff from '../models/Staff';

export const getStaff = async (req: Request, res: Response) => {
    try {
        const staff = await Staff.findAll({});
        if (!staff) {
            return res.status(404).send({ error: "Staff not found" });
        }
        res.status(200).json(staff);
    } catch (error) {
        res.json({ message: error });
    }

}

export const getOneStaff = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const staff = await Staff.findByPk(id);

        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        res.status(200).json(staff)
    } catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }

}

export const createStaff = async (req: Request, res: Response) => {
    try {
        const emailExists = await Staff.findOne({
            where: {
                email: req.body.email
            }
        });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        let info = {
            fullName: req.body.fullName,
            email: req.body.email,
            age: Number(req.body.age)
        };

        const staff = await Staff.create(info);
        res.status(201).json(staff);

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bad request!" });
    }

}

export const editStaff = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const staff = await Staff.findByPk(id);
        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        else {
            await staff.update(req.body)
        }
        res.status(200).json(staff)
    } catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }
}

export const deleteStaff = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const staff = await Staff.findByPk(id);
        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        else {
            await staff.destroy();
        }
        res.status(204).json(staff);
    } catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }
}