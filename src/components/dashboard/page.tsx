const DashboardComp: React.FC = () => {
  
  return (
    <div className='flex flex-col items-center justify-center rounded-[10px] md:px-[80px] px-[20px] xl:px-[150px] py-[64px] lg:py-[114px] mx-auto md:my-[200px] my-[90px] w-[80%] bg-white shadow-custom-white border-t-4 border-primary'>
      <h1 className='text-black text-center md:font-[400] font-[500] text-[35px] md:text-[50px] leading-[30px] mb-[40px]'>
        Dashboard
      </h1>
      <div>Name: <span className="font-bold">Aqsa</span></div> 
      <div className="mb-6">Email: <span className="font-bold">aqsa@gmail.com</span></div>  
      <button className="bg-primary px-[30px] text-white text-sm min-h-[43px] items-center flex flex-col justify-center rounded-[100px]">Log Out</button>  
    </div>
  );
};

export default DashboardComp;