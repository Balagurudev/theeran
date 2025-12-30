import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import heroImage from '../assets/hero-farmer.png';

const Hero = () => {
    return (
        <section className="relative bg-white pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center">

                    {/* Badge/Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-200 md:text-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
                        Trusted by 700+ Farmers
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-display-md font-semibold text-primary md:text-display-xl tracking-tight text-balance max-w-4xl"
                    >
                        Expert Tractor Consultancy — <br className="hidden md:block" />
                        <span className="text-brand-600">Buy & Sell with Confidence.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 text-lg text-tertiary max-w-2xl text-balance md:text-xl"
                    >
                        No listings. No browsing. Just clear guidance from farmers to farmers.
                        We help you find the right machine at the right price.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:mt-10"
                    >
                        <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-brand-600 px-6 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-200">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Talk on WhatsApp
                        </a>
                        <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-white px-6 py-3.5 text-md font-semibold text-secondary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-200">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Directly
                        </a>
                    </motion.div>

                    {/* Trust Badges Simple */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center"
                    >
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-brand-600">700+</span>
                            <span className="text-sm font-medium text-tertiary">Tractors Guided</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-brand-600">90k+</span>
                            <span className="text-sm font-medium text-tertiary">Subscribers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-brand-600">100%</span>
                            <span className="text-sm font-medium text-tertiary">Satisfaction</span>
                        </div>
                    </motion.div>

                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative mt-16 w-full lg:mt-20"
                >
                    <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            className="rounded-lg w-full object-cover shadow-2xl ring-1 ring-gray-900/10 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-top"
                            src={heroImage}
                            alt="Farmer smiling with a tractor"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
