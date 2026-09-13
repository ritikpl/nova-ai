import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    Bot,
    CheckCircle2,
    Crosshair,
    Eye,
    Focus,
    ListChecks,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
    X,
} from "lucide-react";

import {
    processSteps,
    workflowBenefits,
    howItWorksStats,
    beforeAfterData,
} from "../data/howItWorksData";

const iconMap = {
    Target,
    ListChecks,
    Bot,
    Users,
    BarChart3,
    TrendingUp,
    Zap,
    Focus,
    Eye,
};

const getIcon = (name) => iconMap[name] || Sparkles;

const journeySteps = [
    { title: "Idea", icon: Target },
    { title: "Plan", icon: ListChecks },
    { title: "Assign", icon: Users },
    { title: "Automate", icon: Bot },
    { title: "Execute", icon: Zap },
    { title: "Complete", icon: CheckCircle2 },
];

/* =========================================================
   STATS COUNT ANIMATION
========================================================= */

function AnimatedStat({ value }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const numericValue = parseInt(value, 10);

        if (isNaN(numericValue)) return;

        let current = 0;

        const duration = 1200;
        const intervalTime = 40;
        const steps = duration / intervalTime;
        const increment = numericValue / steps;

        const interval = setInterval(() => {
            current += increment;

            if (current >= numericValue) {
                setCount(numericValue);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [started, value]);

    const suffix = value.replace(/^\d+/, "");

    return (
        <div
            ref={ref}
            className="text-3xl font-bold text-[var(--nova-text)] sm:text-4xl"
        >
            {count}
            {suffix}
        </div>
    );
}

export default function HowItWorks() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--nova-bg)] text-[var(--nova-text)]">

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--nova-border)] bg-[var(--nova-surface)] px-4 py-2 text-xs font-medium text-[var(--nova-muted)] transition-colors duration-300">
                        <Sparkles
                            size={14}
                            className="text-[var(--nova-cyan)]"
                        />
                        Simple workflow. Smarter execution.
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-5xl lg:text-7xl">
                        From idea{" "}
                        <span className="bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                            to impact.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8">
                        NOVA gives your team a simple process for turning goals
                        into organized work, automated workflows, and measurable
                        progress.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/pricing"
                            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] px-6 py-3 text-sm font-semibold text-[#0B081B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                        >
                            Start with NOVA
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="#process"
                            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-3 text-sm font-medium text-[var(--nova-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/30 hover:text-[var(--nova-text)]"
                        >
                            See how it works
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
                STATS
            ========================================================= */}
            <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
                <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] shadow-xl shadow-black/5 transition-all duration-300 hover:border-[var(--nova-cyan)]/20 sm:grid-cols-3">
                    {howItWorksStats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-6 py-7 text-center ${
                                index !== 0
                                    ? "border-t border-[var(--nova-border)] sm:border-l sm:border-t-0"
                                    : ""
                            }`}
                        >
                            <AnimatedStat value={stat.value} />

                            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--nova-muted)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================================
                PROCESS
            ========================================================= */}
            <section
                id="process"
                className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
            >
                <div className="mx-auto max-w-6xl">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            The process
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl lg:text-5xl">
                            Six steps to better work.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--nova-muted)] sm:text-base">
                            NOVA keeps your workflow clear from the first goal
                            to the final result.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step, index) => {
                            const Icon = getIcon(step.icon);
                            const isPurple = step.color === "purple";

                            return (
                                <div
                                    key={step.number}
                                    className="group relative rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)]"
                                >
                                    <div className="mb-6 flex items-center justify-between">
                                        <div
                                            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
                                                isPurple
                                                    ? "border-[#C054FF]/20 bg-[#C054FF]/10 text-[#C054FF]"
                                                    : "border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)]"
                                            }`}
                                        >
                                            <Icon size={20} />
                                        </div>

                                        <span className="text-3xl font-bold text-[var(--nova-muted)] opacity-20">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-[var(--nova-text)]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {step.description}
                                    </p>

                                    {index < processSteps.length - 1 && (
                                        <div className="mt-6 hidden h-px bg-gradient-to-r from-[var(--nova-border)] via-[var(--nova-border)] to-transparent lg:block" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                WORKFLOW JOURNEY
            ========================================================= */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] shadow-xl shadow-black/5 transition-all duration-300 hover:border-[var(--nova-cyan)]/20">

                    <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                        {/* Left */}
                        <div className="border-b border-[var(--nova-border)] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#C054FF]">
                                <Crosshair size={19} />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C054FF]">
                                Your workflow
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl">
                                Every step stays connected.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[var(--nova-muted)]">
                                Move work through a clear path without losing
                                context. NOVA keeps goals, people, tasks,
                                automation, and progress connected.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="p-6 sm:p-10 lg:p-12">
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {journeySteps.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <div
                                            key={step.title}
                                            className="group relative rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/25"
                                        >
                                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)] transition-transform duration-300 group-hover:scale-105">
                                                <Icon size={18} />
                                            </div>

                                            <p className="mt-3 text-xs font-semibold text-[var(--nova-text)]">
                                                {step.title}
                                            </p>

                                            {index < journeySteps.length - 1 &&
                                                index !== 2 && (
                                                    <ArrowRight
                                                        size={13}
                                                        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[var(--nova-muted)] sm:block"
                                                    />
                                                )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 rounded-xl border border-[var(--nova-border)] bg-gradient-to-r from-[var(--nova-cyan)]/5 via-[#7C3AED]/10 to-[#C054FF]/5 p-5 transition-all duration-300 hover:border-[var(--nova-cyan)]/20">
                                <div className="flex items-start gap-3">
                                    <Sparkles
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-[var(--nova-text)]">
                                            NOVA keeps the momentum going
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                            Intelligent assistance helps your
                                            team move smoothly from planning
                                            to completion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BEFORE VS AFTER
            ========================================================= */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            The difference
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl lg:text-5xl">
                            A better way to work.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--nova-muted)] sm:text-base">
                            See how NOVA turns disconnected work into a clear,
                            connected workflow.
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr]">

                        {/* BEFORE */}
                        <div className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-border)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.03)] sm:p-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] text-[var(--nova-muted)]">
                                    <X size={18} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--nova-muted)]">
                                        {beforeAfterData.before.label}
                                    </p>

                                    <h3 className="mt-1 text-xl font-semibold text-[var(--nova-text)]">
                                        {beforeAfterData.before.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-7 space-y-3">
                                {beforeAfterData.before.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3.5"
                                    >
                                        <X
                                            size={15}
                                            className="shrink-0 text-[var(--nova-muted)]"
                                        />

                                        <span className="text-sm text-[var(--nova-muted)]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* VS */}
                        <div className="flex items-center justify-center py-1 lg:py-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nova-border)] bg-[var(--nova-surface)] text-[10px] font-bold tracking-wider text-[var(--nova-muted)]">
                                VS
                            </div>
                        </div>

                        {/* AFTER */}
                        <div className="group relative overflow-hidden rounded-2xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/35 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.06)] sm:p-8">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--nova-cyan)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)]">
                                        <CheckCircle2 size={18} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--nova-cyan)]">
                                            {beforeAfterData.after.label}
                                        </p>

                                        <h3 className="mt-1 text-xl font-semibold text-[var(--nova-text)]">
                                            {beforeAfterData.after.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-7 space-y-3">
                                    {beforeAfterData.after.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-4 py-3.5"
                                        >
                                            <CheckCircle2
                                                size={15}
                                                className="shrink-0 text-[var(--nova-cyan)]"
                                            />

                                            <span className="text-sm text-[var(--nova-text)]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                AI SECTION
            ========================================================= */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* Content */}
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C054FF]/20 bg-[#C054FF]/10 px-3 py-1.5 text-xs font-medium text-[#C054FF]">
                                <Bot size={14} />
                                AI-powered workflow
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl lg:text-5xl">
                                AI that supports the way your team works.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base">
                                NOVA doesn't replace your team's process. It
                                works alongside it by helping reduce repetitive
                                work, surface useful information, and keep
                                execution moving.
                            </p>

                            <div className="mt-7 space-y-4">
                                {[
                                    "Identify repetitive work",
                                    "Keep important actions visible",
                                    "Turn activity into useful insights",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-[var(--nova-text)]"
                                    >
                                        <CheckCircle2
                                            size={17}
                                            className="shrink-0 text-[var(--nova-cyan)]"
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Card */}
                        <div className="group relative rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_20px_45px_rgb(var(--nova-cyan-rgb)/0.06)] sm:p-8">
                            <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full bg-[#C054FF]/10 blur-3xl" />

                            <div className="relative">
                                <div className="flex items-center justify-between border-b border-[var(--nova-border)] pb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C054FF]/10 text-[#C054FF]">
                                            <Bot size={19} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-[var(--nova-text)]">
                                                NOVA Assistant
                                            </p>

                                            <p className="text-xs text-[var(--nova-muted)]">
                                                Working with your workflow
                                            </p>
                                        </div>
                                    </div>

                                    <span className="h-2 w-2 rounded-full bg-[var(--nova-cyan)]" />
                                </div>

                                <div className="mt-6 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[var(--nova-cyan)]/20">
                                    <p className="text-xs text-[var(--nova-muted)]">
                                        Workflow suggestion
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[var(--nova-text)]">
                                        4 repetitive actions were detected in
                                        this workflow. Consider automating them
                                        to save time.
                                    </p>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[var(--nova-cyan)]/20">
                                        <Zap
                                            size={17}
                                            className="text-[var(--nova-cyan)]"
                                        />

                                        <p className="mt-3 text-lg font-bold text-[var(--nova-text)]">
                                            32%
                                        </p>

                                        <p className="mt-1 text-[11px] text-[var(--nova-muted)]">
                                            Potential time saved
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[#C054FF]/20">
                                        <TrendingUp
                                            size={17}
                                            className="text-[#C054FF]"
                                        />

                                        <p className="mt-3 text-lg font-bold text-[var(--nova-text)]">
                                            +24%
                                        </p>

                                        <p className="mt-1 text-[11px] text-[var(--nova-muted)]">
                                            Workflow efficiency
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BENEFITS
            ========================================================= */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 max-w-2xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Why it works
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl">
                            Designed around progress.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {workflowBenefits.map((benefit) => {
                            const Icon = getIcon(benefit.icon);

                            return (
                                <div
                                    key={benefit.title}
                                    className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)] transition-transform duration-300 group-hover:scale-105">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-[var(--nova-text)]">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================= */}
            <section className="px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28">
                <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-12 text-center transition-all duration-300 hover:border-[var(--nova-cyan)]/20 hover:shadow-[0_20px_50px_rgb(var(--nova-cyan-rgb)/0.05)] sm:px-10 lg:py-16">

                    <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[var(--nova-cyan)]/10 blur-3xl" />

                    <div className="relative">
                        <Sparkles
                            className="mx-auto text-[var(--nova-cyan)]"
                            size={22}
                        />

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--nova-text)] sm:text-4xl">
                            Ready to simplify your workflow?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--nova-muted)]">
                            Bring your team's goals, tasks, automation, and
                            progress into one connected workspace.
                        </p>

                        <Link
                            to="/pricing"
                            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] px-6 py-3 text-sm font-semibold text-[#0B081B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                        >
                            Explore NOVA

                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}






