"use client"
import CardLoader from '@/components/card-loader';
import { getCategoryIcon } from '@/components/get-cat-icon';
import TitleSubTitle from '@/components/title-description';
import { queryKeys } from '@/lib/api/query-keys';
import { useFetchData } from '@/lib/api/use-fetch-data';
import { useState } from 'react';

function BrowseByCategory() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const categoryData = useFetchData(
        [queryKeys.getAllCategory],
        "category/",
        undefined,
        undefined,
        true
    )
    const categories: Category[] = categoryData.data

    return (
        <section className="space-y-8">
            <TitleSubTitle
                title='Categories'
                subTitle='Browse By Category'
            >
            </TitleSubTitle>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
                {
                    categoryData.isFetching ?
                        Array(10).fill(0).map((_, i) => (
                            <CardLoader key={i} />
                        ))
                        : categories?.map((cat) => {
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
                                    {getCategoryIcon(cat.imageicon)}
                                    <span className="capitalize text-sm font-medium">{cat.name}</span>
                                </button>
                            );
                        })}
            </div>
        </section>
    )
}

export default BrowseByCategory