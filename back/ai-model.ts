import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config(); 

const client = new OpenAI({
    apiKey: process.env.MODEL_AI,
    baseURL: "https://router.huggingface.co/v1",
});

export async function parseMedicalRequest(transcript: string) {
    const prompt = `
Extract the following info from this transcript:
- Name
- Date of birth (YYYY-MM-DD)
- Callback phone number
- Reason for call
- Urgency (high if medical emergency, medium otherwise)

Output ONLY valid JSON.

Transcript: "${transcript}"
`;

    try {
        const completion = await client.chat.completions.create({
            model: "moonshotai/Kimi-K2-Instruct-0905",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const aiText = completion.choices[0].message.content;

        if (!aiText) {
            console.warn("AI returned null or empty text");
            return {};
        }

        try {
            return JSON.parse(aiText);
        } catch (jsonErr) {
            console.warn("AI output was not valid JSON, returning raw text:");
            return { raw: aiText };
        }
    } catch (err: any) {
        console.error("Error parsing medical request:", err);
        return {};
    }
}

