"use client"
import { SIDEBAR_CATEGORIES } from '@/data';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import iPhone from "@public/iphone.svg"
import { FaApple } from "react-icons/fa6";

function Hero() {
    const [selectedCategory, setSelectedCategory] = useState("")
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 w-full">
            <div className="hidden lg:block lg:col-span-3 border-r border-neutral-200 pr-6 space-y-3 pt-2">
                {SIDEBAR_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.name;
                    return (
                        <button
                            key={cat.name}
                            onClick={() =>
                                setSelectedCategory(isSelected ? "" : cat.name)
                            }
                            className={`w-full flex items-center justify-between text-sm py-1.5 transition-colors text-left cursor-pointer group ${isSelected
                                ? "text-[#DB4444] font-semibold"
                                : "text-neutral-900 hover:text-[#DB4444]"
                                }`}
                        >
                            <span>{cat.name}</span>
                            {cat.hasSub && (
                                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#DB4444] group-hover:translate-x-0.5 transition-all" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="lg:col-span-9">
                <div className="relative bg-black text-white rounded-none sm:rounded-md overflow-hidden p-6 sm:p-12 min-h-45 flex flex-col justify-between">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4 z-10">
                            <div className="flex items-center gap-3">
                                <FaApple className="w-8 h-8 fill-white" />
                                <span className="text-sm font-medium tracking-wide text-neutral-300">
                                    iPhone 14 Series
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                                Up to 10%<br />off Voucher
                            </h1>

                            <div>
                                <button
                                    onClick={() => setSelectedCategory("Phones")}
                                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors cursor-pointer"
                                >
                                    <span>Shop Now</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="relative w-56 sm:w-80 h-64 sm:h-72">
                                <Image
                                    src={iPhone}
                                    alt="iPhone 14 Series"
                                    className="w-full h-full object-cover filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero