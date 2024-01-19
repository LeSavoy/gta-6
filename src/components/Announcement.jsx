const Announcement = () => {
  return (
    <section className="bg-[#353442] h-[570px]">
      <div className="border-[2px] border-[#FCAF17] rounded-xl mx-[320px] h-[550px] flex  items-center">
        <div>
          <img
            src="./src/assets/gta6-logo.png"
            alt="gta 6 logo"
            className="w-[450px] ml-96 mr-48"
          />
        </div>

        <div className=" flex flex-col gap-10 justify-center  h-full ml-[500px]">
          <h2 className="text-5xl text-white font-semibold">Grand Theft Auto VI</h2>

          <p className="text-white text-lg w-2/4">
            Grand Theft Auto heads to the state of Leonida, home to the
            neon-soaked streets of Vice City and beyond in the biggest, most
            immersive evolution of the Grand Theft Auto series yet. Coming 2025 to PlayStation 5 and Xbox Series X|S.
          </p>
          <a href="#">
            <button className="bg-[#FCAF17] h-10 rounded-[0.20rem] w-40 text-black font-semibold text-lg hover:bg-[#fca017] transition-all flex-row self-start cursor-pointer">Watch Trailer 1 <i class='bx bxs-right-arrow'></i> </button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Announcement;
