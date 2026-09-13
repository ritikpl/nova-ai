import React, { useState } from "react";
import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    contactInfo,
    contactOptions,
    contactReasons,
    companyHighlights,
    contactSupport,
} from "../data/contactData";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const getContactLink = (type, value) => {
        if (type === "email") {
            return `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`;
        }

        if (type === "phone") {
            return `tel:${value.replace(/\s/g, "")}`;
        }

        if (type === "whatsapp") {
            return `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`;
        }

        if (type === "location") {
            return "https://www.google.com/maps/search/?api=1&query=12.9716,77.5946";
        }

        return "#";
    };

    const getIcon = (type) => {
        if (type === "email") return Mail;
        if (type === "phone") return Phone;
        if (type === "whatsapp") return MessageCircle;
        return MapPin;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.currentTarget.reset();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <main className="min-h-screen bg-[var(--nova-bg)] text-[var(--nova-text)]">
            {/* HERO */}
            <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
                <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgb(var(--nova-cyan-rgb)/0.08)] blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--nova-border)] bg-[var(--nova-surface)]/80 px-4 py-2 text-xs font-medium text-[var(--nova-muted)]">
                        <Sparkles
                            size={14}
                            className="text-[var(--nova-cyan)]"
                        />
                        Let's connect with NOVA
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                        Let's talk about
                        <br />
                        <span className="bg-gradient-to-r from-[var(--nova-cyan)] via-[var(--nova-blue)] to-[var(--nova-purple)] bg-clip-text text-transparent">
                            your workflow.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8">
                        Have a question, need a product demo, or want to learn
                        how NOVA can fit your team's workflow? Our team is here
                        to help.
                    </p>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {contactOptions.map((item) => {
                        const Icon = getIcon(item.type);

                        return (
                            <a
                                href={getContactLink(item.type, item.value)}
                                target={
                                    item.type === "phone"
                                        ? undefined
                                        : "_blank"
                                }
                                rel={
                                    item.type === "phone"
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                key={item.title}
                                className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--nova-cyan-rgb)/0.35)] hover:shadow-[0_12px_35px_rgb(var(--nova-cyan-rgb)/0.06)]"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--nova-border)] bg-[rgb(var(--nova-cyan-rgb)/0.08) transition-all duration-300 group-hover:border-[rgb(var(--nova-cyan-rgb)/0.5)] group-hover:bg-[rgb(var(--nova-cyan-rgb)/0.12)] ]">
                                    <Icon
                                        size={20}
                                        className="text-[var(--nova-cyan)]"
                                    />
                                </div>

                                <h2 className="mt-5 text-lg font-semibold">
                                    {item.title}
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {item.description}
                                </p>

                                <p className="mt-5 break-words text-sm font-medium text-[var(--nova-muted)] transition group-hover:text-[var(--nova-cyan)]">
                                    {item.value}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* CONTACT FORM + COMPANY INFO */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-bg)] px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* FORM */}
                    <div>
                        <div className="mb-8 max-w-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                                Send a message
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                Tell us what
                                <br />
                                <span className="text-[var(--nova-cyan)]">
                                    you need.
                                </span>
                            </h2>

                            <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                                Share a few details and our team can help point
                                you in the right direction.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 sm:p-8"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="text-sm font-medium text-[var(--nova-text)]">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        className="mt-2 w-full rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3 text-sm text-[var(--nova-text)] outline-none transition placeholder:text-[var(--nova-muted)] focus:border-[rgb(var(--nova-cyan-rgb)/0.5)]"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-[var(--nova-text)]">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="mt-2 w-full rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3 text-sm text-[var(--nova-text)] outline-none transition placeholder:text-[var(--nova-muted)] focus:border-[rgb(var(--nova-cyan-rgb)/0.5)]"
                                    />
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="text-sm font-medium text-[var(--nova-text)]">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your company"
                                    className="mt-2 w-full rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3 text-sm text-[var(--nova-text)] outline-none transition placeholder:text-[var(--nova-muted)] focus:border-[rgb(var(--nova-cyan-rgb)/0.5)]"
                                />
                            </div>

                            <div className="mt-5">
                                <label className="text-sm font-medium text-[var(--nova-text)]">
                                    Message
                                </label>

                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Tell us how we can help..."
                                    className="mt-2 w-full resize-none rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3 text-sm text-[var(--nova-text)] outline-none transition placeholder:text-[var(--nova-muted)] focus:border-[rgb(var(--nova-cyan-rgb)/0.5)]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--nova-button)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                            >
                                {submitted ? "Message sent" : "Send message"}
                                <Send size={16} />
                            </button>

                            {submitted && (
                                <p className="mt-4 text-center text-sm text-[var(--nova-cyan)]">
                                    Thanks! This form has been submitted.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* COMPANY INFO */}
                    <div className="lg:pt-14">
                        <div className="rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-7 sm:p-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nova-cyan-rgb)/0.08)]">
                                <Sparkles
                                    size={21}
                                    className="text-[var(--nova-cyan)]"
                                />
                            </div>

                            <h2 className="mt-6 text-2xl font-bold">
                                {contactInfo.companyName}
                            </h2>

                            <p className="mt-3 leading-7 text-[var(--nova-muted)]">
                                {contactInfo.tagline}
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-3">
                                    <Mail
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--nova-cyan)]"
                                    />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--nova-muted)]">
                                            Email
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--nova-text)]">
                                            {contactInfo.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--nova-cyan)]"
                                    />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--nova-muted)]">
                                            Phone
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--nova-text)]">
                                            {contactInfo.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--nova-cyan)]"
                                    />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--nova-muted)]">
                                            Location
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--nova-text)]">
                                            {contactInfo.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock3
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--nova-cyan)]"
                                    />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--nova-muted)]">
                                            Business hours
                                        </p>
                                        <p className="mt-1 text-sm text-[var(--nova-text)]">
                                            {contactInfo.hours}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-[var(--nova-border)] pt-7">
                                <p className="text-sm font-medium text-[var(--nova-text)]">
                                    Need quick assistance?
                                </p>

                                <a
                                    target="_blank"
                                    href={`https://wa.me/${contactInfo.whatsapp.replace(
                                        /\D/g,
                                        ""
                                    )}`}
                                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-5 py-3 text-sm font-semibold text-[var(--nova-muted)] transition hover:border-[var(--nova-cyan)] hover:text-[var(--nova-text)]"
                                >
                                    <MessageCircle size={17} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT REASONS */}
            <section className="px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            How can we help?
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Start with what
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                you need.
                            </span>
                        </h2>

                        <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                            Whether you're exploring NOVA or already using it,
                            our team can help with the next step.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {contactReasons.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--nova-cyan-rgb)/0.3)] hover:shadow-[0_12px_35px_rgb(var(--nova-cyan-rgb)/0.06)]"
                            >
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPANY HIGHLIGHTS */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-bg)] px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Why NOVA
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Built to make
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                work simpler.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {companyHighlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]"
                            >
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUPPORT + LINKS */}
            <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-14 text-center sm:px-10">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nova-cyan-rgb)/0.08)]">
                        <Sparkles
                            size={21}
                            className="text-[var(--nova-cyan)]"
                        />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                        {contactSupport.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--nova-muted)]">
                        {contactSupport.description}
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactSupport.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[var(--nova-button)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                        >
                            Email support
                            <ArrowRight size={16} />
                        </a>

                        <Link
                            to="/faq"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-6 py-3 text-sm font-medium text-[var(--nova-muted)] transition hover:border-[var(--nova-cyan)] hover:text-[var(--nova-text)]"
                        >
                            View FAQs
                        </Link>

                        <Link
                            to="/pricing"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-6 py-3 text-sm font-medium text-[var(--nova-muted)] transition hover:border-[var(--nova-cyan)] hover:text-[var(--nova-text)]"
                        >
                            View pricing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;