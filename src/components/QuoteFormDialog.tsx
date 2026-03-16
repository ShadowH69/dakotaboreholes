import { useState } from "react";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormDialogProps {
  open: boolean;
  onClose: () => void;
}

const provinces = [
  "Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape",
  "Free State", "Limpopo", "Mpumalanga", "North West", "Northern Cape",
];

const purposes = [
  "Domestic / Household", "Agricultural / Irrigation", "Commercial / Industrial",
  "Community / Rural Supply", "Other",
];

const propertyTypes = [
  "Residential", "Commercial", "Agricultural / Farm", "Industrial", "Government / Municipal",
];

const urgencyLevels = ["Low – No rush", "Medium – Within a month", "High – Within a week", "Urgent – ASAP"];

const QuoteFormDialog = ({ open, onClose }: QuoteFormDialogProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    province: "", purpose: "", propertyType: "", urgency: "",
    govTender: "", contactMethod: "", details: "",
  });

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, address, province, purpose, propertyType, urgency, govTender, contactMethod, details } = form;
    if (!name || !email || !phone || !address || !province || !purpose || !propertyType || !urgency || !govTender || !contactMethod || !details) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const body = [
      `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Address: ${address}`,
      `Province: ${province}`, `Purpose: ${purpose}`, `Property Type: ${propertyType}`,
      `Urgency: ${urgency}`, `Government Tender: ${govTender}`,
      `Preferred Contact: ${contactMethod}`, `Details: ${details}`,
    ].join("%0A");
    window.open(
      `mailto:dakotaboreholes@gmail.com?subject=${encodeURIComponent("Quotation Request from " + name)}&body=${body}`
    );
    toast({ title: "Opening your email client…" });
    onClose();
  };

  if (!open) return null;

  const inputCls = "w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors text-sm";
  const labelCls = "block font-heading text-sm font-semibold text-foreground mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background z-10 flex items-center justify-between p-6 pb-2 border-b border-border">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Get a Borehole Services Quotation in Few Minutes
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Submit your borehole drilling request</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Full Name *</label>
              <input type="text" placeholder="John Doe" maxLength={100} value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Email *</label>
              <input type="email" placeholder="john@example.com" maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Cellphone / WhatsApp Number *</label>
              <input type="tel" placeholder="+27 81 234 5678" maxLength={20} value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Physical Address *</label>
              <input type="text" placeholder="123 Main Street, City" maxLength={200} value={form.address} onChange={(e) => set("address", e.target.value)} className={inputCls} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Province *</label>
              <select value={form.province} onChange={(e) => set("province", e.target.value)} className={inputCls}>
                <option value="">Select a province</option>
                {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Purpose of Borehole *</label>
              <select value={form.purpose} onChange={(e) => set("purpose", e.target.value)} className={inputCls}>
                <option value="">Select purpose</option>
                {purposes.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Property Type *</label>
              <select value={form.propertyType} onChange={(e) => set("propertyType", e.target.value)} className={inputCls}>
                <option value="">Select property type</option>
                {propertyTypes.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Urgency Level *</label>
              <select value={form.urgency} onChange={(e) => set("urgency", e.target.value)} className={inputCls}>
                <option value="">Select urgency</option>
                {urgencyLevels.map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className={labelCls}>Is this for a Government Tender? *</label>
            <div className="flex gap-6 mt-2">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio" name="govTender" value={v}
                    checked={form.govTender === v}
                    onChange={() => set("govTender", v)}
                    className="w-4 h-4 accent-secondary"
                  />
                  <span className="text-foreground text-sm">{v}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelCls}>Preferred Contact Method(s) *</label>
            <div className="flex flex-wrap gap-6 mt-2">
              {["Call", "WhatsApp", "Email", "SMS"].map((v) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio" name="contactMethod" value={v}
                    checked={form.contactMethod === v}
                    onChange={() => set("contactMethod", v)}
                    className="w-4 h-4 accent-secondary"
                  />
                  <span className="text-foreground text-sm">{v}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelCls}>Additional Details *</label>
            <textarea
              placeholder="Tell us more about your borehole requirements, specific needs, or any questions you have..."
              maxLength={1000} rows={4} value={form.details}
              onChange={(e) => set("details", e.target.value)}
              className={`${inputCls} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-secondary hover:brightness-110 px-8 py-4 rounded font-heading text-base uppercase tracking-wider text-secondary-foreground transition"
          >
            <Send size={18} /> Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteFormDialog;
