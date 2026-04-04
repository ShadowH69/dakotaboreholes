import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Trash2, X, ImageIcon } from "lucide-react";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const STORAGE_KEY = "dakota-gallery-images";
const MAX_WIDTH = 800;
const QUALITY = 0.6;

interface GalleryImage { id: string; src: string; caption: string; }

const compressImage = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ratio = Math.min(MAX_WIDTH / img.width, 1);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", QUALITY));
    };
    img.src = url;
  });

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [caption, setCaption] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) try { setImages(JSON.parse(stored)); } catch {}
  }, []);

  const save = (imgs: GalleryImage[]) => {
    setImages(imgs);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(imgs)); }
    catch { alert("Storage full. Remove some images first."); }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file);
    save([...images, { id: Date.now().toString(), src: compressed, caption: caption || file.name }]);
    setCaption("");
    setShowAdd(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-[hsl(var(--section-dark))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-body text-primary-foreground/40 mb-3 sm:mb-4">
            <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-secondary">Gallery</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
            Our <span className="text-secondary">Gallery</span>
          </h1>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <RevealWrapper direction="left">
              <div>
                <div className="w-8 sm:w-10 h-1 bg-secondary rounded-full mb-2 sm:mb-3" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-foreground">Our Work</h2>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">Browse completed projects and installations.</p>
              </div>
            </RevealWrapper>
            <button onClick={() => setShowAdd(true)} className="flex items-center gap-1.5 sm:gap-2 bg-secondary hover:shadow-lg hover:shadow-secondary/20 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-heading text-[10px] sm:text-xs uppercase tracking-wider text-secondary-foreground transition-all hover:scale-105">
              <Plus size={14} /> Add
            </button>
          </div>

          {images.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center">
              <ImageIcon size={40} className="text-muted-foreground/20 mb-3 sm:mb-4 sm:w-14 sm:h-14" />
              <p className="text-muted-foreground text-sm">No images yet.</p>
              <p className="text-muted-foreground/50 text-xs mt-1">Click "Add" to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {images.map((img) => (
                <div key={img.id} className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-muted cursor-pointer">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onClick={() => setLightbox(img.src)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="w-full p-2.5 sm:p-3 text-white text-[10px] sm:text-xs font-body truncate">{img.caption}</p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); save(images.filter((i) => i.id !== img.id)); }} className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-destructive/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={11} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAdd(false)} />
          <div className="relative bg-card rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Add Image</h3>
              <button onClick={() => setShowAdd(false)} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block font-heading text-[10px] sm:text-xs font-semibold text-foreground mb-1 uppercase tracking-wider">Caption</label>
                <input type="text" placeholder="Describe the image…" maxLength={100} value={caption} onChange={(e) => setCaption(e.target.value)} className="w-full border border-border bg-background rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="block font-heading text-[10px] sm:text-xs font-semibold text-foreground mb-1 uppercase tracking-wider">Image</label>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="w-full text-xs sm:text-sm text-muted-foreground file:mr-2 sm:file:mr-3 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-lg file:border-0 file:text-[10px] sm:file:text-xs file:font-heading file:uppercase file:tracking-wider file:bg-secondary file:text-secondary-foreground file:cursor-pointer hover:file:brightness-110 file:transition" />
              </div>
            </div>
          </div>
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90" onClick={() => setLightbox(null)}>
          <button className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white"><X size={24} /></button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg sm:rounded-xl" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
