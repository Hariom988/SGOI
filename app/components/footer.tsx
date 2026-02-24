import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800/50 pt-10 md:pt-16 pb-6 md:pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="md:col-span-5">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-6 tracking-tight">
              Sahu Group <span className="text-blue-500">Of Industries</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mb-4 md:mb-6">
              The cradle of the aluminium industry in India. SGOI is one of
              Asia's largest modernised aluminium foil manufacturing bases.
            </p>
            <div className="flex gap-3 mt-2 md:mt-8">
              {[
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-blue-500 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-8 border-l-2 border-blue-500 pl-3 md:pl-4">
              Contact Us
            </h3>
            <ul className="grid grid-cols-1 gap-y-3 md:gap-y-5">
              <li className="flex items-start gap-3 md:gap-4">
                <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-[11px] md:text-sm leading-snug">
                  41, 3rd Floor, DSIIDC , Scheme 1, Okhla Phase 2, New Delhi
                  110020.
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <a
                  href="tel:+918527169717"
                  className="text-slate-400 text-[11px] md:text-sm hover:text-white transition-colors"
                >
                  +91 8527169717
                </a>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <Mail size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="mailto:sgoicompany@gmail.com"
                    className="text-slate-400 text-[11px] md:text-sm hover:text-white transition-colors"
                  >
                    sgoicompany@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-8 border-l-2 border-blue-500 pl-3 md:pl-4">
              Be in the know
            </h3>
            <p className="text-slate-400 text-[11px] md:text-sm mb-4">
              Subscribe for wholesale pricing and updates.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <form className="relative w-full max-w-xs group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2.5 md:py-3.5 px-4 text-xs md:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
                />
                <button className="absolute cursor-pointer right-1.5 top-1.5 bg-blue-600 text-white p-1.5 md:p-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </form>
              <a
                className="w-full text-center md:w-auto px-6 md:px-10 py-3 md:py-4 bg-white text-slate-950 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
                href="tel:+1-800-123-4567"
              >
                <button className="cursor-pointer text-xs">Get a Quote</button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-8 pt-6 md:pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] md:text-[11px] font-medium uppercase tracking-widest text-center">
            © {currentYear} SGOI Industries. All Rights Reserved.
          </p>
          <div className="flex flex-row items-center gap-2">
            <span className="text-slate-400 text-[9px] uppercase font-black tracking-tighter">
              Crafted by{" "}
              <u>
                {" "}
                <a href="https://www.ynrsgroup.com/" target="_blank">
                  {" "}
                  YNRS Group
                </a>
              </u>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
