"use client";

import { MaskContainer } from "@/app/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
    return (
        <div className="flex h-[47rem] w-full items-center justify-center overflow-hidden z-50">
            <MaskContainer
                revealText={
                    <div>
                        <div className="mx-auto max-w-2xl text-center text-[#b7ab98] text-9xl font-bold dark:text-white" style={{lineHeight:"0.8"}}>
                            <p className="text-center text-[#b7ab98] font-bold" style={{fontSize:"16px", letterSpacing:"5px", lineHeight:"6"}}>HARSH PRAJAPATI</p>
                            MAKING <br />
                            <span className="text-[#EB5939]">GOOD <br /> SHIT </span> <br /> SINCE 2009
                        </div>
                    </div>
                }
                className="h-full rounded-md border text-white dark:text-black"
            >
                <div className="mx-auto max-w-2xl text-center text-[#0d0d0d] text-9xl font-bold dark:text-white" style={{lineHeight:"0.8"}}>
                    <p className="text-center text-[#b7ab98] font-bold" style={{fontSize:"16px", letterSpacing:"5px", lineHeight:"6"}}>HARSH PRAJAPATI</p>
                    HIDING <br />
                    BAD <br /> SHIT <br /> SINCE 2009
                </div>
            </MaskContainer>
        </div>
    );
}
