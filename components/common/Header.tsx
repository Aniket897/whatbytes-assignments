import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-2 md:px-8 py-4 border-b sticky top-0 left-0 w-full bg-white z-10 h-[80px]">
      <div>
        <h1 className="text-3xl">WhatBytes</h1>
      </div>
      <div className="flex items-center gap-x-4 shadow border rounded-md p-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
            }
            width={50}
            height={50}
            alt="AVATAR"
          />
        </div>
        <p>Rahil Siddique</p>
      </div>
    </div>
  );
};

export default Header;
