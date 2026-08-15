export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5581986535652?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20InovMakers."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a InovMakers pelo WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        boxShadow: "0 6px 20px rgba(0,0,0,0.22)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.22)";
      }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449A11.82 11.82 0 0 0 12.04 0C5.495 0 .16 5.335.16 11.88c0 2.093.546 4.137 1.584 5.934L.055 23.88l6.208-1.628a11.87 11.87 0 0 0 5.777 1.468h.005c6.542 0 11.88-5.335 11.88-11.88a11.82 11.82 0 0 0-3.405-8.391zM12.045 21.75h-.004a9.86 9.86 0 0 1-5.026-1.376l-.36-.214-3.684.966.984-3.592-.234-.369a9.86 9.86 0 0 1-1.51-5.285c0-5.466 4.45-9.916 9.92-9.916a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.905 7.024c-.004 5.466-4.454 9.916-9.92 9.916z" />
      </svg>
    </a>
  );
}