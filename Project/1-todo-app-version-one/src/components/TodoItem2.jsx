function TodoItem2() {
    let todoitems = 'Goto list';
    let date = '14/10/23';
    return (
        <div class="container text-center items-container">
            <div class="row">
                <div class="col">
                    {todoitems}
                </div>
                <div class="col-6">
                    {date}
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger sbtn">Delete</button>
                </div>
            </div>

        </div>
    )
}
export default TodoItem2