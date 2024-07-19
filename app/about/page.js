import { fetchAboutPage } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function About() {
  const aboutParagraphs = await fetchAboutPage();
  return (
    <div className="flex flex-row">
      <div className="flex-grow w-1/2 p-6 pb-0 text-sm">
        {aboutParagraphs.map((paragraph) => (
          <p
            className="mb-7"
            key={paragraph.get("paragraph")}
            dangerouslySetInnerHTML={{ __html: paragraph.get("content") }}
          ></p>
        ))}
        <div className="flex align-center justify-center mb-4 md:mb-0">
          {/* <Link
            href="/bios/Omri Kochavi - bio (January 24).pdf"
            className="underline font-light"
          >
            Bio
          </Link>
          <span className="mx-2">-</span> */}
          <Link
            href="/bios/Alma Rottem CV 2023.pdf"
            className="underline font-light"
          >
            CV
          </Link>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src="/profile-2.png"
          width={490}
          height={1175}
          className="hidden md:block"
          alt="Alma Rottem Profile Picture"
        />
      </div>
    </div>
  );
}
