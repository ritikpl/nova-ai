import {
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Building2,
    Zap,
    ShieldCheck,
    TrendingUp,
    Star,
    Quote,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
    trustedCompanies,
    testimonials,
    benefits,
    actionItems,
    dashboardStats,
    activityItems,
    trustStats,
    actionDashboardStats,
} from "../data/homeData";

// ============================================================
// ICON MAP
// ============================================================

const iconMap = {
    Building2,
    Zap,
    Sparkles,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
};

// ============================================================
// SMALL REUSABLE COMPONENTS
// ============================================================

function Stars({ color = "cyan" }) {
    const colorClass =
        color === "purple" ? "text-[#C054FF]" : "text-[var(--nova-cyan)]";

    return (
        <div className={`flex shrink-0 gap-1 ${colorClass}`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" />
            ))}
        </div>
    );
}

function SectionHeading({
    eyebrow,
    title,
    gradientText,
    description,
}) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--nova-cyan)] sm:text-xs sm:tracking-[0.3em]">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                {title}

                {gradientText && (
                    <>
                        <br className="hidden sm:block" />

                        <span className="bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                            {gradientText}
                        </span>
                    </>
                )}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7 lg:text-lg">
                {description}
            </p>
        </div>
    );
}

// ============================================================
// DASHBOARD TOP BAR
// ============================================================

function DashboardTopBar() {
    return (
        <div className="flex min-w-0 items-center justify-between gap-2 border-b border-[var(--nova-border)] px-3 py-3 min-[400px]:px-4 sm:px-5 sm:py-4">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <div className="h-2 w-2 rounded-full bg-[#FF5F57] sm:h-2.5 sm:w-2.5" />
                <div className="h-2 w-2 rounded-full bg-[#FEBC2E] sm:h-2.5 sm:w-2.5" />
                <div className="h-2 w-2 rounded-full bg-[#28C840] sm:h-2.5 sm:w-2.5" />
            </div>

            <div className="min-w-0 max-w-[145px] truncate rounded-full border border-[var(--nova-border)] bg-[var(--nova-bg)] px-2.5 py-1.5 text-[10px] text-[var(--nova-muted)] min-[400px]:max-w-[180px] min-[400px]:px-3 sm:max-w-none sm:px-4 sm:text-xs">
                NOVA Workspace
            </div>

            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--nova-cyan)] animate-pulse sm:h-2.5 sm:w-2.5" />
        </div>
    );
}

// ============================================================
// HERO DASHBOARD
// ============================================================

