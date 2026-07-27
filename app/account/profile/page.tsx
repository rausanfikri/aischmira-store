export default function ProfilePage() {
  return (
    <div>
      <h2 className="font-heading text-2xl text-text mb-8">Profile Details</h2>
      
      <div className="max-w-xl">
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">First Name</label>
              <input 
                type="text" 
                defaultValue="Jane"
                className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Last Name</label>
              <input 
                type="text" 
                defaultValue="Doe"
                className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
            <input 
              type="email" 
              defaultValue="jane.doe@example.com"
              className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] tracking-widest uppercase text-text/70">Phone Number (WhatsApp)</label>
            <input 
              type="tel" 
              placeholder="+62 812 3456 7890"
              className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
            />
          </div>

          <div className="pt-6">
            <button type="button" className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-primary transition-colors rounded-sm">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
