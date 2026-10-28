import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h4 className="pb-3">Welcome to my portfolio. It is currently a work in progress. </h4>
      <Image
        src='/under_construction.png'
        width={500}
        height={500}
        alt="Under Construction Picture missing"
      />
    </div>
  );
}
