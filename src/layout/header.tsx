"use client"
import { useState } from "react";
import {
    Search,
    Heart,
    ShoppingCart,
    User,
    Package,
    XCircle,
    Star,
    LogOut,
    LogIn,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";

export function Header() {

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cart = [{ quantity: 3 }]
    const wishlist = []
    const user = {
        name: "Jon Doe",
        isLoggedIn: true
    }
    // Total quantity in cart
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistItemCount = wishlist.length;

    const navLinks = [
        { name: "Home", href: "#", active: true },
        { name: "Contact", href: "#" },
        { name: "About", href: "#" },
        { name: "Sign Up", href: "#" },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <button
                            className="text-2xl font-bold tracking-tight text-neutral-950 hover:opacity-90 transition-opacity"
                        >
                            Exclusive
                        </button>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link, i) => {
                            return (
                                <Link
                                    href={link.href}
                                    key={i}
                                    className={`text-base font-normal relative transition-colors py-1 cursor-pointer
                                                ${link.active ? "text-[#DB4444]" : "text-neutral-700"}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Search, Wishlist, Cart & Profile */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Search bar */}
                        <div className="relative hidden sm:block w-48 md:w-64">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full bg-[#F5F5F5] rounded text-xs md:text-sm pl-4 pr-10 py-2.5 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
                            />
                            <Search className="w-4 h-4 text-neutral-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Wishlist Button */}
                        <button
                            className="relative p-2 text-neutral-900 hover:text-[#DB4444] transition-colors cursor-pointer"
                            title="View Wishlist"
                            aria-label="Wishlist"
                        >
                            <Heart className="w-6 h-6" />
                            {wishlistItemCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-[#DB4444] text-white text-[10px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center">
                                    {wishlistItemCount}
                                </span>
                            )}
                        </button>

                        {/* Cart Button */}
                        <button
                            className="relative p-2 text-neutral-900 hover:text-[#DB4444] transition-colors cursor-pointer"
                            title="View Cart"
                            aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-[#DB4444] text-white text-[10px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>

                        {/* User Profile Avatar with dropdown (exact match to Screenshot 3) */}
                        <div className="relative">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="w-8 h-8 rounded-full bg-[#DB4444] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                                title={user.isLoggedIn ? `Account (${user.name})` : "Account"}
                                aria-label="User account"
                            >
                                <User className="w-4 h-4" />
                            </button>

                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-3 w-56 rounded-md bg-linear-to-b from-neutral-600 to-neutral-700 backdrop-blur-md text-white shadow-xl py-2 z-50 text-sm border border-neutral-700/50 animate-in fade-in zoom-in-95 duration-150">
                                    {user.isLoggedIn ? (
                                        <>
                                            <div className="px-4 py-2 border-b border-neutral-700/60 mb-1">
                                                <p className="text-xs text-neutral-400">Signed in as</p>
                                                <p className="text-sm font-semibold truncate text-white">
                                                    {user.name || "User"}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <User className="w-4 h-4 text-neutral-300" />
                                                <span>Manage My Account</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <Package className="w-4 h-4 text-neutral-300" />
                                                <span>My Order</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <XCircle className="w-4 h-4 text-neutral-300" />
                                                <span>My Cancellations</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <Star className="w-4 h-4 text-neutral-300" />
                                                <span>My Reviews</span>
                                            </button>
                                            <div className="border-t border-neutral-700/60 my-1"></div>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 text-red-300 hover:bg-neutral-800 hover:text-red-200 transition-colors text-left"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                <span>Logout</span>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <LogIn className="w-4 h-4 text-[#DB4444]" />
                                                <span className="font-medium">Log In</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors text-left"
                                            >
                                                <User className="w-4 h-4 text-[#DB4444]" />
                                                <span>Create Account</span>
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-neutral-900"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-neutral-200 py-3 space-y-2">
                        <div className="relative mb-3">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full bg-[#F5F5F5] rounded text-sm pl-4 pr-10 py-2"
                            />
                            <Search className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                        {navLinks.map((link, i) => (
                            <Link
                                href={link.href}
                                key={i}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left py-2 px-1 text-sm font-medium
                                        ${link.active ? "text-[#DB4444]" : "text-neutral-700"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