function HeroDashboard() {
    return (
        <div className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-lg xl:max-w-xl">
            {/* Lightweight Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-gradient-to-r from-[var(--nova-cyan)]/10 via-[#7C3AED]/10 to-[#C054FF]/10 blur-2xl sm:-inset-5 sm:rounded-[40px]" />

            {/* Dashboard */}
            <div className="group relative min-w-0 overflow-hidden rounded-[22px] border border-[var(--nova-cyan)]/30 bg-[var(--nova-surface)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/40 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.06)] sm:rounded-[28px]">
                <DashboardTopBar />

                <div className="min-w-0 p-3 min-[400px]:p-4 sm:p-5 md:p-6 xl:p-7">
                    {/* Header */}
                    <div className="flex min-w-0 items-center justify-between gap-3">
                        <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--nova-muted)] sm:text-xs sm:tracking-widest">
                                Overview
                            </p>

                            <h3 className="mt-1 truncate text-lg font-bold text-[var(--nova-text)] min-[400px]:text-xl sm:text-2xl">
                                Good morning, team
                            </h3>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C054FF]/30 bg-[#C054FF]/10 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                            <Sparkles
                                size={18}
                                className="text-[#C054FF]"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-7 sm:gap-4">
                        {dashboardStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="group/stat min-w-0 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)] sm:p-5"
                            >
                                <p className="text-[10px] uppercase tracking-wider text-[var(--nova-muted)] sm:text-xs sm:normal-case sm:tracking-normal">
                                    {stat.label}
                                </p>

                                <div className="mt-2 flex items-end justify-between gap-3">
                                    <p className="text-2xl font-extrabold">
                                        {stat.value}
                                    </p>

                                    <span
                                        className={
                                            stat.color === "purple"
                                                ? "text-[10px] font-semibold text-[#C054FF] sm:text-xs"
                                                : "text-[10px] font-semibold text-[var(--nova-cyan)] sm:text-xs"
                                        }
                                    >
                                        {stat.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Productivity */}
                    <div className="group/productivity mt-3 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)] sm:mt-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <p className="text-xs text-[var(--nova-muted)]">
                                    Team Productivity
                                </p>

                                <p className="mt-1 text-lg font-bold sm:text-xl">
                                    78%
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full bg-[var(--nova-cyan)]/10 px-2.5 py-1 text-[10px] font-semibold text-[var(--nova-cyan)] sm:px-3 sm:text-xs">
                                +32%
                            </span>
                        </div>

                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--nova-border)] sm:mt-5 sm:h-2">
                            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#C054FF] to-[var(--nova-cyan)]" />
                        </div>
                    </div>

                    {/* AI Assistant */}
                    <div className="group/assistant mt-3 rounded-2xl border border-[#C054FF]/20 bg-gradient-to-r from-[#C054FF]/10 to-[var(--nova-cyan)]/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C054FF]/30 hover:shadow-[0_12px_30px_rgba(192,84,255,0.05)] sm:mt-4 sm:p-5">
                        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C054FF]/15 transition-transform duration-300 group-hover/assistant:scale-105 sm:h-10 sm:w-10">
                                <Sparkles
                                    size={17}
                                    className="text-[#C054FF]"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold">
                                    NOVA AI Assistant
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                    6 repetitive tasks were automated today.
                                    Your team saved 3.5 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-3 hidden rounded-2xl border border-[#C054FF]/30 bg-[var(--nova-surface)] px-4 py-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C054FF]/45 hover:shadow-[0_12px_30px_rgba(192,84,255,0.05)] min-[500px]:block sm:-left-5 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--nova-cyan)]/10">
                        <Sparkles
                            size={17}
                            className="text-[var(--nova-cyan)]"
                        />
                    </div>

                    <div>
                        <p className="text-[10px] text-[var(--nova-muted)]">
                            AI Efficiency
                        </p>

                        <p className="mt-1 text-sm font-bold text-[var(--nova-text)]">
                            +42% this month
                        </p>
                    </div>
                </div>
            </div>

            {/* Small Decorative Glows */}
            <div className="pointer-events-none absolute -right-5 top-1/4 h-12 w-12 rounded-full bg-[var(--nova-cyan)]/10 blur-2xl sm:-right-8 sm:h-16 sm:w-16" />

            <div className="pointer-events-none absolute -left-5 bottom-1/4 h-14 w-14 rounded-full bg-[#C054FF]/10 blur-2xl sm:-left-10 sm:h-20 sm:w-20" />
        </div>
    );
}

// ============================================================
// ACTION DASHBOARD
// ============================================================

