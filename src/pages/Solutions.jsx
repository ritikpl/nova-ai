import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import {
    solutionsData,
    solutionChallenges,
    solutionUseCases,
    solutionOutcomes,
} from "../data/solutionsData";

const Solutions = () => {
    return (
        <main className="min-h-screen bg-[var(--nova-bg)] text-[var(--nova-text)]">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-4xl text-center">

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--nova-border)] bg-[var(--nova-surface)] px-4 py-2 text-sm text-[var(--nova-muted)]">
                            <Sparkles
                                size={16}
                                className="text-[var(--nova-cyan)]"
                            />
                            Built for modern teams
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            One workspace.
                            <span className="block bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                                Built for every workflow.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--nova-muted)] sm:text-lg">
                            NOVA brings planning, execution, automation, and
                            progress tracking into one intelligent workspace
                            designed for teams of every size.
                        </p>

                    </div>
                </div>
            </section>


            {/* =====================================================
                SOLUTIONS
            ===================================================== */}
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className="mb-12 max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Solutions
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Everything your team needs
                        </h2>

                        <p className="mt-4 text-[var(--nova-muted)]">
                            Flexible workflows and intelligent automation
                            designed around the way your team actually works.
                        </p>
                    </div>


                    {/* Solution Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {solutionsData.map((solution, index) => (
                            <div
                                key={solution.title || index}
                                className="
                                    group rounded-2xl
                                    border border-[var(--nova-border)]
                                    bg-[var(--nova-surface)]
                                    p-7
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                                    hover:bg-[var(--nova-surface)]
                                    hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.08)]
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        mb-6 flex h-12 w-12 items-center
                                        justify-center rounded-xl
                                        border border-[var(--nova-cyan)]
                                        bg-[var(--nova-bg)]
                                        transition-all duration-300
                                        group-hover:border-[var(--nova-cyan)]
                                        group-hover:shadow-[0_0_16px_rgb(var(--nova-cyan-rgb)/0.12)]
                                    "
                                >
                                    <Zap
                                        size={22}
                                        className="text-[var(--nova-cyan)]"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {solution.description}
                                </p>

                                {/* Points */}
                                {solution.points && (
                                    <ul className="mt-6 space-y-3">
                                        {solution.points.map((point, pointIndex) => (
                                            <li
                                                key={pointIndex}
                                                className="flex items-start gap-3 text-sm text-[var(--nova-muted)]"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                                />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                CHALLENGES
            ===================================================== */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Challenges
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Replace complexity with clarity
                        </h2>

                        <p className="mt-4 text-[var(--nova-muted)]">
                            NOVA removes the friction that slows modern teams
                            down and replaces it with a simple, connected workflow.
                        </p>
                    </div>


                    {/* Challenge Cards */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {solutionChallenges.map((challenge, index) => (
                            <div
                                key={challenge.title || index}
                                className="
                                    group rounded-2xl
                                    border border-[var(--nova-border)]
                                    bg-[var(--nova-bg)]
                                    p-7
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                                    hover:bg-[var(--nova-surface)]
                                    hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.08)]
                                "
                            >
                                {/* Challenge */}
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--nova-muted)]">
                                        Challenge
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold">
                                        {challenge.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {challenge.description}
                                    </p>
                                </div>


                                {/* NOVA Solution */}
                                <div
                                    className="
                                        mt-7 rounded-xl
                                        border border-[var(--nova-border)]
                                        bg-[var(--nova-surface)]
                                        p-5
                                        transition-all duration-300
                                        group-hover:border-[rgb(var(--nova-cyan-rgb)/0.25)]
                                    "
                                >
                                    <div className="flex items-center gap-2">
                                        <Sparkles
                                            size={17}
                                            className="text-[var(--nova-cyan)]"
                                        />

                                        <span className="text-sm font-semibold text-[var(--nova-cyan)]">
                                            NOVA solution
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {challenge.solution}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                USE CASES
            ===================================================== */}
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="mb-12 max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Use Cases
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Designed for the way teams work
                        </h2>

                        <p className="mt-4 text-[var(--nova-muted)]">
                            From focused individuals to growing organizations,
                            NOVA adapts to different workflows and team needs.
                        </p>
                    </div>


                    {/* Use Case Cards */}
                    <div className="grid gap-6 sm:grid-cols-2">

                        {solutionUseCases.map((useCase, index) => (
                            <div
                                key={useCase.title || index}
                                className="
                                    group rounded-2xl
                                    border border-[var(--nova-border)]
                                    bg-[var(--nova-surface)]
                                    p-7
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                                    hover:bg-[var(--nova-surface)]
                                    hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.08)]
                                "
                            >
                                <div
                                    className="
                                        mb-6 flex h-11 w-11 items-center
                                        justify-center rounded-xl
                                        border border-[var(--nova-cyan)]
                                        bg-[var(--nova-bg)]
                                        transition-all duration-300
                                        group-hover:border-[var(--nova-cyan)]
                                        group-hover:shadow-[0_0_16px_rgb(var(--nova-cyan-rgb)/0.12)]
                                    "
                                >
                                    <Sparkles
                                        size={20}
                                        className="text-[var(--nova-cyan)]"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {useCase.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                    {useCase.description}
                                </p>

                                {useCase.points && (
                                    <ul className="mt-6 space-y-3">
                                        {useCase.points.map((point, pointIndex) => (
                                            <li
                                                key={pointIndex}
                                                className="flex items-start gap-3 text-sm text-[var(--nova-muted)]"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                                />

                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                OUTCOMES
            ===================================================== */}
            <section className="border-y border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                            Outcomes
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Work better. Move faster.
                        </h2>

                        <p className="mt-4 text-[var(--nova-muted)]">
                            Turn disconnected work into a predictable,
                            measurable workflow.
                        </p>
                    </div>


                    {/* Outcome Cards */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {solutionOutcomes.map((outcome, index) => (
                            <div
                                key={outcome.title || index}
                                className="
                                    group rounded-2xl
                                    border border-[var(--nova-border)]
                                    bg-[var(--nova-bg)]
                                    p-6 text-center
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                                    hover:bg-[var(--nova-surface)]
                                    hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.08)]
                                "
                            >
                                <div className="text-3xl font-bold text-[var(--nova-cyan)]">
                                    {outcome.value}
                                </div>

                                <h3 className="mt-3 text-lg font-semibold">
                                    {outcome.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[var(--nova-muted)]">
                                    {outcome.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                WORKFLOW
            ===================================================== */}
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div
                    className="
                        mx-auto max-w-7xl rounded-3xl
                        border border-[var(--nova-border)]
                        bg-[var(--nova-bg)]
                        p-6
                        transition-all duration-300
                        hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                        sm:p-8
                        lg:p-12
                    "
                >
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        {/* Left */}
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--nova-cyan)]">
                                Workflow
                            </span>

                            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                                From planning to progress,
                                <span className="block text-[var(--nova-cyan)]">
                                    everything stays connected.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-[var(--nova-muted)]">
                                NOVA connects your tasks, people, automation,
                                and progress so your team always knows what
                                needs to happen next.
                            </p>

                            <Link
                                to="/how-it-works"
                                className="
                                    mt-8 inline-flex items-center gap-2
                                    rounded-xl
                                    bg-[var(--nova-button)]
                                    px-5 py-3
                                    text-sm font-semibold
                                    text-white
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_10px_25px_rgb(var(--nova-cyan-rgb)/0.15)]
                                "
                            >
                                See how it works
                                <ArrowRight size={17} />
                            </Link>
                        </div>


                        {/* Right Workflow Card */}
                        <div className="space-y-4">

                            {[
                                {
                                    number: "01",
                                    title: "Plan",
                                    text: "Turn ideas into clear, actionable work.",
                                },
                                {
                                    number: "02",
                                    title: "Execute",
                                    text: "Automate repetitive work and keep everyone aligned.",
                                },
                                {
                                    number: "03",
                                    title: "Progress",
                                    text: "Track outcomes and continuously improve.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="
                                        group flex gap-4 rounded-2xl
                                        border border-[var(--nova-border)]
                                        bg-[var(--nova-surface)]
                                        p-5
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                                        hover:bg-[var(--nova-surface)]
                                        hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.08)]
                                    "
                                >
                                    <div
                                        className="
                                            flex h-10 w-10 shrink-0
                                            items-center justify-center
                                            rounded-xl
                                            border border-[var(--nova-cyan)]
                                            text-sm font-bold
                                            text-[var(--nova-cyan)]
                                            transition-all duration-300
                                            group-hover:border-[var(--nova-cyan)]
                                            group-hover:shadow-[0_0_14px_rgb(var(--nova-cyan-rgb)/0.12)]
                                        "
                                    >
                                        {step.number}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-[var(--nova-muted)]">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
                <div
                    className="
                        mx-auto max-w-5xl rounded-3xl
                        border border-[var(--nova-border)]
                        bg-[var(--nova-surface)]
                        px-6 py-12 text-center
                        transition-all duration-300
                        hover:border-[rgb(var(--nova-cyan-rgb)/0.3)]
                        sm:px-10 sm:py-16
                    "
                >
                    <Sparkles
                        size={26}
                        className="mx-auto text-[var(--nova-cyan)]"
                    />

                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        Ready to simplify your workflow?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-[var(--nova-muted)]">
                        Start building a smarter, more connected way of
                        working with NOVA.
                    </p>

                    <Link
                        to="/pricing"
                        className="
                            mt-8 inline-flex items-center gap-2
                            rounded-xl
                            bg-[var(--nova-button)]
                            px-6 py-3
                            font-semibold
                            text-white
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:shadow-[0_10px_25px_rgb(var(--nova-cyan-rgb)/0.15)]
                        "
                    >
                        Get started
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default Solutions;
