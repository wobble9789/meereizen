import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{icon}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex-1">
            {title}
          </h3>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-blue-600 font-semibold text-lg group">
          <span>Meer informatie</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
