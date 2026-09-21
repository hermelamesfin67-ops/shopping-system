"use client"
import { getCategoryIcon } from '@/components/get-cat-icon';
import TitleSubTitle from '@/components/title-description';
import { CATEGORIES } from '@/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function BrowseByCategory() {
    const [selectedCategory, setSelectedCategory] = useState("")

    return (
        <section className="space-y-8">
            <TitleSubTitle
                title='Categories'
                subTitle='Browse By Category'
            >
                <div className="flex items-center gap-2">
                    <button
                        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-neutral-800 hover:bg-neutral-200 transition-colors cursor-pointer"
                        aria-label="Previous category"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-neutral-800 hover:bg-neutral-200 transition-colors cursor-pointer"
                        aria-label="Next category"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </TitleSubTitle>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
                {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.name;
                    return (
                        <button
                            key={cat.id}
                            onClick={() =>
                                setSelectedCategory(isSelected ? "" : cat.name)
                            }
                            className={`flex flex-col items-center justify-center gap-4 p-6 rounded border transition-all cursor-pointer aspect-square ${isSelected
                                ? "bg-[#DB4444] text-white border-[#DB4444] shadow-md"
                                : "border-neutral-300 text-neutral-900 hover:border-[#DB4444] hover:text-[#DB4444] bg-white"
                                }`}
                        >
                            {getCategoryIcon(cat.iconName)}
                            <span className="text-sm font-medium">{cat.name}</span>
                        </button>
                    );
                })}
            </div>
        </section>
    )
}

export default BrowseByCategory