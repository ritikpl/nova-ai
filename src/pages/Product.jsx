import {
    ArrowRight,
    BarChart3,
    Bot,
    CheckSquare,
    Layers3,
    LayoutDashboard,
    Sparkles,
    TrendingUp,
    Users,
    Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    productModules,
    productStats,
    productHighlights,
} from "../data/productData";

const iconMap = {
    LayoutDashboard,
    Bot,
    CheckSquare,
    Users,
    BarChart3,
    Workflow,
    Layers3,
    Sparkles,
    TrendingUp,
};

const colorStyles = {
    cyan: {
        icon: "text-[var(--nova-cyan)]",
        glow: "bg-[var(--nova-cyan)]/10",
        border: "border-[var(--nova-cyan)]/20",
    },
    purple: {
        icon: "text-[#C054FF]",
        glow: "bg-[#C054FF]/10",
        border: "border-[#C054FF]/20",
    },
};

const SectionHeading = ({ eyebrow, title, description }) => {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-surface)] px-3 py-1.5 text-xs font-medium text-[var(--nova-muted)] sm:mb-5 sm:px-4 sm:text-sm">
                <Sparkles
                    size={14}
                    className="shrink-0 text-[var(--nova-cyan)]"
                />
                {eyebrow}
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-4xl md:text-5xl">
                {title}
            </h2>

            <p className="mt-4 text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7 md:text-lg">
                {description}
            </p>
        </div>
    );
};

