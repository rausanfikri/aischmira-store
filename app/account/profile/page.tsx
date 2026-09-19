import { getAccountSession, getAccountProfile } from "@/services/account";
import { DemoProfile } from "@/components/account/DemoProfile";
export default async function Page() { const session = await getAccountSession(); if (session.status === "unavailable") return <p>Account services are temporarily unavailable. Please try again later.</p>;
    if (session.status !== "authenticated")
    return <><h2>Personal details</h2><DemoProfile /></>; const profile = await getAccountProfile(); return <><h2>Personal details</h2><p>{session.user.email}</p>{profile.status === "unavailable" ? <p>{profile.message}</p> : profile.data ? <><p>Name: {profile.data.fullName || "Not supplied"}</p><p>Phone: {profile.data.phone || "Not supplied"}</p></> : <p>No profile recorded yet.</p>}<p>Profile editing will be available when production persistence is verified.</p></>; }
