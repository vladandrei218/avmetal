import { Link } from "react-router-dom";

const products = [
    { img: "/src/assets/portialuminiudavos.jpg", title: "Porți aluminiu DAVOS", desc: "Porți din aluminiu elegante și rezistente, potrivite pentru orice casă.", link: "/porti-aluminiu" },
    { img: "/src/assets/portisigardurimetalice.jpg", title: "Porți și garduri metalice", desc: "Balustrade durabile și estetice pentru scări, terase sau balcoane.", link: "/porti-metalice" },
    { img: "/src/assets/portisigardurizincate.jpg", title: "Porți și garduri zincate", desc: "Rulouri moderne pentru protecție solară și intimitate.", link: "/porti-garduri-zincate" },
    { img: "/src/assets/usidegarajindustriale.jpg", title: "Uși de garaj și industriale", desc: "Uși de garaj sigure și automate, pentru orice tip de garaj.", link: "/usi-garaj" },
    { img: "/src/assets/ferestresiusicugeamtermopan.jpg", title: "Ferestre și uși cu geam termopan", desc: "Ferestre eficiente termic și fonic, cu geam termopan.", link: "/ferestre-usi-termopan" },
    { img: "/src/assets/automatizaribft.jpg", title: "Automatizări BFT", desc: "Sisteme de automatizare pentru porți și uși de garaj.", link: "/automatizari-bft" },
    { img: "/src/assets/balustrademetalice.jpg", title: "Balustrade metalice", desc: "Mobilier metalic și durabil pentru grădini și terase.", link: "/balustrade-metalice" },
];

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="text-white text-center py-5"
                style={{
                    background: "linear-gradient(135deg, #0d0d0d 0%, #1c1c2e 60%, #1a2a4a 100%)",
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="container">
                    <div className="mb-4">
                        <h1 className="display-2 fw-bold modern-underline">AVMetal</h1>
                    </div>
                    <p className="lead mt-5 mx-auto" style={{ maxWidth: "600px", color: "#ccc" }}>
                        Porți din aluminiu, porți metalice, balustrade, rulouri, uși de garaj, ferestre și uși termopan, automatizări și confecții metalice.
                    </p>
                    <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/contact" className="btn btn-primary btn-lg px-4">Contactează-ne</Link>
                        <a href="#produse" className="btn btn-outline-light btn-lg px-4">Vezi produsele</a>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="py-4" style={{ backgroundColor: "#1877f2" }}>
                <div className="container">
                    <div className="row text-white text-center g-3">
                        {[["5+", "Ani experiență"], ["100+", "Proiecte finalizate"], ["7", "Categorii de produse"], ["100+", "Tipuri de produse"]].map(([num, label]) => (
                            <div className="col-6 col-md-3" key={label}>
                                <div className="fw-bold fs-3">{num}</div>
                                <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <section id="produse" className="container my-5">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold modern-underline">Produse</h2>
                </div>

                {products.map((p, i) => (
                    <div
                        key={i}
                        className={`row align-items-center mb-5 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
                    >
                        <div className="col-md-6">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", maxHeight: "350px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0 d-flex flex-column align-items-center">
                            <h3 className="fw-bold">{p.title}</h3>
                            <p className="text-muted text-center">{p.desc}</p>
                            <Link to={p.link} className="btn btn-primary mt-2">Vezi produsul</Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Home;