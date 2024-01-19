const Footer = () => {
  return (
    <footer className="bg-[#2C251F] h-[680px] ">
      <div className="flex justify-between mx-[320px] text-white">
        <ul className="flex items-center mt-28">
          <li className="mr-10">contact</li>
          <li className="mr-2">carrers</li>
          <i class="bx bx-link-external"></i>
          <li className="ml-10 mr-2">subscribe</li>
          <i class="bx bx-link-external"></i>
        </ul>

        <div className="mt-28">
          <ul className="flex items-center">
            <i class="bx bx-globe bx-sm"></i>
            <li className="ml-2 mr-1"> Select a Language </li>
            <i class="bx bx-chevron-down bx-sm"></i>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mx-[320px] mt-36">
        <ul className="flex gap-10 text-[#7a747e]">
          <li>corporate</li>
          <li>privacy</li>
          <li>cookie setting</li>
          <li>cookie privacy</li>
          <li>legal</li>
          <li>Do Not Sell My Personal <br /> Information</li>
        </ul>

        <div className=" flex gap-10 text-white">
          <i class="bx bxl-twitch  bx-md"></i>
          <i class="bx bxl-instagram bx-md"></i>
          <i class="bx bxl-twitter bx-md"></i>
          <i class="bx bxl-youtube bx-md"></i>
          <i class="bx bxl-facebook bx-md"></i>
        </div>
      </div>

      <div className="text-white mx-[320px] flex mt-52 text-xl font-semibold">
        <p className="w-full">Rockstar Games</p>

        <ul className="flex w-full justify-center gap-6">
            <li>New York</li>
            <li>London</li>
            <li>Paris</li>
            <li>Bogota</li>
        </ul>

        <p className="text-end w-full">MCMXCVIII</p>
      </div>
    </footer>
  );
};

export default Footer;
