import RoomsCardView from "@/Component/RoomsCardView";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const allroomspage =async() => {
    const {token} = await auth.api.getToken({
        headers:  await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/study`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "authorization":`Bearer ${token}`
        }
    })
    const rooms = await res.json();
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="text-3xl text-center "> All Rooms Are :{rooms.length} </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    rooms.map(room => <RoomsCardView key={room._id} room={room} />)
                }
            </div>
        </div>
        </div>
    );
};

export default allroomspage;