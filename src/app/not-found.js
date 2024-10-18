import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flex h-[80vh] w-full flex-col items-center justify-center">
      <h1 class="text-9xl font-extrabold tracking-widest text-white">404</h1>
      <div class="absolute rotate-12 rounded bg-[#bac964] px-2 text-sm">
        Page Not Found
      </div>
      <Link
        href="/"
        class="mt-4 inline-block rounded border border-[#bac964] px-2 py-1 text-sm font-medium text-[#bac964] transition-transform hover:bg-[#bac964] hover:text-[#212529] focus:outline-none"
      >
        Go Home
      </Link>
    </section>
  );
};
export default NotFound;
