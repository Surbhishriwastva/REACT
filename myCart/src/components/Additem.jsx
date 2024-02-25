
function Additems(props) {

    return <form className="row mt-5">
        <div class="mb-5 col-4">
            <label for="inputName" class="form-label ">
                <h4>Name</h4>
            </label>
            <input type="text" class="form-control" id="inputName" aria-describedby="name" />

        </div>

        <div class="mb-3 col-4">
            <label for="inputPrice" class="form-label">
                <h4> Price</h4>
            </label>
            <input type="number" class="form-control" id="price" />
        </div>


        <button className="btn btn-primary  "
            onClick={() => {
                props.Additems()
            }}
        > Add</button>

    </form>
}

export default Additems;