import { useState } from "react";

const compactImages = Object.values(
    import.meta.glob('/src/assets/COMPACT/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
) as string[];

const prismaImages = Object.values(
    import.meta.glob('/src/assets/PRISMA/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
) as string[];

const supremeImages = Object.values(
    import.meta.glob('/src/assets/SUPREME/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
) as string[];


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
                <h1 className="modern-underline">Porți Aluminiu</h1>
                <p className="lead mx-auto mt-4" style={{ maxWidth: "900px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/* COMPACT */}
            <section className="mb-5">
                <div className="text-center mb-4">
                    <h2 className="modern-underline">Colecția COMPACT</h2>
                    <p className="mx-auto mt-4" style={{ maxWidth: "900px" }}>
                        În lumea Davos, Colecția COMPACT este reprezentată de modelele care folosesc ca principal element de umplere profilul COMPACT
                        îmbinat fără spații. Nu putem fugi de realitate, dar putem pune granițe între viețile noastre private și exterior, cu majoritatea modelelor
                        aparținând Colecței COMPACT. Pentru cei care nu iubesc monotonia, pentru cei îndrăzneți, avem și modele cu zone aerisite în Colecția
                        COMPACT.
                    </p>
                </div>
                <div className="row g-3">
                    {compactImages.map((src, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={src}
                                alt={`COMPACT ${i + 1}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "180px", transition: "opacity 0.2s" }}
                                onClick={() => openLightbox(compactImages, i)}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* PRISMA */}
            <section className="mb-5">
                <div className="text-center mb-4">
                    <h2 className="modern-underline">Colecția PRISMA</h2>
                    <p className="mx-auto mt-4" style={{ maxWidth: "900px" }}>
                        Gândit parcă de un iluzionist, modelul Prisma este la limita între plin și aerisit. Maschează de minune orice univers
                        interior pe care îldelimitează și în același timp lasă aerul să circule. Și probabil vă veți întreba dacă este bine
                        sau rău. Este foarte bine în cazul rafalelorputernice, mai ales cand avem porți de mari dimensiuni. Iar sub
                        aspectul vizibilitatii. În plus privirile indiscrete cu greu vor puteadistinge frânturi de imagini, doar daca privesc
                        sub anumite unghiuri.
                    </p>
                </div>
                <div className="row g-3">
                    {prismaImages.map((src, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={src}
                                alt={`PRISMA ${i + 1}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "180px", transition: "opacity 0.2s" }}
                                onClick={() => openLightbox(prismaImages, i)}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                            />
                        </div>
                    ))}
                </div>
                {/* same grid here once you have PRISMA images */}
            </section>

            {/* SUPREME */}
            <section className="mb-5">
                <div className="text-center mb-4">
                    <h2 className="modern-underline">Colecția SUPREME</h2>
                    <p className="mx-auto mt-4" style={{ maxWidth: "900px" }}>
                        Eleganța desăvârșită și stilul unic se reunesc în lumea Davos sub acest nume - SUPREME. Această colecție este pentru cei cu gusturi
                        rafinate, pentru cei care vor să se distingă din mulțime și pentru cei care pun preț în egală măsură pe calitate
                        și estetică desăvârșită. Astfel, SUPREME înseamnă ansambluri de profile striate Wave, în combinație cu profile
                        Chrome din aluminiu cu aspect de inox lucios
                    </p>
                </div>
                <div className="row g-3">
                    {supremeImages.map((src, i) => (
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <img
                                src={src}
                                alt={`SUPREME ${i + 1}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "180px", transition: "opacity 0.2s" }}
                                onClick={() => openLightbox(supremeImages, i)}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                            />
                        </div>
                    ))}
                </div>
                {/* same grid here once you have SUPREME images */}
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