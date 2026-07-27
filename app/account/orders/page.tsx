export default function OrdersPage() {
  const dummyOrders = [
    { id: "ORD-93812", date: "Jul 15, 2026", status: "Delivered", total: 3250000, items: 2 },
    { id: "ORD-84291", date: "Jun 02, 2026", status: "Delivered", total: 1150000, items: 1 },
  ];

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  return (
    <div>
      <h2 className="font-heading text-2xl text-text mb-8">Order History</h2>
      
      {dummyOrders.length > 0 ? (
        <div className="flex flex-col gap-6">
          {dummyOrders.map((order) => (
            <div key={order.id} className="border border-border/50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-body text-sm text-text font-medium">{order.id}</span>
                <span className="font-body text-xs text-text/60">{order.date}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-text/60">Status</span>
                <span className="font-body text-sm text-text">{order.status}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-text/60">Total ({order.items} items)</span>
                <span className="font-body text-sm text-text">{formatter.format(order.total)}</span>
              </div>

              <div>
                <button className="font-body text-[10px] tracking-widest uppercase text-text border-b border-text pb-0.5 hover:text-primary hover:border-primary transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-border/50 p-12 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-text/50">You have no previous orders.</p>
        </div>
      )}
    </div>
  );
}
