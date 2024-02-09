function AddTodo() {
    return (
        <div class="container text-center items-container">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Enter todo"></input>
                </div>
                <div class="col-6">
                    <input type="date"></input>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-success sbtn">Success</button>
                </div>
            </div>

        </div>
    )
}
export default AddTodo;