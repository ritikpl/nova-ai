import React, { useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { faqData, quickHelpData } from "../data/faqData";

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (category, question) => {
        const id = `${category}-${question}`;

        setOpenQuestion((current) => (current === id ? null : id));
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
                        Answers for your workflow
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                        Questions?
                        <br />
                        <span className="bg-gradient-to-r from-[var(--nova-cyan)] via-[var(--nova-blue)] to-[var(--nova-purple)] bg-clip-text text-transparent">
                            We've got answers.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8">
                        Find answers about NOVA, its features, workflows, and
                        pricing. Everything you need to know before getting started.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl">
                    {faqData.map((group) => (
                        <div key={group.category} className="mb-12 last:mb-0">
                            <div className="mb-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                                    {group.category}
                                </p>
                            </div>

                            <div className="space-y-3">
                                {group.questions.map((item) => {
                                    const id = `${group.category}-${item.question}`;
                                    const isOpen = openQuestion === id;

                                    return (
                                        <div
                                            key={item.question}
                                            className={`overflow-hidden rounded-2xl border bg-[var(--nova-surface)] transition-all duration-300 ${
                                                isOpen
                                                    ? "border-[rgb(var(--nova-cyan-rgb)/0.45)]"
                                                    : "border-[var(--nova-border)] hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]"
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    toggleQuestion(
                                                        group.category,
                                                        item.question
                                                    )
                                                }
                                                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                            >
                                                <span className="text-sm font-semibold text-[var(--nova-text)] sm:text-base">
                                                    {item.question}
                                                </span>

                                                <ChevronDown
                                                    size={19}
                                                    className={`shrink-0 text-[var(--nova-cyan)] transition-transform duration-300 ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>

                                            <div
                                                className={`grid transition-all duration-300 ${
                                                    isOpen
                                                        ? "grid-rows-[1fr]"
                                                        : "grid-rows-[0fr]"
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="border-t border-[var(--nova-border)] px-5 pb-5 pt-4 text-sm leading-7 text-[var(--nova-muted)] sm:px-6">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* QUICK HELP */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Quick help
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Find the right place
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                to get started.
                            </span>
                        </h2>

                        <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                            Explore the areas that matter most and quickly understand
                            how NOVA can fit into your workflow.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {quickHelpData.map((item) => (
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

            {/* CONTACT SUPPORT */}
            <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-14 text-center sm:px-10">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--nova-cyan)] bg-[rgb(var(--nova-cyan-rgb)/0.08)]">
                        <Sparkles
                            size={21}
                            className="text-[var(--nova-cyan)]"
                        />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                        Didn't find what you're looking for?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--nova-muted)]">
                        Explore NOVA's features or compare plans to find the right
                        solution for your team.
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/features"
                            className="inline-flex items-center gap-2 rounded-xl bg-[var(--nova-button)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                        >
                            Explore features
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            to="/pricing"
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

export default FAQ;