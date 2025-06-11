"use client";

import React, { useState } from 'react';
import { Mic, BookOpen, Users, GraduationCap, Building, MapPin, Heart, PlayCircle, Rss, ArrowRight } from 'lucide-react';

// Main Application Component
export default function App() {
  return (
    <div className="bg-white text-stone-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-stone-900 tracking-tighter">🎤 Echo</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors text-base">About</a>
              <a href="#submit" className="text-stone-600 hover:text-stone-900 transition-colors text-base">Record a Memory</a>
              <a href="#explore" className="text-stone-600 hover:text-stone-900 transition-colors text-base">Explore the Web</a>
            </div>
            <div className="flex items-center">
               <a href="#login" className="text-stone-600 hover:text-stone-900 border border-stone-300 hover:border-stone-500 px-4 py-2 rounded-lg transition-colors shadow-sm">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-24 sm:py-32 lg:py-40 overflow-hidden">
         <div className="absolute inset-0 bg-grid-stone-200/40 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-stone-900">
            Hold onto the stories that hold us together.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-stone-600">
            A platform to record, preserve, and explore real stories, memories, and life wisdom — before they’re lost.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#explore" className="w-full sm:w-auto bg-stone-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-stone-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Explore the Web
            </a>
            <a id="submit" href="#submit-form" className="w-full sm:w-auto bg-white text-stone-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-stone-100 transition-all shadow-md hover:shadow-lg border border-stone-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Mic size={20} /> Record a Memory
            </a>
          </div>
        </div>
      </header>
      
       {/* About Section */}
      <section id="about" className="py-24 sm:py-32 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-center">
                <div className="prose prose-lg text-stone-600 max-w-none">
                     <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 !mb-6">Our Mission</h2>
                    <p>
                        Echo is a living archive of the human experience, told in the original voices of the people who lived it. We believe that everyone has a story worth telling and that preserving these memories creates a powerful bridge between generations.
                    </p>
                    <p>
                       Where most history is documented in text, we are voice-first and emotionally-driven. Our goal is to make personal memory feel alive, shareable, and accessible for families, educators, and communities whose stories often go undocumented.
                    </p>
                     <a href="#" className="inline-flex items-center font-semibold text-stone-800 hover:text-amber-700 group no-underline mt-4">
                        Learn more about our values <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                     </a>
                </div>
                 <div className="p-8 bg-white rounded-xl border border-stone-200 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="People talking and sharing stories" className="rounded-lg object-cover w-full h-full" />
                 </div>
            </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section id="explore" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl font-serif tracking-tight text-stone-900 sm:text-5xl">Explore the Web of Voices</h2>
                <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">An ever-growing collection of authentic first-person narratives.</p>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder Story Cards */}
                <div className="bg-white rounded-xl border border-stone-200 overflow-hidden group transform transition hover:shadow-xl hover:-translate-y-1">
                     <div className="p-6">
                        <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-800 transition-colors">Growing up on the Farm</h3>
                        <p className="text-stone-600 mt-3 line-clamp-3 leading-relaxed">"I remember the smell of hay in the summer and the sound of the rooster at dawn. We didn't have much, but we had each other, and that was everything..."</p>
                        <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
                             <div className="flex items-center">
                                <MapPin size={16} className="mr-2"/>
                                <span>Rural Iowa, 1952</span>
                            </div>
                            <span className="text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">Childhood</span>
                        </div>
                    </div>
                </div>
                 <div className="bg-white rounded-xl border border-stone-200 overflow-hidden group transform transition hover:shadow-xl hover:-translate-y-1">
                     <div className="p-6">
                        <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-800 transition-colors">A New Beginning</h3>
                        <p className="text-stone-600 mt-3 line-clamp-3 leading-relaxed">"Leaving everything behind was the hardest thing I've ever done. But when I saw the skyline of the city, I knew I had made the right choice for my children."</p>
                        <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
                             <div className="flex items-center">
                                <MapPin size={16} className="mr-2"/>
                                <span>New York City, 1985</span>
                            </div>
                            <span className="text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">Migration</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-stone-200 overflow-hidden group transform transition hover:shadow-xl hover:-translate-y-1">
                     <div className="p-6">
                        <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-800 transition-colors">My Grandmother's Recipes</h3>
                        <p className="text-stone-600 mt-3 line-clamp-3 leading-relaxed">"Every Sunday, the whole family would gather. The secret to her cooking, she'd say, wasn't an ingredient. It was love. Just pure, simple love."</p>
                        <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
                             <div className="flex items-center">
                                <MapPin size={16} className="mr-2"/>
                                <span>Naples, Italy</span>
                            </div>
                             <span className="text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">Tradition</span>
                        </div>
                    </div>
                </div>
            </div>
             <div className="text-center mt-20">
                 <a href="#explore-all" className="text-lg font-semibold text-stone-800 hover:text-amber-700 transition-colors group inline-flex items-center">
                    See All Stories <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                 </a>
             </div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <Heart className="mx-auto h-12 w-12 text-amber-500/80 mb-4" />
            <blockquote className="text-2xl sm:text-3xl font-serif text-stone-900">
              <p>"Hearing my grandfather's voice again, telling his stories... it's a gift I can't put a price on. Echo brought a piece of him back to us."</p>
            </blockquote>
            <cite className="mt-6 block font-medium text-stone-600 not-italic">- Sarah L., Community Historian</cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-xl font-bold text-white">🎤 Echo</h3>
                    <p className="mt-2 text-stone-400 text-sm">Hold onto the stories that hold us together.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white tracking-wider uppercase">Navigate</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                        <li><a href="#submit" className="hover:text-amber-400 transition-colors">Record a Memory</a></li>
                        <li><a href="#explore" className="hover:text-amber-400 transition-colors">Explore</a></li>
                    </ul>
                </div>
                <div>
                     <h4 className="font-semibold text-white tracking-wider uppercase">Resources</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">For Families</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">For Educators</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">For Communities</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white tracking-wider uppercase">Contact</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
                <p>&copy; {new Date().getFullYear()} Echo. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
