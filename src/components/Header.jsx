function Header() {
  return (
    <nav className="h-36 flex items-center justify-between ml-24 mr-24 ">
        <div>
            <img src="./src/assets/logo.png" alt="Rockstar Logo" className="w-16"/>
        </div>

          <ul className="text-white flex items-center justify-center gap-10 text-lg">
            <li className="mr-[-35px]">Games</li>
            <i class='bx bx-chevron-down'></i>
            <li>Newswire</li>
            <li>Videos</li>
            <li>Downloads</li>
            <li className="mr-[-35px]">Store</li>
            <i class='bx bx-link-external' ></i>
            <li className="mr-[-35px]">Support</li>
            <i class='bx bx-link-external' ></i>
          </ul>

          <div className="text-white flex items-center gap-10">
            <a href="#" className="">
              <button className="bg-[#FCAF17] h-10 rounded-[0.20rem] w-40 text-black font-semibold text-lg">Get Launcher</button>
            </a>
            <i class='bx bx-search bx-sm'></i>
            <i class='bx bx-user bx-sm' ></i>
          </div>

    </nav>
  )
}

export default Header