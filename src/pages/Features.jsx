
 import { 
    ArrowRight, 
    BarChart3, 
    Bot, 
    CheckCircle2, 
    Layers3, 
    ShieldCheck, 
    Sparkles, 
    TrendingUp, 
    Users, 
    Workflow, 
    Zap, 
} from "lucide-react"; 
import { Link } from "react-router-dom"; 
 
import { 
    features, 
    capabilities, 
    automationBenefits, 
    workflowSteps, 
    securityFeatures, 
} from "../data/featuresData"; 
 
// ============================================================ 
// ICON MAP 
// ============================================================ 
 
const iconMap = { 
    CheckCircle2, 
    Sparkles, 
    ShieldCheck, 
    TrendingUp, 
    Users, 
    BarChart3, 
    Bot, 
    Workflow, 
    Layers3, 
}; 
 
// ============================================================ 
// COLOR STYLES 
// ============================================================ 
 
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
 
// ============================================================ 
// SECTION HEADING 
// ============================================================ 
 
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
 
// ============================================================ 
// FEATURES 
// ============================================================ 
 
const Features = () => { 
    return ( 
        <main className="min-h-screen overflow-hidden bg-[var(--nova-bg)] text-[var(--nova-text)]"> 
 
            {/* ======================================================== 
                HERO 
            ======================================================== */} 
 
            <section className="relative px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32"> 
 
                <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-3xl" /> 
 
                <div className="relative mx-auto max-w-5xl text-center"> 
 
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-surface)] px-4 py-2 transition-all duration-300   hover:border-[var(--nova-cyan)]/30  sm:mb-7 sm:px-4 text-xs font-medium text-[var(--nova-muted)]"> 
 
                        <Sparkles 
                            size={14} 
                            className="shrink-0 text-[var(--nova-cyan)]"
                        /> 

                        <span className="truncate text-[11px] font-medium text-[var(--nova-muted)] sm:text-sm">
                        Powerful tools for modern teams 
                        </span>
                    </div> 
 
                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[var(--nova-text)] sm:text-5xl lg:text-7xl"> 
 
                        Less busywork. 
                        <br /> 
 
                        <span className="bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] bg-clip-text text-transparent"> 
                            More progress. 
                        </span> 
 
                    </h1> 
 
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--nova-muted)] sm:text-base sm:leading-8"> 
                        Everything your team needs to organize work, automate 
                        repetitive tasks, collaborate better, and turn ideas 
                        into meaningful progress. 
                    </p> 
 
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"> 
 
                        <Link 
                            to="/pricing" 
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)]" 
                        > 
                            Explore NOVA 
                            <ArrowRight size={16} /> 
                        </Link> 
 
                        <Link 
                            to="/how-it-works" 
                            className="inline-flex items-center gap-2 rounded-xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-6 py-3 text-sm font-medium text-[var(--nova-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/30 hover:shadow-[0_8px_25px_rgb(var(--nova-cyan-rgb)/0.06)]" 
                        > 
                            See how it works 
                        </Link> 
 
                    </div> 
 
                </div> 
            </section> 
 
            {/* ======================================================== 
                CORE FEATURES 
            ======================================================== */} 
 
            <section className="relative py-20 sm:py-24 lg:py-28"> 
 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
 
                    <SectionHeading 
                        eyebrow="Powerful features" 
                        title="Built to make work feel simpler." 
                        description="NOVA brings the tools your team uses every day into one intelligent workspace, without adding unnecessary complexity." 
                    /> 
 
                    <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"> 
 
                        {features.map((feature) => { 
 
                            const Icon = iconMap[feature.icon] || Zap; 
 
                            const style = 
                                colorStyles[feature.color] || 
                                colorStyles.cyan; 
 
                            return ( 
                                <div 
                                    key={feature.title} 
                                    className="group relative overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:bg-[var(--nova-surface-hover)]hover:shadow-[0_15px_35px_rgb(var(--nova-cyan-rgb)/0.06)] sm:p-6" 
                                > 
 
                                    <div 
                                        className={`absolute -right-16 -top-16 h-32 w-32 rounded-full ${style.glow} opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100`} 
                                    /> 
 
                                    <div className="relative"> 
 
                                        <div 
                                            className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border  border-[#C054FF]/20 bg-[#C054FF]/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--nova-cyan)]/40 group-hover:bg-[var(--nova-cyan)]/10 sm:h-12 sm:w-12`} 
                                        > 
                                            <Icon 
                                                size={21} 
                                                className="text-[#C054FF] transition-colors duration-300 group-hover:text-[var(--nova-cyan)]"
                                            /> 
                                        </div> 
 
                                        <div className="mb-3 inline-flex rounded-full border border-[var(--nova-border)] bg-[var(--nova-bg)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--nova-muted)]"> 
                                            {feature.label} 
                                        </div> 
 
                                        <h3 className="text-lg font-semibold text-[var(--nova-text)] sm:text-xl"> 
                                            {feature.title} 
                                        </h3> 
 
                                        <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]"> 
                                            {feature.description} 
                                        </p> 
 
                                        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[var(--nova-muted)]"> 
                                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--nova-cyan)]" /> 
                                            Built for modern teams 
                                        </div> 
 
                                    </div> 
 
                                </div> 
                            ); 
                        })} 
 
                    </div> 
 
                </div> 
            </section> 
 
            {/* ======================================================== 
                CAPABILITIES 
            ======================================================== */} 
 
            <section className="relative border-y border-[var(--nova-border)] bg-[var(--nova-surface)] py-20 sm:py-24 lg:py-28"> 
 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
 
                    <SectionHeading 
                        eyebrow="One intelligent workspace" 
                        title="Everything connected." 
                        description="NOVA keeps your projects, people, tasks, and insights connected so your team can spend less time managing work and more time moving it forward." 
                    /> 
 
                    <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3 md:gap-5"> 
 
                        {capabilities.map((item, index) => { 
 
                            const Icon = 
                                iconMap[item.icon] || Layers3; 
 
                            const style = 
                                colorStyles[item.color] || 
                                colorStyles.cyan; 
 
                            return ( 
                                <div 
                                    key={item.title} 
                                    className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6" 
                                > 
 
                                    <div 
                                        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border ${style.border} ${style.glow} transition-transform duration-300 group-hover:scale-105`} 
                                    > 
                                        <Icon 
                                            size={22} 
                                            className={style.icon} 
                                        /> 
                                    </div> 
 
                                    <div className="mb-3 text-xs font-semibold text-[var(--nova-muted)]"> 
                                        0{index + 1} 
                                    </div> 
 
                                    <h3 className="text-lg font-semibold text-[var(--nova-text)] sm:text-xl"> 
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
 
            {/* ======================================================== 
                WORKFLOW 
            ======================================================== */} 
 
            <section className="relative py-20 sm:py-24 lg:py-28"> 
 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
 
                    <SectionHeading 
                        eyebrow="Simple workflow" 
                        title="From idea to execution." 
                        description="NOVA gives your team a simple flow for turning plans into completed work without losing visibility along the way." 
                    /> 
 
                    <div className="relative mt-12 sm:mt-14"> 
 
                        <div className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-px bg-gradient-to-r from-[var(--nova-cyan)]/25 via-[#C054FF]/40 to-[var(--nova-cyan)]/20 md:block" /> 
 
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5"> 
 
                            {workflowSteps.map((step) => { 
 
                                const Icon = 
                                    iconMap[step.icon] || Workflow; 
 
                                const style = 
                                    colorStyles[step.color] || 
                                    colorStyles.cyan; 
 
                                return ( 
                                    <div 
                                        key={step.number} 
                                        className="group relative rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6" 
                                    > 
 
                                        <div className="relative z-10 mb-6 flex items-center justify-between"> 
 
                                            <div 
                                                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.border} ${style.glow} transition-transform duration-300 group-hover:scale-105`} 
                                            > 
                                                <Icon 
                                                    size={20} 
                                                    className={style.icon} 
                                                /> 
                                            </div> 
 
                                            <span className="text-xs font-bold tracking-widest text-[var(--nova-muted)]"> 
                                                {step.number} 
                                            </span> 
 
                                        </div> 
 
                                        <h3 className="text-xl font-semibold text-[var(--nova-text)]"> 
                                            {step.title} 
                                        </h3> 
 
                                        <p className="mt-3 text-sm leading-6 text-[var(--nova-muted)]"> 
                                            {step.description} 
                                        </p> 
 
                                    </div> 
                                ); 
                            })} 
 
                        </div> 
                    </div> 
 
                </div> 
            </section> 
 
            {/* ======================================================== 
                AI AUTOMATION 
            ======================================================== */} 
 
            <section className="relative border-y border-[var(--nova-border)] bg-[var(--nova-surface)] py-20 sm:py-24 lg:py-32"> 
 
                <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C054FF]/10 blur-[100px]" /> 
 
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:gap-16 lg:grid-cols-2 lg:px-8"> 
 
                    {/* LEFT CONTENT */} 
 
                    <div> 
 
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C054FF]/20 bg-[var(--nova-bg)] px-3 py-1.5 text-xs font-medium text-[var(--nova-muted)] sm:text-sm"> 
 
                            <Bot 
                                size={14} 
                                className="text-[#C054FF]" 
                            /> 
 
                            AI-powered work 
                        </div> 
 
                        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-4xl md:text-5xl"> 
                            Let NOVA handle the repetitive work. 
                        </h2> 
 
                        <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7"> 
                            Spend less time on repetitive processes and more 
                            time on the work that actually needs your team's 
                            attention. 
                        </p> 
 
                        <div className="mt-7 space-y-4"> 
 
                            {automationBenefits.map((benefit) => ( 
                                <div 
                                    key={benefit} 
                                    className="flex items-start gap-3" 
                                > 
 
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--nova-cyan)]/10"> 
                                        <CheckCircle2 
                                            size={14} 
                                            className="text-[var(--nova-cyan)]" 
                                        /> 
                                    </div> 
 
                                    <span className="text-sm text-[var(--nova-muted)] sm:text-base"> 
                                        {benefit} 
                                    </span> 
 
                                </div> 
                            ))} 
 
                        </div> 
 
                        {/* EXPLORE PRODUCT BUTTON */} 
 
                        <Link 
                            to="/product" 
                            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/5 px-4 py-2.5 text-sm font-semibold text-[var(--nova-cyan)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/50 hover:bg-[var(--nova-cyan)]/10 hover:shadow-[0_8px_25px_rgb(var(--nova-cyan-rgb)/0.15)]" 
                        > 
                            Explore the product 
 
                            <ArrowRight 
                                size={16} 
                                className="transition-transform duration-300 group-hover:translate-x-1" 
                            /> 
                        </Link> 
 
                    </div> 
 
                    {/* RIGHT AI DASHBOARD */} 
 
                    <div className="relative mx-auto w-full max-w-xl"> 
 
                        {/* Glow */} 
 
                        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[#00C6FF]/10 to-[#C054FF]/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" /> 
 
                        {/* CARD */} 
 
                        <div className="group relative overflow-hidden rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/30 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.08)]"> 
 
                            {/* CARD TOP BAR */} 
 
                            <div className="flex items-center justify-between border-b border-[var(--nova-border)] px-4 py-3 sm:px-5"> 
 
                                <div className="flex items-center gap-2"> 
 
                                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--nova-cyan)]" /> 
 
                                    <span className="text-xs font-medium text-[var(--nova-muted)]"> 
                                        NOVA Assistant 
                                    </span> 
 
                                </div> 
 
                                <span className="rounded-full border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/5 px-2.5 py-1 text-[10px] font-medium text-[var(--nova-cyan)]"> 
                                    Active 
                                </span> 
 
                            </div> 
 
                            {/* CARD CONTENT */} 
 
                            <div className="space-y-5 p-5 sm:p-7"> 
 
                                {/* WORKFLOW */} 
 
                                <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-colors duration-300 hover:-translate-y-1 group-hover:border-[var(--nova-cyan)]/20 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)]"> 
 
                                    <div className="flex items-center gap-3"> 
 
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--nova-cyan)]/10"> 
                                            <Zap 
                                                size={17} 
                                                className="text-[var(--nova-cyan)]" 
                                            /> 
                                        </div> 
 
                                        <div> 
 
                                            <p className="text-sm font-medium text-[var(--nova-text)]"> 
                                                Workflow automation 
                                            </p> 
 
                                            <p className="mt-0.5 text-xs text-[var(--nova-muted)]"> 
                                                Running automatically 
                                            </p> 
 
                                        </div> 
 
                                    </div> 
 
                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--nova-border)]"> 
 
                                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[var(--nova-cyan)] to-[#C054FF]" /> 
 
                                    </div> 
 
                                    <div className="mt-2 flex justify-between text-[10px] text-[var(--nova-muted)]"> 
 
                                        <span>Progress</span> 
                                        <span>78%</span> 
 
                                    </div> 
 
                                </div> 
 
                                {/* AI MESSAGE */} 
 
                                <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-colors duration-300 hover:-translate-y-1 group-hover:border-[#C054FF]/20  hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)]"> 
 
                                    <div className="flex items-start gap-3"> 
 
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C054FF]/10"> 
 
                                            <Bot 
                                                size={17} 
                                                className="text-[#C054FF]" 
                                            /> 
 
                                        </div> 
 
                                        <div> 
 
                                            <p className="text-xs font-medium text-[var(--nova-muted)]"> 
                                                NOVA AI 
                                            </p> 
 
                                            <p className="mt-2 text-sm leading-6 text-[var(--nova-muted)]"> 
                                                6 repetitive tasks were 
                                                automated today. Your team 
                                                saved valuable time. 
                                            </p> 
 
                                        </div> 
 
                                    </div> 
 
                                </div> 
 
                                {/* STATS */} 
 
                                <div className="grid grid-cols-2 gap-3"> 
 
                                    <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1 group-hover:border-[var(--nova-cyan)]/15  hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)]"> 
 
                                        <p className="text-xs text-[var(--nova-muted)]"> 
                                            Tasks automated 
                                        </p> 
 
                                        <p className="mt-2 text-2xl font-bold text-[var(--nova-text)]"> 
                                            06 
                                        </p> 
 
                                    </div> 
 
                                    <div className="rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] p-4 transition-all duration-300 hover:-translate-y-1  group-hover:border-[#C054FF]/15 hover:bg-[var(--nova-surface-hover)] hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.04)]"> 
 
                                        <p className="text-xs text-[var(--nova-muted)]"> 
                                            Time saved 
                                        </p> 
 
                                        <p className="mt-2 text-2xl font-bold text-[var(--nova-text)]"> 
                                            +32% 
                                        </p> 
 
                                    </div> 
 
                                </div> 
 
                            </div> 
                        </div> 
 
                        {/* FLOATING BADGE */} 
 
                        <div className="absolute -bottom-4 left-4 hidden rounded-xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-surface)] px-4 py-3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/40 sm:block md:-left-6 lg:-left-8"> 
 
                            <div className="flex items-center gap-2"> 
 
                                <CheckCircle2 
                                    size={15} 
                                    className="text-[var(--nova-cyan)]" 
                                /> 
 
                                <span className="text-xs font-medium text-[var(--nova-muted)]"> 
                                    6 tasks automated 
                                </span> 
 
                            </div> 
 
                        </div> 
 
                    </div> 
 
                </div> 
            </section> 
 
            {/* ======================================================== 
                SECURITY 
            ======================================================== */} 
 
            <section className="relative py-20 sm:py-24 lg:py-28"> 
 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
 
                    <SectionHeading 
                        eyebrow="Built with confidence" 
                        title="Your work stays organized and protected." 
                        description="NOVA gives teams the structure and controls they need to manage everyday work with confidence." 
                    /> 
 
                    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3 md:gap-5"> 
 
                        {securityFeatures.map((item) => { 
 
                            const Icon = 
                                iconMap[item.icon] || ShieldCheck; 
 
                            return ( 
                                <div 
                                    key={item.title} 
                                    className="group rounded-2xl border border-[var(--nova-border)] bg-[var(--nova-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--nova-cyan)]/25 hover:shadow-[0_12px_30px_rgb(var(--nova-cyan-rgb)/0.05)] sm:p-6" 
                                > 
 
                                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 transition-transform duration-300 group-hover:scale-105"> 
 
                                        <Icon 
                                            size={20} 
                                            className="text-[var(--nova-cyan)]" 
                                        /> 
 
                                    </div> 
 
                                    <h3 className="text-lg font-semibold text-[var(--nova-text)]"> 
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
 
            {/* ======================================================== 
                CTA 
            ======================================================== */} 
 
            <section className="relative pb-20 sm:pb-24 lg:pb-28"> 
 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
 
                    <div className="group relative overflow-hidden rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-surface)] px-5 py-12 text-center transition-all duration-300 hover:border-[var(--nova-cyan)]/20 hover:shadow-[0_15px_40px_rgb(var(--nova-cyan-rgb)/0.05)] sm:px-10 sm:py-16 lg:px-16"> 
 
                        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[90px]" /> 
 
                        <div className="relative"> 
 
                            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--nova-cyan)]/20 bg-[var(--nova-cyan)]/10 transition-transform duration-300 group-hover:scale-105"> 
 
                                <Sparkles 
                                    size={22} 
                                    className="text-[var(--nova-cyan)]" 
                                /> 
 
                            </div> 
 
                            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[var(--nova-text)] sm:text-4xl md:text-5xl"> 
 
                                Ready to make work{" "} 
 
                                <span className="bg-gradient-to-r from-[var(--nova-cyan)] to-[#C054FF] bg-clip-text pb-1 text-transparent"> 
                                    simpler? 
                                </span> 
 
                            </h2> 
 
                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[var(--nova-muted)] sm:text-base sm:leading-7"> 
                                Give your team one intelligent workspace to 
                                organize, automate, and move work forward. 
                            </p> 
 
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"> 
 
                                <Link 
                                    to="/pricing" 
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--nova-cyan)] via-[#00C6FF] to-[#C054FF] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(var(--nova-cyan-rgb)/0.2)] sm:w-auto" 
                                > 
                                    Get started 
 
                                    <ArrowRight 
                                        size={17} 
                                        className="transition-transform duration-300 group-hover:translate-x-1" 
                                    /> 
                                </Link> 
 
                                <Link 
                                    to="/contact" 
                                    onClick={() => window.scrollTo(0, 0)} 
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--nova-border)] bg-[var(--nova-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--nova-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--nova-cyan)]/30 hover:shadow-[0_8px_25px_rgb(var(--nova-cyan-rgb)/0.06)] sm:w-auto" 
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
 
export default Features; 



























