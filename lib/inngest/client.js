import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "pocketmind", 
    name: "PocketMind" ,
    retryFunction: async (attempt) => ({
        delay: Math.pow(2, attempt) * 1000, // delay in milliseconds
        maxAttempts: 2,
    })
});
