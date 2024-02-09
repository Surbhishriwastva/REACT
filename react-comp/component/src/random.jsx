function Random() {
    let number = Math.random() * 100;
    return (
        <h2 style={{ 'background-Color': '#776691' }}> random no {Math.round(number)} </h2>
    )
}
export default Random;
