import { testimonialData } from "@/constants/service";
import TestimonialCard from "../services/TestimonialCard";

export default function CityTestimonials({ city }: any) {
  const testimonials = testimonialData(city);

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Clients in {city.name} Say About Us
      </h2>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i + 1}
            name={t.name}
            company={t.company}
            location={t.location}
            rating={t.rating}
            text={t.text}
          />
        ))}
      </div>
    </section>
  );
}
