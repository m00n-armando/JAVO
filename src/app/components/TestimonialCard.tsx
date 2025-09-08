import Image from "next/image";

interface TestimonialCardProps {
  author: {
    name: string;
    handle?: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md h-full">
      <Image
        src={author.avatar}
        alt={author.name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover mb-4"
        unoptimized
      />
      <p className="text-lg font-medium text-gray-800 mb-4">{text}</p>
      <div className="text-sm text-gray-600">
        <p className="font-semibold">{author.name}</p>
        {author.handle && <p>{author.handle}</p>}
      </div>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-600 hover:underline">
          Read more
        </a>
      )}
    </div>
  );
}
