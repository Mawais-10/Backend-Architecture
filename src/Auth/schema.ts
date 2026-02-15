import z from "zod";
import { Header } from "./utils";

export const appischema = z.object({
    apikey: z.object({
        [Header.API_KEY]: z.string().min(1, "API key is required")
    }),
})