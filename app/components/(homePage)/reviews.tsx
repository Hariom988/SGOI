import Image from "next/image";
import review1 from "@/public/home/review1.png";
import review2 from "@/public/home/review2.jpg";
import review3 from "@/public/home/review3.jpeg";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: any;
}

const reviewsData: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Vicky Rawat",
    role: "Director",
    company: "YNRS Business Solutions",
    content:
      "Sahu Group of Industries is a reliable manufacturing partner that delivers high-quality products on time and within budget. Their team is knowledgeable and responsive.",
    image: review1,
  },
  {
    id: 2,
    name: "Mr. Shatrughan Rai",
    role: "Director",
    company: "Life Guard",
    content:
      "Working with Sahu Group of Industries was a great experience. He is such a nice guy and a committed person with deep industry expertise.",
    image: review2,
  },
  {
    id: 3,
    name: "Mr. Chandan Chaurasia",
    role: "Director",
    company: "New India Product",
    content:
      "We have always been impressed with their quality and professionalism. We highly recommend them for innovative manufacturing solutions.",
    image: review3,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-light text-slate-900">
            What our <span className="font-bold">Partners Say</span>
          </p>
        </div>

        <div className="flex flex-wrap -m-3">
          {reviewsData.map((review) => (
            <div key={review.id} className="w-full md:w-1/3 p-3 flex">
              <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative group overflow-hidden">
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors" />

                <div className="relative z-10">
                  <div className="flex text-amber-400 mb-4 text-xs">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>

                  <p className="text-slate-600 italic text-sm md:text-base leading-relaxed mb-8">
                    "{review.content}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 border-t border-slate-50 pt-6">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover rounded-xl shadow-md  transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                      {review.name}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-blue-600 uppercase tracking-wider mt-1">
                      {review.role}, {review.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
