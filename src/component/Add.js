function Add({ setModalOpen, cardData}) {
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div >
            <button className={"close"} onClick={closeModal}>
                X
            </button>
            {/*{cardData.name}*/}
            {/*<p>{cardData.name} </p>*/}
            <p>고소함 </p>
        </div>
    );
}
export default Add;