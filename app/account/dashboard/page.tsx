export default function AccountDashboardPage() {
  return (
    <div className="flex flex-col gap-12">
      
      {/* Welcome & Points */}
      <div className="bg-surface p-8 border border-border/20 flex justify-between items-center">
        <div>
          <h2 className="font-heading text-2xl text-text mb-2">Welcome, Jane Doe</h2>
          <p className="font-body text-sm font-light text-text/70">jane.doe@example.com</p>
        </div>
        <div className="text-right">
          <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mb-1">AISCHMIRA Rewards</p>
          <p className="font-heading italic text-4xl text-primary">1,250 <span className="text-lg">pts</span></p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border/50 p-6 flex flex-col items-start">
          <h3 className="font-heading text-xl text-text mb-2">Recent Orders</h3>
          <p className="font-body text-sm font-light text-text/60 mb-6">Track your purchases and view order history.</p>
          <a href="/account/orders" className="font-body text-[10px] tracking-widest uppercase text-text border-b border-text pb-0.5 hover:text-primary hover:border-primary transition-colors">View Orders</a>
        </div>
        <div className="border border-border/50 p-6 flex flex-col items-start">
          <h3 className="font-heading text-xl text-text mb-2">Profile Details</h3>
          <p className="font-body text-sm font-light text-text/60 mb-6">Manage your shipping addresses and preferences.</p>
          <a href="/account/profile" className="font-body text-[10px] tracking-widest uppercase text-text border-b border-text pb-0.5 hover:text-primary hover:border-primary transition-colors">Edit Profile</a>
        </div>
      </div>

    </div>
  );
}
