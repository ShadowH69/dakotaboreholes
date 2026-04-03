const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.23-1.37a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.85 9.85 0 0 0-2.9-6.99Zm-7.03 15.23h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.23 8.23 0 0 1-1.27-4.39c0-4.56 3.71-8.27 8.28-8.27 2.2 0 4.27.85 5.83 2.41a8.17 8.17 0 0 1 2.43 5.86c0 4.56-3.71 8.24-8.27 8.24Zm4.53-6.18c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.17.25-.64.82-.79.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.21.89 2.38 1.02 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

const WhatsAppBubble = () => (
  <a
    href="https://wa.me/27712857397?text=Hi%20Dakota%20Plumbing%2C%20I%27d%20like%20to%20enquire%20about%20your%20borehole%20services."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="whatsapp-float fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--whatsapp))] text-white shadow-lg transition-transform duration-300 hover:scale-110"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default WhatsAppBubble;
