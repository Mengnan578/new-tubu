import Image from "next/image";

// tracking-tight 用来控制字间距

export default function Home() {
  return (
    <>
      <Image width={50} height={50} alt="logo" src={"/logo.png"} />
      <div>
        <p className="text-xl font-semibold tracking-tight">New youtube</p>
      </div>
    </>
  );
}
