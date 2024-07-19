import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="flex-grow p-10 flex flex-col justify-center items-center">
        <p className="text-4xl mb-4">ALMA ROTTEM</p>
        <p className="text-xl mb-4">Researcher</p>
        <p className="text-xl mb-8">Duke | Tel Aviv</p>
        <Image
          src="/profile-2.png"
          width={245}
          height={587.5}
          className="block md:hidden mb-8"
          alt="Alma Rottem Profile Picture"
        />
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
