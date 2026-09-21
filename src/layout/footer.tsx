"use client"
import { QrCode, Send } from "lucide-react";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import AppleStore from "@public/app-store.svg"
import GoogleStore from "@public/google-play.svg"
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            return;
        }
        setEmail("");
    };

    return (
        <footer className="bg-black text-white pt-16 pb-6 mt-20 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
                    {/* Column 1: Exclusive Subscribe */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">Exclusive</h3>
                        <h4 className="text-lg font-medium text-neutral-200">Subscribe</h4>
                        <p className="text-sm text-neutral-400">Get 10% off your first order</p>
                        <form onSubmit={handleSubscribe} className="relative max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-white/80 rounded py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 cursor-pointer p-1"
                                aria-label="Submit email"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Column 2: Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Support</h4>
                        <address className="not-italic text-sm text-neutral-400 space-y-3 leading-relaxed">
                            <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                            <p className="hover:text-white transition-colors cursor-pointer">exclusive@gmail.com</p>
                            <p className="hover:text-white transition-colors cursor-pointer">+88015-88888-9999</p>
                        </address>
                    </div>

                    {/* Column 3: Account */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Account</h4>
                        <ul className="text-sm text-neutral-400 space-y-3">
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    My Account
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Login / Register
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Cart
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Wishlist
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Shop
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Link */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Quick Link</h4>
                        <ul className="text-sm text-neutral-400 space-y-3">
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Terms Of Use
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <button
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Download App */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Download App</h4>
                        <p className="text-xs text-neutral-400">Save $3 with App New User Only</p>
                        <div className="flex items-center gap-3">
                            {/* QR Code mockup */}
                            <div className="w-20 h-20 bg-white rounded p-1.5 flex items-center justify-center shrink-0">
                                <QrCode className="w-full h-full text-black" />
                            </div>
                            {/* Store Badges */}
                            <div className="flex flex-col gap-2">
                                <Link href={"#"}>
                                    <Image src={GoogleStore} alt="google play" className="w-full h-10 shrink-0 object-contain" />
                                </Link>
                                <Link href={"#"}>
                                    <Image src={AppleStore} alt="app store" className="w-full h-10 shrink-0 object-contain" />
                                </Link>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 pt-2 text-neutral-300">
                            <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#twitter" className="hover:text-white transition-colors" aria-label="Twitter">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#linkedin" className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-neutral-900 pt-6 text-center text-xs text-neutral-500">
                    <p>© Copyright 2026. All right reserved</p>
                </div>
            </div>
        </footer>
    );
}
