function FoodItems() {
    let foodItems = ["Dal", "egg", "green vegetable", "Ghee"]
    return (
        <ul className="List-group">
            {foodItems.map((item) => (
                <li key={item} className="List-group-item">
                    {item}
                </li>
            ))}
        </ul>

    )
}
export default FoodItems;