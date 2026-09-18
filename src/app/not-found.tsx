import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-28 md:pt-36 pb-20">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 text-center">
        <p className="section-label mb-4">404</p>
        <h1 className="text-3xl font-medium text-charcoal mb-4">Pagina niet gevonden</h1>
        <p className="text-mid-gray mb-10 max-w-md mx-auto">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors">
            Home
          </Link>
          <Link href="/diensten/" className="px-6 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors">
            Diensten
          </Link>
          <Link href="/contact/" className="px-6 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
