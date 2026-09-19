"use client";
import Link from "next/link";
import { useState } from "react";
import { useDemoAccount } from "@/store/demo-account";
export function DemoProfile() { const demo = useDemoAccount(); const [notice, setNotice] = useState(""); if (!demo.active)
    return <p>Sign in to view your profile, or <Link href="/login">open the demo account</Link>.</p>; return <form className="checkout-form" onSubmit={event => { event.preventDefault(); const form = new FormData(event.currentTarget); demo.save({ email: String(form.get("email")), name: String(form.get("name")), phone: String(form.get("phone")), active: true }); setNotice("Demo profile updated in this tab only."); }}><p className="eyebrow">DEMO PROFILE · Memory only</p><label>Name<input name="name" defaultValue={demo.name} required/></label><label>Email<input name="email" type="email" defaultValue={demo.email} required/></label><label>WhatsApp number<input name="phone" type="tel" defaultValue={demo.phone}/></label><button className="button">Update demo profile</button><p role="status">{notice}</p></form>; }
