import Image from "next/image";
import demo from "@/data/demo-content.json";
import { bazaarSchema } from "@/lib/bazaar";
const events = bazaarSchema.parse(demo.bazaar);
export const metadata = { title: "Bazaar / Visit us" };
function mapsUrl(value: string | null) { if (!value)
    return null; try {
    const u = new URL(value);
    return u.protocol === "https:" && ["maps.google.com", "www.google.com", "maps.app.goo.gl"].includes(u.hostname) ? u.href : null;
}
catch {
    return null;
} }
export default function Page() { return <section className="section"><p className="eyebrow">Beyond the wardrobe</p><h1>Meet AISCHMIRA</h1><p className="intro">A space to discover, feel, and find your own perspective.</p>{events.filter(e => e.status !== "inactive").map(e => { const maps = mapsUrl(e.mapsLink); return <article className="event" key={e.id}><div className="event-art">{e.image ? <Image src={e.image} alt={e.name} fill sizes="50vw"/> : <><span className="sample-mark">A.</span><span>THE STUDIO PREVIEW<br />Demo editorial visual</span></>}</div><div><p className="eyebrow">{e.source} EVENT · {e.status}</p><h2>{e.name}</h2><p>{e.description}</p><dl><dt>Date</dt><dd>{e.date}</dd><dt>Time</dt><dd>{e.startTime}–{e.endTime} ({e.timezone})</dd><dt>Location</dt><dd>{e.location}</dd><dt>Address</dt><dd>{e.address}</dd></dl>{maps ? <a href={maps} target="_blank" rel="noopener noreferrer">Open Google Maps ↗</a> : <p className="muted">Maps will be available when the venue is confirmed.</p>}</div></article>; })}</section>; }
