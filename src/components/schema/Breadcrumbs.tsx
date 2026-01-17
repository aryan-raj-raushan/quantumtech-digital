import Link from "next/link";

export default function Breadcrumbs({ city }: any) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white">
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>/</li>
        <li className="font-medium">IT Services in {city.name}</li>
      </ol>
    </nav>
  );
}
