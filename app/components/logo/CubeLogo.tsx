"use client";

export default function CubeLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`cube-logo-wrapper ${className}`}>
            <div className="cube-3d">
                <div className="cube-face cube-front" />
                <div className="cube-face cube-back" />
                <div className="cube-face cube-right" />
                <div className="cube-face cube-left" />
                <div className="cube-face cube-top" />
                <div className="cube-face cube-bottom" />
            </div>
        </div>
    );
}