function ActionDashboard() {
    return (
        <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none">
            {/* Lightweight Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-gradient-to-r from-[var(--nova-cyan)]/8 via-[#7C3AED]/8 to-[#C054FF]/8 blur-2xl sm:-inset-5 sm:rounded-[35px]" />

            <div className="group relative min-w-0 overflow-hidden rounded-[22px] border border-[var(--nova-cyan)]/25 bg-[var(--nova-surface)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/35 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.06)] sm:rounded-[28px]">
                <DashboardTopBar />

                <div className="min-w-0 p-3 min-[400px]:p-4 sm:p-5 md:p-6">
                    {/* Header */}
                    <div className="flex min-w-0 items-center justify-between gap-3">
                        <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--nova-muted)] sm:text-xs sm:tracking-widest">
                                Workspace
                            </p>

                            <h3 className="mt-1 truncate text-lg font-bold text-[var(--nova-text)] sm:text-xl md:text-2xl">
                                Team Overview
                            </h3>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C054FF]/30 bg-[#C054FF]/10 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                            <Sparkles
                                size={18}
                                className="text-[#C054FF]"
                            />
                        </div>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-7">
                        {actionDashboardStats.map(
                            ([label, value, status, color]) => (
                                <div
                                    key={label}
                                    className="min-w-0 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)]"
                                >
                                    <p className="text-[10px] uppercase tracking-wider text-[var(--nova-muted)]">
                                        {label}
                                    </p>

                                    <p className="mt-2 text-2xl font-extrabold">
                                        {value}
                                    </p>

                                    <p
                                        className={
                                            color === "purple"
                                                ? "mt-1 text-[10px] text-[#C054FF]"
                                                : "mt-1 text-[10px] text-[var(--nova-cyan)]"
                                        }
                                    >
                                        {status}
                                    </p>
                                </div>
                            )
                        )}
                    </div>

                    {/* Progress */}
                    <div className="mt-3 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)] sm:mt-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <p className="text-xs text-[var(--nova-muted)]">
                                    Project Progress
                                </p>

                                <p className="mt-1 truncate text-sm font-bold">
                                    Website Redesign
                                </p>
                            </div>

                            <span className="shrink-0 text-xs font-bold text-[var(--nova-cyan)]">
                                78%
                            </span>
                        </div>

                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--nova-border)] sm:h-2">
                            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#C054FF] to-[var(--nova-cyan)]" />
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="mt-3 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)] sm:mt-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-semibold text-[var(--nova-text)]">
                                Recent Activity
                            </p>

                            <span className="shrink-0 text-[10px] text-[var(--nova-muted)]">
                                Just now
                            </span>
                        </div>

                        <div className="mt-5 space-y-5">
                            {activityItems.map((item) => {
                                const ActivityIcon = iconMap[item.icon];

                                return (
                                    <div
                                        key={item.text}
                                        className="flex min-w-0 items-center gap-3"
                                    >
                                        <div
                                            className={
                                                item.color === "purple"
                                                    ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C054FF]/10 text-[10px] font-bold text-[#C054FF]"
                                                    : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--nova-cyan)]/10 text-[10px] font-bold text-[var(--nova-cyan)]"
                                            }
                                        >
                                            {item.initials}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-xs font-medium text-[var(--nova-muted)]">
                                                {item.text}
                                            </p>

                                            <p className="mt-1 text-[10px] text-[var(--nova-muted)]">
                                                {item.time}
                                            </p>
                                        </div>

                                        <ActivityIcon
                                            size={16}
                                            className={
                                                item.color === "purple"
                                                    ? "shrink-0 text-[#C054FF]"
                                                    : "shrink-0 text-[var(--nova-cyan)]"
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* AI Assistant */}
                    <div className="mt-3 rounded-2xl border border-[#C054FF]/25 bg-gradient-to-r from-[#C054FF]/10 to-[var(--nova-cyan)]/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C054FF]/35 hover:shadow-[0_12px_30px_rgba(192,84,255,0.05)] sm:mt-4 sm:p-5">
                        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C054FF]/15 transition-transform duration-300 hover:scale-105 sm:h-10 sm:w-10">
                                <Sparkles
                                    size={17}
                                    className="text-[#C054FF]"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-bold">
                                    NOVA AI Assistant
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                    6 repetitive tasks identified and
                                    automated. Your team saved valuable time
                                    today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-3 hidden rounded-2xl border border-[var(--nova-cyan)]/30 bg-[var(--nova-surface)] px-4 py-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/45 hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] min-[500px]:block sm:-right-4 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--nova-cyan)]/10">
                        <Zap
                            size={17}
                            className="text-[var(--nova-cyan)]"
                        />
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-[var(--nova-muted)]">
                            AI Automation
                        </p>

                        <p className="mt-1 text-sm font-bold text-[var(--nova-text)]">
                            6 tasks automated
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// HOME
// ============================================================

