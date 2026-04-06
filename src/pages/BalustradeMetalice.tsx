import { useState } from "react";

const balustradeImages = Object.values(
    import.meta.glob('/public/assets/BALUSTRADE/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
) as string[];



function BalustradeMetalice() {
    const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

    const openLightbox = (images: string[], index: number) => setLightbox({ images, index });
    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox(l => l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : null);
    const next = () => setLightbox(l => l ? { ...l, index: (l.index + 1) % l.images.length } : null);

    return (
        <div className="container my-5">

            {/* Page header */}
            <div className="text-center mb-5">
                <h1 className="modern-underline">Balustrade Metalice</h1>
                <p className="lead mx-auto mt-4" style={{ maxWidth: "900px" }}>
                    Balustradele metalice se pot realiza din fier forjat sau profile metalice, combinate cu panouri de tabla 
                    perforata. Optional, se pot realiza din otel zincat, pentru o mai buna rezistenta la umiditate si rugina. 
                    Beneficiaza de garantie 24 de luni.
                    Se pot realiza balustrade pentru inchideri de terase, balcoane, scari, rampe etc.
                    Dimensiunile standard pentru panouri sunt inaltime 90 cm, lungime 200 cm. La cerere, se pot executa si
                    pe alte dimensiuni.
                </p>
            </div>

            {/* COMPACT */}
            <section className="mb-5">

                <div className="row g-3">
                    {balustradeImages.map((src, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={src}
                                alt={`COMPACT ${i + 1}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "180px", transition: "opacity 0.2s" }}
                                onClick={() => openLightbox(balustradeImages, i)}
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

export default BalustradeMetalice;