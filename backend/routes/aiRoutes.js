import express from "express";

import axios from "axios";

const router = express.Router();

router.post("/sentiment", async (req, res) => {
    try {
        const { text } = req.body;

        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `Analyze the sentiment of this text: "${text}". Respond only with Positive, Negative, or Neutral and a confidence score.`,
                            },
                        ],
                    },
                ],
            }
        );

        const aiResult = response.data.candidates[0].content.parts[0].text || "No result";

        res.json({ sentiment: aiResult });

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});


export default router;