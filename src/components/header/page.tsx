import Link from "next/link";

export default function Header() {
    return (
      <div className="flex items-center justify-between lg:px-[100px] px-[40px] bg-primary-light h-[80px]">
        <p className="md:text-2xl text-xl text-black text-primary font-bold text-nowrap">Mind Canvas</p>
        <Link href='' className="lg:px-[20px] px-[15px] md:h-[35px] h-[30px] flex items-center bg-primary text-white rounded font-bold box-shadow-md text-nowrap">Log In</Link>
      </div>
    );
  }
  