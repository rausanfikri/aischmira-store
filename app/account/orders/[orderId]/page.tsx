import { notFound } from "next/navigation";
import { getAccountOrders } from "@/services/account";
export default async function Page({ params }: {
    params: Promise<{
        orderId: string;
    }>;
}) { const result = await getAccountOrders(); if (result.status !== "ready")
    return <p>{result.message}</p>; const id = (await params).orderId; const current = result.data.find(o => o.id === id); if (!current)
    notFound(); return <><h2>{current.number}</h2><p>{current.status || "Status not supplied"}</p></>; }
