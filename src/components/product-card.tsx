"use client"
import { Heart, Eye, Trash2, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
    variant?: "standard" | "wishlist";
    showAlwaysAddToCart?: boolean;
}

export function ProductCard({
    product,
    variant = "standard",
    showAlwaysAddToCart = false,
}: ProductCardProps) {
    const [, toggleWishlist] = useState({})
    const isFavorited = false
    // const isFavorited = isInWishlist(product.id);

    return (
        <div className="group flex flex-col justify-between select-none">
            {/* Image & Overlay Area */}
            <div className="relative w-full aspect-square bg-[#F5F5F5] rounded-sm overflow-hidden flex items-center justify-center p-4">
                {/* Discount / New Badge */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                    {product.discountPercent ? (
                        <span className="bg-[#DB4444] text-white text-xs font-normal px-2.5 py-1 rounded">
                            -{product.discountPercent}%
                        </span>
                    ) : null}
                    {product.isNew && (
                        <span className="bg-[#00FF66] text-black text-xs font-medium px-2.5 py-1 rounded">
                            NEW
                        </span>
                    )}
                </div>

                {/* Top Right Action Icons */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                    {variant === "wishlist" ? (
                        <button
                            onClick={() => toggleWishlist(product)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-800 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                            title="Remove from wishlist"
                            aria-label="Remove from wishlist"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => toggleWishlist(product)}
                                className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm transition-colors cursor-pointer ${isFavorited
                                    ? "text-[#DB4444]"
                                    : "text-neutral-800 hover:text-[#DB4444]"
                                    }`}
                                title={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
                                aria-label="Wishlist toggle"
                            >
                                <Heart
                                    className={`w-4 h-4 ${isFavorited ? "fill-[#DB4444]" : ""
                                        }`}
                                />
                            </button>
                            <button
                                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-800 hover:text-[#DB4444] shadow-sm transition-colors cursor-pointer"
                                title="Quick View"
                                aria-label="Quick View"
                            >
                                <Eye className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Product Image */}
                <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />

                <button
                    className={`absolute bottom-0 inset-x-0 bg-black text-white text-xs font-medium py-2.5 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 z-10 ${showAlwaysAddToCart
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                        }`}
                >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add To Cart</span>
                </button>
            </div>

            <div className="pt-3 space-y-1">
                <h3
                    className="font-medium text-sm sm:text-base text-neutral-900 truncate hover:text-[#DB4444] cursor-pointer transition-colors"
                    title={product.name}
                >
                    {product.name}
                </h3>

                {/* Price Row */}
                <div className="flex items-center gap-3 text-sm">
                    <span className="font-semibold text-[#DB4444]">
                        ${product.price}
                    </span>
                    {product.discountPercent ? (
                        <span className="text-neutral-400 line-through">
                            ${product.originalPrice}
                        </span>
                    ) : null}
                </div>

                <div className="flex items-center gap-1.5 pt-0.5">
                    <div className="flex items-center text-[#FFAD33]">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`w-3.5 h-3.5 ${star <= product.rating
                                    ? "fill-[#FFAD33] text-[#FFAD33]"
                                    : "fill-neutral-200 text-neutral-200"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-neutral-500 font-medium">
                        ({product.reviewCount})
                    </span>
                </div>
            </div>
        </div>
    );
}
