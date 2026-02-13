import { parseMedicalRequest } from "./ai-model.ts";

export const parsePatientText = async (textMessage: string) => {
    try {

        if (!textMessage || typeof textMessage !== "string" || textMessage.trim() === "") {
            throw new Error("Invalid input: textMessage must be a non-empty string");
        }

        const result = await parseMedicalRequest(textMessage.trim());
        return result;
    } catch (error) {
        console.error("Error in service:", error);
        throw new Error("Failed to parse patient request");
    }
};
