import { Star } from "lucide-react";

type Props = {
  name: string;
  company: string;
  location: string;
  rating: number;
  text: string;
};

export default function TestimonialCard({
  name,
  company,
  location,
  rating,
  text,
}: Props) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-w-70 max-w-[320px] bg-neutral-900 border border-neutral-800 rounded-2xl p-5 snap-start">
      <p className="text-gray-300 text-sm leading-relaxed mb-4">“{text}”</p>

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-semibold">
          {initials}
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-gray-400">
            {company} <br /> {location}
          </p>

          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
