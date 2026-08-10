
const allindividualroompage =async({params}) => {
    const {id} = await params;
    
    return (
        <div>
            <h1>Our dynamic load ID : {id} </h1>
        </div>
    );
};

export default allindividualroompage;