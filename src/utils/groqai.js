const Groq = require("groq-sdk");

const groqai = new Groq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY, 
    dangerouslyAllowBrowser: true,
});

export default groqai;