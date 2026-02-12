import Image from "next/image";
import Client1 from "@/public/home/client1.jpeg";
import Client2 from "@/public/home/client2.jpg";
import Client3 from "@/public/home/client3.jpg";
import Client4 from "@/public/home/client4.webp";
import Client5 from "@/public/home/client5.jpg";
import Client6 from "@/public/home/client6.webp";
import Client7 from "@/public/home/client7.jpg";
import Client8 from "@/public/home/client8.jpg";
import Client9 from "@/public/home/client9.jpg";
import Client10 from "@/public/home/client10.jpg";

interface Client {
  id: number;
  name: string;
  logo: any;
}

const clientsData: Client[] = [
  { id: 1, name: "JUNEJA's KITCHEN", logo: Client1 },
  { id: 2, name: "MIRCH Masala ", logo: Client2 },
  { id: 3, name: "apna punjab ", logo: Client3 },
  { id: 4, name: "rajinder X press", logo: Client4 },
  { id: 5, name: "Cafe andoz", logo: Client5 },
  { id: 7, name: "zen", logo: Client7 },
  { id: 8, name: "shibuya food and bar", logo: Client8 },
  { id: 9, name: "brownsugar xpress", logo: Client9 },
  { id: 10, name: "lazeez affaire", logo: Client10 },
];

const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-slate-800 tracking-tight">
            Our<span className="font-bold"> Clients</span>
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap border-t border-l border-slate-100">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="w-1/2 sm:w-1/3 lg:w-1/5 border-r border-b border-slate-100 flex flex-col items-center justify-center p-6 sm:p-10 aspect-square sm:aspect-auto sm:h-64"
            >
              <div className="relative w-full h-full max-h-24 sm:max-h-32 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>

              <p className="mt-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
