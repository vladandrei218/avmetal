function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 py-5">
            <div className="container">
                <div className="row g-4">

                    {/* Contact Card */}
                    <div className="col-md-4">
                        <div className="bg-secondary p-4 rounded h-100 shadow">
                            <h3 className="mb-3">Date de contact</h3>
                            <a href="https://www.google.com/maps/place/AV+Metal+-+Dealer+BARRIER/@45.1032154,24.3595676,17z/data=!3m1!4b1!4m6!3m5!1s0x474d390d6a3db2f1:0xb63a2c2bdfaf416d!8m2!3d45.1032116!4d24.3621425!16s%2Fg%2F11vxsylx3f?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                                className="email-phone-link">
                                <h6>📍 Birou vanzari: Ramnicu Valcea, Strada Carol I nr 4, bloc M+N parter (vis-a-vis de APAVIL)</h6>
                            </a>
                            <a href="tel:+40722155547" className="email-phone-link">
                                <p className="mb-2">📞 0722155547</p>
                            </a>
                            <a href="mailto:office@avmetal.ro" className="email-phone-link">
                                <p className="mb-0">✉️ office@avmetal.ro</p>
                            </a>
                            <a href="https://www.google.com/maps/place/Bude%C8%99ti/@45.0582632,24.3713341,14z/data=!3m1!4b1!4m6!3m5!1s0x474d45f249faf505:0x520e3acfa1e50a63!8m2!3d45.0642498!4d24.3890137!16s%2Fm%2F0464fr7?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                                className="email-phone-link">
                                <h6 style={{marginTop: '10px'}}>🏢 Sediul social:Sat Budesti,Jud. Valcea , 247055, Budesti, RO</h6>
                            </a>
                            <a href="https://www.facebook.com/portialuminiu" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ marginRight: '10px', color: '#1877f2' }}>
                                <i className="bi bi-facebook fs-2"></i>
                            </a>

                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ marginRight: '10px', color: '#E4405F' }}>
                                <i className="bi bi-instagram fs-2"></i>
                            </a>

                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ marginRight: '10px', color: '#0A66C2' }}>
                                <i className="bi bi-linkedin fs-2"></i>
                            </a>

                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ marginRight: '10px', color: '#FF0000' }}>
                                <i className="bi bi-youtube fs-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div className="col-md-4">
                        <div className="bg-secondary p-4 rounded h-100 shadow">
                            <h5 className="mb-3">Ore de funcționare</h5>
                            <p className="mb-2">Luni: 10:00 - 18:00</p>
                            <p className="mb-2">Marți: 10:00 - 18:00</p>
                            <p className="mb-2">Miercuri: 10:00 - 18:00</p>
                            <p className="mb-2">Joi: 10:00 - 18:00</p>
                            <p className="mb-2">Vineri: 10:00 - 18:00</p>
                            <p className="mb-2">Sâmbătă: Închis</p>
                            <p className="mb-0">Duminică: Închis</p>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="col-md-4">
                        <div className="bg-secondary p-3 rounded h-100 shadow">
                            <h5 className="mb-3">Location</h5>
                            <div className="ratio ratio-4x3 rounded overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.140720713915!2d24.35956757634422!3d45.10321535745165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d390d6a3db2f1%3A0xb63a2c2bdfaf416d!2sAV%20Metal%20-%20Dealer%20BARRIER!5e0!3m2!1sen!2sro!4v1775461185368!5m2!1sen!2sro"
                                    width="600"
                                    height="450"
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom text */}
                <div className="text-center mt-4 pt-3 border-top border-secondary">
                    <p className="mb-0">© 2026 AVMetal</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;