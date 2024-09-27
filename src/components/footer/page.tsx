
export default function Footer() {
    return (
      <div className="flex items-center justify-center lg:px-[100px] md:px-[40px] px-[16px] bg-primary-light h-[50px]">
        <small className="text-primary text-center">Copyright © {new Date().getFullYear()} MindCanvas. All Rights Reserved.</small>
      </div>
    );
  }
  