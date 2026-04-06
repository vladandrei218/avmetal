import { useState } from "react";

const metaliceImages = [
  "/assets/METALICE/metalice1.jpg",
  "/assets/METALICE/metalice2.jpg",
  "/assets/METALICE/metalice3.jpg",
  "/assets/METALICE/metalice4.jpg",
  "/assets/METALICE/metalice5.jpg",
  "/assets/METALICE/metalice6.jpg",
  "/assets/METALICE/metalice7.jpg",
  "/assets/METALICE/metalice8.jpg",
  "/assets/METALICE/metalice9.jpg",
  "/assets/METALICE/metalice10.jpg",
  "/assets/METALICE/metalice11.jpg",
  "/assets/METALICE/metalice12.jpg",
  "/assets/METALICE/metalice13.jpg",
  "/assets/METALICE/metalice14.jpg",
  "/assets/METALICE/metalice15.jpg",
  "/assets/METALICE/metalice16.jpg",
  "/assets/METALICE/metalice17.jpg",
  "/assets/METALICE/metalice18.jpg",
  "/assets/METALICE/metalice19.jpg",
  "/assets/METALICE/metalice20.jpg",
  "/assets/METALICE/metalice21.jpg",
  "/assets/METALICE/metalice22.jpg",
  "/assets/METALICE/metalice23.jpg",
  "/assets/METALICE/metalice24.jpg",
  "/assets/METALICE/metalice25.jpg",
  "/assets/METALICE/metalice26.jpg",
  "/assets/METALICE/metalice27.jpg",
  "/assets/METALICE/metalice28.jpg",
  "/assets/METALICE/metalice29.jpg",
  "/assets/METALICE/metalice30.jpg",
  "/assets/METALICE/metalice31.jpg",
  "/assets/METALICE/metalice32.jpg",
  "/assets/METALICE/metalice33.jpg",
  "/assets/METALICE/metalice34.jpg",
  "/assets/METALICE/metalice35.jpg",
  "/assets/METALICE/metalice36.jpg",
  "/assets/METALICE/metalice37.jpg",
  "/assets/METALICE/metalice38.jpg",
  "/assets/METALICE/metalice39.jpg",
  "/assets/METALICE/metalice40.jpg",
  "/assets/METALICE/metalice41.jpg",
  "/assets/METALICE/metalice42.jpg",
  "/assets/METALICE/metalice43.jpg",
  "/assets/METALICE/metalice44.jpg",
  "/assets/METALICE/metalice45.jpg",
  "/assets/METALICE/metalice46.jpg",
  "/assets/METALICE/metalice47.jpg",
  "/assets/METALICE/metalice48.jpg",
  "/assets/METALICE/metalice49.jpg",
  "/assets/METALICE/metalice50.jpg",
  "/assets/METALICE/metalice51.jpg",
  "/assets/METALICE/metalice52.jpg",
  "/assets/METALICE/metalice53.jpg",
  "/assets/METALICE/metalice54.jpg",
  "/assets/METALICE/metalice55.jpg",
];



function PortiAluminiu() {
    const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

    const openLightbox = (images: string[], index: number) => setLightbox({ images, index });
    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox(l => l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : null);
    const next = () => setLightbox(l => l ? { ...l, index: (l.index + 1) % l.images.length } : null);

    return (
        <div className="container my-5">

            {/* Page header */}
            <div className="text-center mb-5">
                <h1 className="modern-underline">Porți Metalice</h1>
                <p className="lead mx-auto mt-4" style={{ maxWidth: "900px" }}>
                    Portile metalice sunt realizate din fier forjat sau profile metalice, combinate cu panouri de tabla
                    perforata. Sunt vopsite in camp electroastatic si beneficiaza de garantie 24 de luni. Optional, 
                    se pot realiza din otel zincat, pentru o mai buna rezistenta la umiditate si rugina.
                    Dimensiunile standard sunt: inaltime 170 cm, latime poarta pietonala 100 cm, latime poarta auto 350 cm.
                    La cerere, se pot realiza si alte dimensiuni.
                </p>
            </div>

            {/* COMPACT */}
            <section className="mb-5">

                <div className="row g-3">
                    {metaliceImages.map((src, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={src}
                                alt={`COMPACT ${i + 1}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "180px", transition: "opacity 0.2s" }}
                                onClick={() => openLightbox(metaliceImages, i)}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                            />
                        </div>
                    ))}
                </div>
            </section>



            {/* Lightbox */}
            {lightbox && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.9)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 9999,
                    }}
                >
                    {/* Previous */}
                    <button
                        onClick={e => { e.stopPropagation(); prev(); }}
                        style={{
                            position: "absolute", left: "20px",
                            background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%",
                            color: "white", fontSize: "1.5rem", width: "48px", height: "48px", cursor: "pointer"
                        }}
                    >‹</button>

                    {/* Image */}
                    <img
                        src={lightbox.images[lightbox.index]}
                        onClick={e => e.stopPropagation()}
                        style={{ maxHeight: "85vh", maxWidth: "85vw", borderRadius: "8px", objectFit: "contain" }}
                    />

                    {/* Next */}
                    <button
                        onClick={e => { e.stopPropagation(); next(); }}
                        style={{
                            position: "absolute", right: "20px",
                            background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%",
                            color: "white", fontSize: "1.5rem", width: "48px", height: "48px", cursor: "pointer"
                        }}
                    >›</button>

                    {/* Counter & close */}
                    <span style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "0.9rem" }}>
                        {lightbox.index + 1} / {lightbox.images.length}
                    </span>
                    <button
                        onClick={closeLightbox}
                        style={{
                            position: "absolute", top: "20px", right: "20px",
                            background: "none", border: "none", color: "white", fontSize: "1.8rem", cursor: "pointer"
                        }}
                    >✕</button>
                </div>
            )}
        </div>
    );
}

export default PortiAluminiu;