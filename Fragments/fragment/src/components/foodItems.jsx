function foodItems() {
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
export default foodItems;