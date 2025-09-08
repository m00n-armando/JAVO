import React from "react";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  author: {
    name: string;
    handle?: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
          {/* Duplicate testimonials to create a seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-80">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
