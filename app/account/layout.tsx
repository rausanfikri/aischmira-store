import { AccountNav } from "@/components/account/AccountNav";
export const metadata = { title: "Your account" };
export default function Layout({ children }: {
    children: React.ReactNode;
}) { return <section className="section account"><p className="eyebrow">A little more personal</p><h1>Your AISCHMIRA</h1><AccountNav />{children}</section>; }
