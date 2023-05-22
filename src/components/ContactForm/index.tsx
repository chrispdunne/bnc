import { useReCaptcha } from "next-recaptcha-v3";
import { FormEvent, useState } from "react";

export default function ContactForm() {
    const { executeRecaptcha } = useReCaptcha();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [formMsg, setFormMsg] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSending) return;

        setFormMsg("");
        setIsSending(true);

        const token = await executeRecaptcha("form_submit");

        const paramsObj = {
            token,
            firstName,
            lastName,
            email,
            phone,
            message,
        };
        const searchParams = new URLSearchParams(paramsObj);

        let res;
        try {
            res = await fetch(
                `${process.env.NEXT_PUBLIC_CMS_URL}/api/recaptcha`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: searchParams,
                }
            );
        } catch (e) {
            console.error(e);
            setIsSending(false);
            setFormMsg("Error 101: msg not sent");
            return;
        }
        if (res?.ok) {
            const raw = await res.json();
            const response = await JSON.parse(raw);
            // console.log(response.success, response.score > 0.5, response.success);
            if (response.success && response.score > 0.5) {
                // not a bot
                setFormMsg("Message sent successfully. Thanks!");
            } else {
                // maybe a bot
                setFormMsg("Error 202: msg not sent");
            }
            setIsSending(false);
        } else {
            setIsSending(false);
            setFormMsg("Error 303: msg not sent");

            return;
        }
    };

    return (
        <form
            method="POST"
            id="contact"
            onSubmit={handleOnSubmit}
            className="my-12"
        >
            <label htmlFor="firstName" className="firstName">
                First Name
                <input
                    disabled={isSending}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    id="firstName"
                    name="firstName"
                />
            </label>
            <label htmlFor="lastName" className="lastName">
                Last Name
                <input
                    disabled={isSending}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    id="lastName"
                    name="lastName"
                />
            </label>
            <label htmlFor="email" className="email">
                Email
                <input
                    disabled={isSending}
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                />
            </label>
            <label htmlFor="phone" className="phone">
                Phone
                <input
                    disabled={isSending}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    name="phone"
                />
            </label>
            <label htmlFor="message" className="message">
                Message
                <textarea
                    disabled={isSending}
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                />
            </label>

            <button disabled={isSending} type="submit">
                {isSending ? "sending..." : "Send message"}
            </button>
            {formMsg && <div className="text-sm mt-4 font-bold">{formMsg}</div>}
        </form>
    );
}
