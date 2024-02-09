function TodoItem1() {
    let todoitems = 'Buy milk';
    let date = '04/10/23';
    return (
        <div class="container text-center items-container">
            <div class="row">
                <div class="col">
                    {todoitems}
                </div>
                <div class="col-6">
                    {date}
                </div>
                <div class="col ">
                    <button type="button" class="btn btn-danger sbtn">Delete</button>
                </div>
            </div>

        </div>
    )


}
export default TodoItem1;