const Product = () => {
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
                        The NOVA workspace
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-5xl lg:text-7xl">
                        Everything your team needs.
                        <br />
                        <span className="bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent">
                            All in one place.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8">
                        NOVA brings projects, tasks, collaboration, automation,
                        and insights together in one intelligent workspace built
                        to keep your work moving.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/pricing"
                            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] px-6 py-3 text-sm font-semibold text-[#0B081B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]"
                        >
                            Get started
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/features"
                            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-3 text-sm font-medium text-[var(--nova-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/30 hover:text-[var(--nova-text)]"
                        >
                            Explore features
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PRODUCT DASHBOARD
            ========================================================= */}
            <section className="relative py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-[#00C6FF]/10 via-transparent to-[#C054FF]/10 blur-3xl" />

                        <div className="group relative overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:shadow-[0_20px_50px_rgb(var(--nova-cyan-rgb)/0.06)] sm:rounded-3xl">

                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between border-b border-[var(--nova-border)] px-4 py-3 sm:px-6 sm:py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00F2FE] to-[#C054FF]">
                                        <Sparkles
                                            size={16}
                                            className="text-[#0B081B]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-[var(--nova-text)] sm:text-sm">
                                            NOVA Workspace
                                        </p>

                                        <p className="hidden text-[10px] text-[var(--nova-muted)] sm:block">
                                            Team overview
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="hidden rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/5 px-3 py-1 text-[10px] font-medium text-[var(--nova-cyan)] sm:inline-flex">
                                        Live
                                    </span>

                                    <div className="h-2 w-2 rounded-full bg-[var(--nova-cyan)]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr]">

                                {/* Sidebar */}
                                <aside className="hidden border-r border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 lg:block">
                                    <div className="space-y-2">
                                        {[
                                            "Overview",
                                            "Projects",
                                            "Tasks",
                                            "Team",
                                            "Analytics",
                                        ].map((item, index) => (
                                            <div
                                                key={item}
                                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium transition-colors duration-200 ${
                                                    index === 0
                                                        ? "bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)]"
                                                        : "text-[var(--nova-muted)] hover:bg-[var(--nova-surface-hover)] hover:text-[var(--nova-text)]"
                                                }`}
                                            >
                                                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </aside>

                                {/* Dashboard Content */}
                                <div className="p-4 sm:p-6">
                                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                        <div>
                                            <p className="text-xs text-[var(--nova-muted)]">
                                                Good morning
                                            </p>

                                            <h3 className="mt-1 text-lg font-semibold text-[var(--nova-text)] sm:text-xl">
                                                Here's your team's progress
                                            </h3>
                                        </div>

                                        <div className="rounded-lg border border-[var(--nova-border)] bg-[var(--nova-bg)] px-3 py-2 text-xs text-[var(--nova-muted)]">
                                            This week
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {productStats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-3 transition-all duration-200 hover:border-[var(--nova-cyan)]/20 hover:-translate-y-0.5 sm:p-4"
                                            >
                                                <p className="text-[10px] text-[var(--nova-muted)] sm:text-xs">
                                                    {stat.label}
                                                </p>

                                                <p className="mt-2 text-xl font-bold text-[var(--nova-text)] sm:text-2xl">
                                                    {stat.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Charts */}
                                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1fr]">

                                        {/* Project Progress */}
                                        <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-200 hover:border-[var(--nova-cyan)]/20 sm:p-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs font-medium text-[var(--nova-text)] sm:text-sm">
                                                        Project progress
                                                    </p>

                                                    <p className="mt-1 text-[10px] text-[var(--nova-muted)]">
                                                        Current sprint
                                                    </p>
                                                </div>

                                                <TrendingUp
                                                    size={17}
                                                    className="text-[var(--nova-cyan)]"
                                                />
                                            </div>

                                            <div className="mt-6 flex h-28 items-end gap-2 sm:h-36">
                                                {[35, 48, 42, 65, 58, 76, 88].map(
                                                    (height, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex h-full flex-1 items-end"
                                                        >
                                                            <div
                                                                className="w-full rounded-t-md bg-gradient-to-t from-[#00C6FF]/30 to-[#00F2FE]"
                                                                style={{
                                                                    height: `${height}%`,
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>

                                            <div className="mt-3 flex justify-between text-[9px] text-[var(--nova-muted)] sm:text-[10px]">
                                                <span>Mon</span>
                                                <span>Tue</span>
                                                <span>Wed</span>
                                                <span>Thu</span>
                                                <span>Fri</span>
                                                <span>Sat</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                        {/* NOVA AI */}
                                        <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-200 hover:border-[#C054FF]/20 sm:p-5">
                                            <div className="flex items-center gap-2">
                                                <Bot
                                                    size={17}
                                                    className="text-[#C054FF]"
                                                />

                                                <p className="text-xs font-medium text-[var(--nova-text)] sm:text-sm">
                                                    NOVA AI
                                                </p>
                                            </div>

                                            <p className="mt-4 text-xs leading-5 text-[var(--nova-muted)] sm:text-sm sm:leading-6">
                                                Your team completed 18 tasks
                                                this week. I found 4 repetitive
                                                workflows that can be automated.
                                            </p>

                                            <div className="mt-5 rounded-lg border border-[#C054FF]/15 bg-[#C054FF]/5 p-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] text-[var(--nova-muted)]">
                                                        Automation opportunity
                                                    </span>

                                                    <span className="text-[10px] font-semibold text-[#C054FF]">
                                                        4 tasks
                                                    </span>
                                                </div>

                                                <div className="mt-2 h-1.5 rounded-full bg-[var(--nova-border)]">
                                                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#C054FF] to-[#00C6FF]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                MODULES
            ========================================================= */}
            <section className="relative border-y border-[var(--nova-border)] bg-[var(--nova-surface)] py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeading
                        eyebrow="Everything connected"
                        title="One product. Every part of your workflow."
                        description="NOVA gives your team the right tools to plan, execute, collaborate, and understand progress without jumping between disconnected systems."
                    />

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {productModules.map((module) => {
                            const Icon =
                                iconMap[module.icon] || Layers3;

                            const style =
                                colorStyles[module.color] ||
                                colorStyles.cyan;

                            return (
                                <div
                                    key={module.title}
                                    className="group relative overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6"
                                >
                                    <div
                                        className={`pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full ${style.glow} blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                                    />

                                    <div className="relative">
                                        <div
                                            className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border ${style.border} ${style.glow} transition-transform duration-300 group-hover:scale-105`}
                                        >
                                            <Icon
                                                size={20}
                                                className={style.icon}
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold text-[var(--nova-text)] sm:text-xl">
                                            {module.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                            {module.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[var(--nova-muted)]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--nova-cyan)]" />
                                            Part of NOVA
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                HIGHLIGHTS
            ========================================================= */}
            <section className="relative py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <SectionHeading
                        eyebrow="Designed for momentum"
                        title="A workspace that works with your team."
                        description="NOVA combines clarity, intelligence, and collaboration into one experience designed to keep work moving."
                    />

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
                        {productHighlights.map((item, index) => {
                            const Icon =
                                iconMap[item.icon] || Sparkles;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/20 hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 transition-transform duration-300 group-hover:scale-105">
                                            <Icon
                                                size={20}
                                                className="text-[var(--nova-cyan)]"
                                            />
                                        </div>

                                        <span className="text-xs font-bold tracking-widest text-[var(--nova-muted)]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-lg font-semibold text-[var(--nova-text)] sm:text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                AI SECTION
            ========================================================= */}
            <section className="relative border-y border-[var(--nova-border)] bg-[var(--nova-surface)] py-20 sm:py-24 lg:py-28">
                <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#00C6FF]/10 blur-[100px]" />

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

                    {/* Content */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C054FF]/20 bg-[var(--nova-bg)] px-3 py-1.5 text-xs font-medium text-[var(--nova-muted)] sm:text-sm">
                            <Bot
                                size={14}
                                className="text-[#C054FF]"
                            />
                            Intelligence built in
                        </div>

                        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-4xl md:text-5xl">
                            Your workspace should do more than store work.
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7">
                            NOVA understands the way your team works and helps
                            turn everyday activity into useful actions, smarter
                            workflows, and clearer decisions.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="rounded-full border border-[var(--nova-border)] bg-[var(--nova-bg)] px-3 py-1.5 text-xs text-[var(--nova-muted)] transition-colors duration-200 hover:border-[var(--nova-cyan)]/20 hover:text-[var(--nova-text)]">
                                Smart suggestions
                            </span>

                            <span className="rounded-full border border-[var(--nova-border)] bg-[var(--nova-bg)] px-3 py-1.5 text-xs text-[var(--nova-muted)] transition-colors duration-200 hover:border-[var(--nova-cyan)]/20 hover:text-[var(--nova-text)]">
                                Workflow automation
                            </span>

                            <span className="rounded-full border border-[var(--nova-border)] bg-[var(--nova-bg)] px-3 py-1.5 text-xs text-[var(--nova-muted)] transition-colors duration-200 hover:border-[var(--nova-cyan)]/20 hover:text-[var(--nova-text)]">
                                Actionable insights
                            </span>
                        </div>

                        <Link
                            to="/how-it-works"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/5 px-4 py-2.5 text-sm font-semibold text-[var(--nova-cyan)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/50 hover:bg-[var(--nova-cyan)]/10 hover:shadow-[0_8px_25px_rgb(var(--nova-cyan-rgb)/0.15)]"
                        >
                            See how NOVA works

                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* AI Card */}
                    <div className="group relative mx-auto w-full max-w-xl">
                        <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-[#00C6FF]/10 to-[#C054FF]/10 opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.06)] sm:p-6">

                            <div className="flex items-center justify-between border-b border-[var(--nova-border)] pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C054FF]/10">
                                        <Bot
                                            size={17}
                                            className="text-[#C054FF]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-[var(--nova-text)]">
                                            NOVA Intelligence
                                        </p>

                                        <p className="text-[10px] text-[var(--nova-muted)]">
                                            Working alongside your team
                                        </p>
                                    </div>
                                </div>

                                <div className="h-2 w-2 rounded-full bg-[var(--nova-cyan)]" />
                            </div>

                            <div className="mt-5 space-y-3">

                                {/* Insight 1 */}
                                <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[var(--nova-cyan)]/20">
                                    <div className="flex gap-3">
                                        <TrendingUp
                                            size={17}
                                            className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                        />

                                        <div>
                                            <p className="text-xs font-medium text-[var(--nova-text)]">
                                                Progress detected
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                                Your team is ahead of this
                                                week's target.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Insight 2 */}
                                <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[#C054FF]/20">
                                    <div className="flex gap-3">
                                        <Workflow
                                            size={17}
                                            className="mt-0.5 shrink-0 text-[#C054FF]"
                                        />

                                        <div>
                                            <p className="text-xs font-medium text-[var(--nova-text)]">
                                                Automation opportunity
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                                4 recurring actions can be
                                                automated.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Insight 3 */}
                                <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-4 transition-all duration-200 hover:border-[var(--nova-cyan)]/20">
                                    <div className="flex gap-3">
                                        <BarChart3
                                            size={17}
                                            className="mt-0.5 shrink-0 text-[var(--nova-cyan)]"
                                        />

                                        <div>
                                            <p className="text-xs font-medium text-[var(--nova-text)]">
                                                Weekly insight
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-[var(--nova-muted)]">
                                                Task completion improved by
                                                32%.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================= */}
            <section className="relative py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="group relative overflow-hidden rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-12 text-center transition-all duration-300 hover:border-[var(--nova-cyan)]/20 hover:shadow-[0_20px_50px_rgb(var(--nova-cyan-rgb)/0.05)] sm:px-10 sm:py-16 lg:px-16">

                        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[90px]" />

                        <div className="relative">
                            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 transition-transform duration-300 group-hover:scale-105">
                                <Sparkles
                                    size={22}
                                    className="text-[var(--nova-cyan)]"
                                />
                            </div>

                            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-4xl md:text-5xl">
                                Everything your team needs,
                                <span className="block bg-gradient-to-r from-[#00F2FE] to-[#C054FF] bg-clip-text pb-1 text-transparent">
                                    in one place.
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7">
                                Bring your team's work together with a workspace
                                designed for clarity, automation, and progress.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Link
                                    to="/pricing"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#00C6FF] to-[#C054FF] px-6 py-3.5 text-sm font-semibold text-[#0B081B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.18)] sm:w-auto"
                                >
                                    Get started

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--nova-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/30 hover:text-[var(--nova-text)] sm:w-auto"
                                >
                                    Talk to us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;