function Home() {
    const statsRef = useRef(null);
    const [statsStarted, setStatsStarted] = useState(false);

    useEffect(() => {
        const element = statsRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsStarted(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <main className="min-h-screen overflow-x-hidden bg-[var(--nova-bg)] text-[var(--nova-text)]">
            {/* ========================================================
                HERO
            ======================================================== */}

            <section className="relative min-h-screen overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
                {/* Lightweight Background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-[10%] top-20 h-48 w-48 rounded-full bg-[#C054FF]/10 blur-2xl sm:left-1/4 sm:h-64 sm:w-64" />

                    <div className="absolute right-[5%] top-40 h-52 w-52 rounded-full bg-[var(--nova-cyan)]/8 blur-2xl sm:right-1/4 sm:h-72 sm:w-72" />

                    <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#7C3AED]/8 blur-2xl sm:h-72 sm:w-72" />

                    <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(192,84,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--nova-cyan-rgb) / 0.08) 1px, transparent 1px)",
                            backgroundSize: "70px 70px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
                        {/* LEFT */}
                        <div className="min-w-0 max-w-2xl">
                            {/* Badge */}
                            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-surface)] px-3 py-2 transition-all duration-300  hover:border-[var(--nova-cyan)]/30  sm:mb-7 sm:px-4">
                                <Sparkles
                                    size={14}
                                    className="shrink-0 text-[var(--nova-cyan)]" 
                                />

                                <span className="truncate text-[11px] font-medium text-[var(--nova-muted)] sm:text-sm">
                                    AI-Powered Productivity Platform
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-[clamp(2.5rem,10vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-8xl">
                                <span className="block text-[var(--nova-text)]">
                                    Build Better.
                                </span>

                                <span className="mt-2 block bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                                    Work Smarter.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-6 max-w-xl text-sm leading-6 text-[var(--nova-muted)] sm:mt-7 sm:text-base sm:leading-7 md:text-lg">
                                NOVA helps modern teams manage projects,
                                automate repetitive tasks, and collaborate
                                efficiently with the power of AI.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                                <Link
                                    to="/pricing"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--nova-cyan)] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_18px_rgb(var(--nova-cyan-rgb)/0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22F5FF] hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)] sm:w-auto sm:px-7 sm:py-4"
                                >
                                    Get Started Free

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    to="/product"
                                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#C054FF]/40 bg-[var(--nova-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--nova-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C054FF]/60 hover:bg-[#C054FF]/10 hover:shadow-[0_8px_25px_rgba(192,84,255,0.06)] sm:w-auto sm:px-7 sm:py-4"
                                >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C054FF]/60 transition-transform duration-300 group-hover:scale-105">
                                        <ArrowRight
                                            size={14}
                                            className="text-[#C054FF] transition-transform duration-300 group-hover:translate-x-0.5"
                                        />
                                    </span>

                                    Explore NOVA
                                </Link>
                            </div>

                            {/* Trust */}
                            <div className="mt-7 flex flex-col gap-3 text-xs text-[var(--nova-muted)] min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-x-6 sm:mt-8 sm:text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={15}
                                        className="shrink-0 text-[var(--nova-cyan)]"
                                    />
                                    No credit card required
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={15}
                                        className="shrink-0 text-[#C054FF]"
                                    />
                                    Start in minutes
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <HeroDashboard />
                    </div>
                </div>
            </section>

            {/* ========================================================
                TRUSTED BY
            ======================================================== */}

            <section className="relative border-t border-[var(--nova-border)] bg-[var(--nova-bg)] py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--nova-cyan)]/8 blur-2xl sm:h-64 sm:w-64" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Trusted by modern teams"
                        title="Built for teams that"
                        gradientText="move faster."
                        description="From technology teams to creative studios, NOVA brings projects, people, and AI-powered workflows into one place."
                    />

                    {/* Companies */}
                    <div className="mt-10 grid gap-4 min-[500px]:grid-cols-2 sm:mt-14 lg:grid-cols-5">
                        {trustedCompanies.map((company) => {
                            const Icon = iconMap[company.icon];

                            return (
                                <div
                                    key={company.name}
                                    className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6"
                                >
                                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#C054FF]/20 bg-[#C054FF]/10 transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--nova-cyan)]/40 group-hover:bg-[var(--nova-cyan)]/10 sm:h-12 sm:w-12">
                                        <Icon
                                            size={21}
                                            className="text-[#C054FF] transition-colors duration-300 group-hover:text-[var(--nova-cyan)]"
                                        />
                                    </div>

                                    <h3 className="mt-4 text-base font-extrabold tracking-wider sm:mt-5 sm:text-lg">
                                        {company.name}
                                    </h3>

                                    <p className="mt-2 text-[10px] uppercase tracking-widest text-[var(--nova-muted)] sm:text-xs">
                                        {company.type}
                                    </p>

                                    <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-[var(--nova-cyan)] to-transparent opacity-50" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Stats */}
                    <div
                        ref={statsRef}
                        className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3"
                    >
                        {trustStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6"
                            >
                                <p className="text-3xl font-extrabold text-[var(--nova-text)] sm:text-4xl">
                                    <span
                                        className={`inline-block transition-all duration-700 ${
                                            statsStarted
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-3 opacity-0"
                                        }`}
                                    >
                                        {statsStarted ? stat.value : "0"}
                                    </span>
                                </p>

                                <p className="mt-2 text-sm text-[var(--nova-muted)]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================
                TESTIMONIALS
            ======================================================== */}

            <section className="relative overflow-hidden border-t border-[var(--nova-border)] bg-[var(--nova-bg)] py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute left-0 top-1/3 h-56 w-56 rounded-full bg-[#C054FF]/8 blur-2xl" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[var(--nova-cyan)]/8 blur-2xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="What teams say"
                        title="Less busywork."
                        gradientText="More meaningful work."
                        description="Teams use NOVA to organize their work, automate repetitive tasks, and keep everyone moving in the same direction."
                    />

                    <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="group flex min-w-0 flex-col rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-7"
                            >
                                <Quote
                                    size={27}
                                    className={
                                        testimonial.color === "purple"
                                            ? "text-[#C054FF]/50 transition-transform duration-300 group-hover:scale-105"
                                            : "text-[var(--nova-cyan)]/50 transition-transform duration-300 group-hover:scale-105"
                                    }
                                />

                                <p className="mt-5 flex-1 text-sm leading-7 text-[var(--nova-muted)]">
                                    “{testimonial.text}”
                                </p>

                                <div className="mt-7 flex min-w-0 items-end justify-between gap-4">
                                    <div className="min-w-0">
                                        <h3 className="truncate font-bold text-[var(--nova-text)]">
                                            {testimonial.name}
                                        </h3>

                                        <p className="mt-1 truncate text-xs text-[var(--nova-muted)]">
                                            {testimonial.role}
                                        </p>
                                    </div>

                                    <Stars color={testimonial.color} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:mt-16">
                        <div className="flex items-center gap-2 text-[var(--nova-cyan)]">
                            <CheckCircle2 size={18} />

                            <span className="text-xs font-semibold sm:text-sm">
                                Built for teams that value better work
                            </span>
                        </div>

                        <p className="text-xs text-[var(--nova-muted)]">
                            Simple workflows • AI automation • Better
                            collaboration
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================================
                WHY NOVA
            ======================================================== */}

            <section className="relative overflow-hidden border-t border-[var(--nova-border)] bg-[var(--nova-bg)] py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute left-1/4 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[var(--nova-cyan)]/8 blur-2xl sm:h-64 sm:w-64" />

                <div className="pointer-events-none absolute right-1/4 top-1/3 h-52 w-52 rounded-full bg-[#C054FF]/8 blur-2xl sm:h-64 sm:w-64" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why NOVA"
                        title="Everything your team needs"
                        gradientText="to work smarter."
                        description="NOVA removes the friction from everyday work so your team can spend less time managing tasks and more time creating impact."
                    />

                    <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit) => {
                            const Icon = iconMap[benefit.icon];
                            const isPurple = benefit.color === "purple";

                            return (
                                <div
                                    key={benefit.title}
                                    className={`group relative overflow-hidden rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] ${
                                        isPurple
                                            ? "hover:border-[#C054FF]/30"
                                            : "hover:border-[var(--nova-cyan)]/25"
                                    } sm:p-7`}
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14 ${
                                            isPurple
                                                ? "border border-[#C054FF]/20 bg-[#C054FF]/10 group-hover:border-[#C054FF]/40"
                                                : "border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 group-hover:border-[var(--nova-cyan)]/40"
                                        }`}
                                    >
                                        <Icon
                                            size={23}
                                            className={
                                                isPurple
                                                    ? "text-[#C054FF]"
                                                    : "text-[var(--nova-cyan)]"
                                            }
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-[var(--nova-text)] sm:mt-6 sm:text-xl">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {benefit.description}
                                    </p>

                                    <div
                                        className={`mt-5 flex items-center gap-2 text-xs font-semibold sm:mt-6 ${
                                            isPurple
                                                ? "text-[#C054FF]"
                                                : "text-[var(--nova-cyan)]"
                                        }`}
                                    >
                                        <CheckCircle2 size={15} />
                                        {benefit.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Highlight */}
                    <div className="group mt-8 rounded-3xl border border-[var(--nova-cyan)]/20 bg-gradient-to-r from-[var(--nova-cyan)]/5 via-[var(--nova-surface)] to-[#C054FF]/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/30 hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] sm:mt-10 sm:p-8">
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nova-cyan)]/15 to-[#C054FF]/15 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                            <Sparkles
                                size={21}
                                className="text-[var(--nova-cyan)]"
                            />
                        </div>

                        <h3 className="mx-auto mt-4 max-w-2xl text-lg font-bold sm:mt-5 sm:text-2xl">
                            Your work should move forward — not get stuck in
                            busywork.
                        </h3>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--nova-muted)]">
                            NOVA brings clarity, automation, and intelligent
                            assistance together so your team can focus on what
                            actually matters.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================================
                NOVA IN ACTION
            ======================================================== */}

            <section className="relative overflow-hidden border-t border-[var(--nova-border)] bg-[var(--nova-bg)] py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute left-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[var(--nova-cyan)]/8 blur-2xl sm:h-72 sm:w-72" />

                <div className="pointer-events-none absolute right-0 top-1/4 h-52 w-52 rounded-full bg-[#C054FF]/8 blur-2xl sm:h-64 sm:w-64" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="NOVA in Action"
                        title="See your team's work"
                        gradientText="come together."
                        description="A focused workspace where your projects, tasks, team activity, and AI assistance come together without the clutter."
                    />

                    <div className="mt-10 grid items-center gap-10 sm:mt-12 md:gap-12 lg:grid-cols-2">
                        {/* LEFT */}
                        <div className="min-w-0 max-w-xl">
                            <div className="space-y-4 sm:space-y-5">
                                {actionItems.map((item) => {
                                    const Icon = iconMap[item.icon];
                                    const isPurple =
                                        item.color === "purple";

                                    return (
                                        <div
                                            key={item.title}
                                            className={`group flex min-w-0 gap-3 rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] ${
                                                isPurple
                                                    ? "hover:border-[#C054FF]/25"
                                                    : "hover:border-[var(--nova-cyan)]/25"
                                            } sm:gap-4 sm:p-5`}
                                        >
                                            <div
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 ${
                                                    isPurple
                                                        ? "bg-[#C054FF]/10 text-[#C054FF]"
                                                        : "bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)]"
                                                }`}
                                            >
                                                <Icon size={19} />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="font-bold text-[var(--nova-text)]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-[var(--nova-muted)]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <Link
                                to="/product"
                                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--nova-cyan)]/30 bg-[var(--nova-cyan)]/10 px-6 py-3.5 text-sm font-bold text-[var(--nova-cyan)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/50 hover:bg-[var(--nova-cyan)] hover:text-black hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.15)] sm:mt-8 sm:w-auto"
                            >
                                Explore NOVA

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        {/* RIGHT */}
                        <ActionDashboard />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;