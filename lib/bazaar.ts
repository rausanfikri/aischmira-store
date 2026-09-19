import { z } from "zod";
const mapsUrl = z.string().url().refine(value => {
    const url = new URL(value);
    return url.protocol === "https:" && ["maps.google.com", "www.google.com", "maps.app.goo.gl"].includes(url.hostname);
}, "Use an HTTPS Google Maps URL").nullable();
export const bazaarSchema = z.array(z.object({
    id: z.string().min(1), source: z.enum(["REAL", "DEMO"]),
    name: z.string().min(1), location: z.string().min(1), address: z.string().min(1),
    date: z.iso.date(), startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
    endTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
    timezone: z.string().refine(value => { try {
        new Intl.DateTimeFormat("en", { timeZone: value });
        return true;
    }
    catch {
        return false;
    } }),
    description: z.string(), image: z.string().regex(/^\/images\/[^?]+$/).nullable(),
    status: z.enum(["demo", "published", "inactive"]), mapsLink: mapsUrl,
    mapsEmbed: z.string().url().refine(value => { const url = new URL(value); return url.protocol === "https:" && url.hostname === "www.google.com" && url.pathname.startsWith("/maps/embed"); }).nullable(),
}).strict().refine(event => event.endTime > event.startTime, "End time must follow start time on the same date"));
