import { useState } from "react";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormDialogProps { open: boolean; onClose: () => void; }

const provinces = ["Gauteng","Western Cape","KwaZulu-Natal","Eastern Cape","Free State","Limpopo","Mpumalanga","North West","Northern Cape"];
const purposes = ["Domestic / Household","Agricultural / Irrigation","Commercial / Industrial","Community / Rural Supply","Other"];
const propertyTypes = ["Residential","Commercial","Agricultural / Farm","Industrial","Government / Municipal"];
const urgencyLevels = ["Low – No rush","Medium – Within a month","High – Within a week","Urgent – ASAP"];

const QuoteFormDialog = ({ open, onClose }: QuoteFormDialogProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name:"",email:"",phone:"",address:"",province:"",purpose:"",propertyType:"",urgency:"",govTender:"",contactMethod:"",details:"" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name,email,phone,address,province,purpose,propertyType,urgency,govTender,contactMethod,details } = form;
    if (!name||!email||!phone||!address||!province||!purpose||!propertyType||!urgency||!govTender||!contactMethod||!details) {
      toast({ title: "Please fill in all required fields", variant: "destructive" }); return;
    }
    const body = [`Name: ${name}`,`Email: ${email}`,`Phone: ${phone}`,`Address: ${address}`,`Province: ${province}`,`Purpose: ${purpose}`,`Property: ${propertyType}`,`Urgency: ${urgency}`,`Gov Tender: ${govTender}`,`Contact: ${contactMethod}`,`Details: ${details}`].join("%0A");
    window.open(`mailto:dakotaboreholes@gmail.com?subject=${encodeURIComponent("Quote Request from "+name)}&body=${body}`);
    toast({ title: "Opening your email client…" });
    onClose();
  };

  if (!open) return null;

  const inputCls = "w-full border border-border bg-background rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-secondary transition-colors";
  const labelCls = "block font-heading text-[9px] sm:text-[10px] font-semibold text-foreground mb-1 uppercase tracking-wider";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card z-10 flex items-center justify-between p-4 sm:p-5 pb-2 sm:pb-3 border-b border-border">
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">Get a Quote</h2>
            <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">Submit your borehole drilling request</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3 sm:space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div><label className={labelCls}>Full Name *</label><input type="text" placeholder="John Doe" maxLength={100} value={form.name} onChange={(e)=>set("name",e.target.value)} className={inputCls}/></div>
            <div><label className={labelCls}>Email *</label><input type="email" placeholder="john@example.com" maxLength={255} value={form.email} onChange={(e)=>set("email",e.target.value)} className={inputCls}/></div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div><label className={labelCls}>Phone / WhatsApp *</label><input type="tel" placeholder="+27 81 234 5678" maxLength={20} value={form.phone} onChange={(e)=>set("phone",e.target.value)} className={inputCls}/></div>
            <div><label className={labelCls}>Address *</label><input type="text" placeholder="123 Main Street" maxLength={200} value={form.address} onChange={(e)=>set("address",e.target.value)} className={inputCls}/></div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div><label className={labelCls}>Province *</label><select value={form.province} onChange={(e)=>set("province",e.target.value)} className={inputCls}><option value="">Select</option>{provinces.map(p=><option key={p}>{p}</option>)}</select></div>
            <div><label className={labelCls}>Purpose *</label><select value={form.purpose} onChange={(e)=>set("purpose",e.target.value)} className={inputCls}><option value="">Select</option>{purposes.map(p=><option key={p}>{p}</option>)}</select></div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div><label className={labelCls}>Property Type *</label><select value={form.propertyType} onChange={(e)=>set("propertyType",e.target.value)} className={inputCls}><option value="">Select</option>{propertyTypes.map(p=><option key={p}>{p}</option>)}</select></div>
            <div><label className={labelCls}>Urgency *</label><select value={form.urgency} onChange={(e)=>set("urgency",e.target.value)} className={inputCls}><option value="">Select</option>{urgencyLevels.map(u=><option key={u}>{u}</option>)}</select></div>
          </div>
          <div>
            <label className={labelCls}>Government Tender? *</label>
            <div className="flex gap-4 sm:gap-5 mt-1">
              {["Yes","No"].map(v=>(
                <label key={v} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                  <input type="radio" name="govTender" value={v} checked={form.govTender===v} onChange={()=>set("govTender",v)} className="w-3 h-3 sm:w-3.5 sm:h-3.5 accent-secondary"/>
                  <span className="text-foreground text-xs sm:text-sm">{v}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={labelCls}>Preferred Contact *</label>
            <div className="flex flex-wrap gap-3 sm:gap-5 mt-1">
              {["Call","WhatsApp","Email","SMS"].map(v=>(
                <label key={v} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                  <input type="radio" name="contactMethod" value={v} checked={form.contactMethod===v} onChange={()=>set("contactMethod",v)} className="w-3 h-3 sm:w-3.5 sm:h-3.5 accent-secondary"/>
                  <span className="text-foreground text-xs sm:text-sm">{v}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={labelCls}>Additional Details *</label>
            <textarea placeholder="Tell us more…" maxLength={1000} rows={3} value={form.details} onChange={(e)=>set("details",e.target.value)} className={`${inputCls} resize-y`}/>
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-secondary hover:shadow-lg hover:shadow-secondary/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-heading text-[10px] sm:text-xs uppercase tracking-wider text-secondary-foreground transition-all hover:scale-[1.01]">
            <Send size={13}/> Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteFormDialog;
