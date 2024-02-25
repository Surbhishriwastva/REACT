const errormsg = () => {

    let foodItems = ["Dal", "Roti", "Vegetable", "egg", "Ghee"];
    return
    <>
        {foodItems.length === 0 && <h3> i am still hungry.</h3>}

    </>
}
export default errormsg;