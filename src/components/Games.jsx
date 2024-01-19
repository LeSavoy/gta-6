const Games = () => {
  return (
    <section className="bg-[#353442] h-[1180px]">
    <h3 className="text-white text-5xl pt-28 ml-[320px]">Featured Games</h3>

    <div className="flex justify-center gap-32 mt-14">
        <div className="border rounded-lg">
            <img src="./src/assets/game-1.jpg" alt="" className="w-[380px] rounded-lg" />
        </div>

        <div className="border rounded-lg">
            <img src="./src/assets/game-2.jpg" alt="" className="w-[380px] rounded-lg" />
        </div>

        <div className="border rounded-lg">
            <img src="./src/assets/game-3.jpg" alt="" className="w-[380px] rounded-lg" />
        </div>

        <div className="border rounded-lg">
            <img src="./src/assets/game-4.jpg" alt="" className="w-[380px] rounded-lg" />
        </div>
    </div>

    <div className="">
        <p className="text-center mt-28 text-white text-xl mb-4 cursor-pointer">Views More</p>
        <hr className="w-48 border text-[#FCAF17] border-[#FCAF17] m-auto"/>
    </div>
</section>
  )
}

export default Games