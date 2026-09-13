import React from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingPlans } from "../data/pricingData";

const Pricing = () => {
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
                        Simple pricing. Powerful workflows.
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                        Choose the plan that
                        <br />
                        <span className="bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                            fits your workflow.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8">
                        Start with the essentials and upgrade when your team
                        needs more automation, visibility, and control.
                    </p>
                </div>
            </section>

            {/* PRICING PLANS */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                                plan.featured
                                    ? "border-[rgb(var(--nova-cyan-rgb)/0.45)] bg-[var(--nova-surface)] shadow-[0_15px_45px_rgb(var(--nova-cyan-rgb)/0.08)]"
                                    : "border-[var(--nova-border)] bg-[var(--nova-surface)] hover:border-[rgb(var(--nova-cyan-rgb)/0.3)] hover:bg-[var(--nova-surface)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.06)]"
                            }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[rgb(var(--nova-cyan-rgb)/0.4)] bg-[var(--nova-bg)] px-4 py-1 text-xs font-semibold text-[var(--nova-cyan)]">
                                    Most popular
                                </div>
                            )}

                            <div>
                                <h2 className="text-xl font-semibold">
                                    {plan.name}
                                </h2>

                                <p className="mt-3 min-h-[48px] text-sm leading-6 text-[var(--nova-muted)]">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mt-7">
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold">
                                        {plan.price}
                                    </span>

                                    <span className="pb-1 text-xs text-[var(--nova-muted)]">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <Link
                                to="/how-it-works"
                                className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                                    plan.featured
                                        ? "bg-[var(--nova-button)] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                                        : "border border-[var(--nova-border)] bg-[var(--nova-bg)] text-[var(--nova-text)] hover:border-[var(--nova-cyan)] hover:text-[var(--nova-cyan)]"
                                }`}
                            >
                                {plan.button}
                                <ArrowRight size={16} />
                            </Link>

                            <div className="mt-8 border-t border-[var(--nova-border)] pt-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--nova-muted)]">
                                    Includes
                                </p>

                                <div className="mt-5 space-y-4">
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-[var(--nova-text)]"
                                        >
                                            <Check
                                                size={17}
                                                className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                            />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PLAN COMPARISON */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Compare plans
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Choose the right level of
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                power and control.
                            </span>
                        </h2>

                        <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                            Compare the core capabilities included with each NOVA plan
                            and choose what fits your team's workflow.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)]">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="border-b border-[var(--nova-border)]">
                                    <th className="px-6 py-5 text-sm font-semibold text-[var(--nova-text)]">
                                        Feature
                                    </th>
                                    <th className="px-6 py-5 text-center text-sm font-semibold text-[var(--nova-muted)]">
                                        Free
                                    </th>
                                    <th className="px-6 py-5 text-center text-sm font-semibold text-[var(--nova-cyan)]">
                                        Pro
                                    </th>
                                    <th className="px-6 py-5 text-center text-sm font-semibold text-[var(--nova-cyan)]">
                                        Business
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Projects", "3", "Unlimited", "Unlimited"],
                                    ["Task management", "Basic", "Advanced", "Advanced"],
                                    ["Workflow automation", "Basic", "Advanced", "Advanced"],
                                    ["Team collaboration", "✓", "✓", "✓"],
                                    ["Progress insights", "—", "✓", "✓"],
                                    ["Advanced analytics", "—", "✓", "✓"],
                                    ["Team controls", "—", "—", "✓"],
                                    ["Priority support", "—", "✓", "✓"],
                                ].map(([feature, free, pro, business]) => (
                                    <tr
                                        key={feature}
                                        className="border-b border-[var(--nova-border)] last:border-b-0"
                                    >
                                        <td className="px-6 py-4 text-sm text-[var(--nova-text)]">
                                            {feature}
                                        </td>

                                        <td className="px-6 py-4 text-center text-sm text-[var(--nova-muted)]">
                                            {free}
                                        </td>

                                        <td className="px-6 py-4 text-center text-sm font-medium text-[var(--nova-text)]">
                                            {pro}
                                        </td>

                                        <td className="px-6 py-4 text-center text-sm font-medium text-[var(--nova-text)]">
                                            {business}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* VALUE SECTION */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-bg)] px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            What's included
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Everything you need to
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                keep work moving.
                            </span>
                        </h2>

                        <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                            Every NOVA plan is designed to help teams organize
                            work, simplify processes, and maintain visibility.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Projects",
                                text: "Keep projects organized with clear goals, tasks, and ownership.",
                            },
                            {
                                title: "Automation",
                                text: "Reduce repetitive work with simple and connected workflows.",
                            },
                            {
                                title: "Collaboration",
                                text: "Keep your team aligned with one shared workspace.",
                            },
                            {
                                title: "Insights",
                                text: "Understand progress and priorities with better visibility.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--nova-cyan-rgb)/0.3)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.06)]"
                            >
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY NOVA */}
            <section className="px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Why NOVA
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            A simpler way to
                            <br />
                            <span className="text-[var(--nova-cyan)]">
                                scale your workflow.
                            </span>
                        </h2>

                        <p className="mt-4 leading-7 text-[var(--nova-muted)]">
                            NOVA gives teams the flexibility to start small and grow
                            without adding unnecessary complexity.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Start free",
                                description:
                                    "Explore the core NOVA workflow without an upfront commitment.",
                            },
                            {
                                title: "Scale when needed",
                                description:
                                    "Upgrade as your projects, teams, and workflow requirements grow.",
                            },
                            {
                                title: "Flexible workflows",
                                description:
                                    "Adapt NOVA to different teams, processes, and working styles.",
                            },
                            {
                                title: "Built for teams",
                                description:
                                    "Keep people, tasks, processes, and progress connected in one place.",
                            },
                        ].map((item) => (
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

            {/* FAQ PREVIEW */}
            <section className="px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Pricing questions
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Flexible plans. No unnecessary complexity.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--nova-muted)]">
                            Start small, upgrade when you need more, and choose
                            the workspace that fits your team's workflow.
                        </p>
                    </div>

                    <div className="mt-10 space-y-4">
                        <div className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6">
                            <h3 className="font-semibold">
                                Can I start for free?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[var(--nova-muted)]">
                                Yes. The Free plan gives you the core tools
                                needed to start organizing your work.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6">
                            <h3 className="font-semibold">
                                Can I upgrade later?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[var(--nova-muted)]">
                                Absolutely. You can move to a higher plan as
                                your team's workflow and needs grow.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6">
                            <h3 className="font-semibold">
                                Which plan is right for my team?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[var(--nova-muted)]">
                                Free is ideal for getting started, Pro is built
                                for growing teams, and Business is designed for
                                larger organizations and complex workflows.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--nova-cyan)] transition hover:text-[var(--nova-text)]"
                        >
                            View all FAQs
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-24 pt-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-14 text-center sm:px-10">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--nova-cyan)] bg-[rgb(var(--nova-cyan-rgb)/0.08)]">
                        <Sparkles
                            size={21}
                            className="text-[var(--nova-cyan)]"
                        />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                        Ready to move your work forward?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--nova-muted)]">
                        Start with NOVA and give your team a simpler way to
                        organize, automate, and execute.
                    </p>

                    <Link
                        to="/how-it-works"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--nova-button)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                    >
                        Get started
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Pricing;

