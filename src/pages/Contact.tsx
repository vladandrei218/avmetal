import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm('service_xtldr3p', 'template_uioz3ws', form.current, '6Q0HB2LLqJfL0W0f_')
            .then(() => {
                setAlert({ type: "success", message: "Mesajul a fost trimis cu succes!" });
                form.current?.reset();
            }, () => {
                setAlert({ type: "danger", message: "Ceva nu a mers. Încearcă din nou." });
            });
    };

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h1 className="modern-underline">Contactează-ne</h1>
            </div>
            <div
                className="mx-auto p-4 rounded-3"
                style={{ maxWidth: "500px", backgroundColor: "#343a40" }}
            >
                {alert && (
                    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                        {alert.message}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setAlert(null)}
                            aria-label="Close"
                        />
                    </div>
                )}

                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-light">Nume</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-light">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-light">Mesaj</label>
                        <textarea className="form-control" id="message" name="message" rows={5} required></textarea>
                    </div>
                    <input type="hidden" name="time" value={new Date().toLocaleString('ro-RO')} />
                    <button type="submit" className="btn btn-primary w-100">Trimite</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;