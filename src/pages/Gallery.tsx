import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Trash2, X, ImageIcon } from "lucide-react";

const STORAGE_KEY = "dakota-gallery-images";
const MAX_WIDTH = 800;
const QUALITY = 0.6;

interface GalleryImage {
  id: string;
  src: string;
  caption: string;
}

const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ratio = Math.min(MAX_WIDTH / img.width, 1);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", QUALITY));
    };
    img.src = url;
  });
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [caption, setCaption] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setImages(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  const save = (imgs: GalleryImage[]) => {
    setImages(imgs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(imgs));
    } catch (e) {
      alert("Storage is full. Try removing some images first or uploading smaller files.");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file);
    const newImg: GalleryImage = {
      id: Date.now().toString(),
      src: compressed,
      caption: caption || file.name,
    };
    save([...images, newImg]);
    setCaption("");
    setShowAdd(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const removeImage = (id: string) => {
    save(images.filter((img) => img.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground">Gallery</h1>
          <div className="font-heading text-sm uppercase tracking-wider text-primary-foreground/60">
            <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-secondary">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="w-12 h-1 bg-secondary mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground">Our Work</h2>
              <p className="text-muted-foreground mt-2">Browse through our completed projects and installations.</p>
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="flex items-center gap-2 bg-secondary hover:brightness-110 px-5 py-3 rounded font-heading text-sm uppercase tracking-wider text-secondary-foreground transition"
            >
              <Plus size={18} /> Add Image
            </button>
          </div>

          {images.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <ImageIcon size={64} className="text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">No images yet.</p>
              <p className="text-muted-foreground/60 text-sm mt-1">Click "Add Image" to start building your gallery.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img) => (
                <div key={img.id} className="group relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setLightbox(img.src)}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-primary-foreground text-sm font-heading truncate">{img.caption}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeImage(img.id); }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-destructive/80 text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add Image Dialog */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setShowAdd(false)} />
          <div className="relative bg-background rounded-lg shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground">Add Gallery Image</h3>
              <button onClick={() => setShowAdd(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Caption</label>
                <input
                  type="text"
                  placeholder="Describe the image…"
                  maxLength={100}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Image File</label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-heading file:bg-secondary file:text-secondary-foreground hover:file:brightness-110 file:cursor-pointer file:transition"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground">
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
