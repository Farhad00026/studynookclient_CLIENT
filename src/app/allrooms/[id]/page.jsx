import Singlecardview from "@/Component/Singlecardview";

const allindividualroompage = async ({ params }) => {
    const { id } = await params;

    // GET API TO USE INDIVIDUAL ID CALL ISSUE

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVERSIDE_URI}/study/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch room");
    }
    const room = await res.json();

    return (
        <div>
            <h1 className="text-3xl text-center m-3">About Study Room
            </h1>
            <div>
                <Singlecardview room={room} />
            </div>
        </div>
    );
};

export default allindividualroompage;