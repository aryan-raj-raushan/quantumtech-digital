type Props = {
  title: string;
  description: string;
  icon: any;
};

export default function ServiceCard({ title, description, icon: Icon }: Props) {
  return (
    <div className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-blue-500 transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-500 mb-4">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
        {title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
