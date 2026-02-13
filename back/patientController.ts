import type { Request, Response } from "express";
import { parsePatientText } from "./patientService.ts";

export const getPatientInfo = async (req: Request, res: Response) => {
    try {
        const textMessage: string = req.body.textMessage;
        const result = await parsePatientText(textMessage);
        return res.json(result);
    } catch (error) {
        console.error("Controller error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
