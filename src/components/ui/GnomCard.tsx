import { cn } from "@/lib/utils";

interface GnomCardProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    accentColor?: string;
    rotate?: string;
    padding?: string;
    isRecommended?: boolean;
}

export function GnomCard({
    children,
    className,
    id,
    accentColor = "bg-brand",
    rotate = "rotate-2",
    padding = "p-8",
    isRecommended = false
}: GnomCardProps) {
    return (
        <div id={id} className="relative group h-full">
            {/* Background Accent Layer */}
            <div className={cn(
                "absolute inset-0 rounded-[2.5rem] transition-transform duration-500",
                accentColor,
                rotate
            )} />

            {/* Main Content Layer */}
            <div className={cn(
                "relative h-full bg-white border-2 border-slate-900 rounded-[2.5rem] shadow-xl transition-all duration-300",
                padding,
                className
            )}>
                {isRecommended && (
                    <div className="absolute -top-4 -right-2 z-20">
                        <div className="bg-slate-900 text-brand px-4 py-2 rounded-xl text-[10px] font-black italic uppercase tracking-[0.2em] shadow-2xl border-2 border-brand transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            Most Recommended
                        </div>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
