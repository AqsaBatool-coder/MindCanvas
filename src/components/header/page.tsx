import Link from "next/link";

export default function Header() {
    return (
      <header className="flex w-full items-center justify-between lg:px-[100px] md:px-[40px] px-[16px] bg-primary-light h-[80px] sticky top-0 z-[10]">
        <Link href='/'><p className="md:text-2xl text-xl text-black text-primary font-bold text-nowrap">Mind Canvas</p></Link>
        <Link href='/login' className="lg:px-[20px] px-[15px] md:h-[35px] h-[30px] flex items-center bg-primary text-white rounded font-bold box-shadow-md text-nowrap">Log In</Link>
      </header>
    );
  }
  