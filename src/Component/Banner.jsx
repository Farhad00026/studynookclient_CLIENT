import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
      className="bg-cover bg-center h-[600px]"
    >
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          StudyNook <br /> – Library Study Room Booking
        </h1>

        <p className="text-2xl text-black">
          Explore The Study Rooms Here. 
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Rooms
          </button>
        </div>
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
        <div className="px-3">
          <h3 className="text-sm">Location of Rooms</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Duration</h3>
          <p className="text-xs">Anytime/3 Hr</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Rate</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Capacity</h3>
          <p className="text-xs">5-10</p>
        </div>



        <div className="bg-cyan-500 py-2 px-4">
          <h3>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;