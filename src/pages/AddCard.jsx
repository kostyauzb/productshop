import {useDispatch} from "react-redux"
import {addData} from "../redux/features/productsSlice"
import {id} from "../../data"
import {nanoid} from "@reduxjs/toolkit"
import {useNavigate} from "react-router-dom"

function AddCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const title = data.get("title")
    const image = data.get("image")
    const dataPrice = data.get("price")
    const description = data.get("description")

    const newData = {
      id: id(),
      uuid: nanoid(),
      title,
      image,
      dataPrice,
      description,
      dataCount: 0,
    }
    dispatch(addData(newData))
    navigate("/")
  }
  return (
    <div className="modal-box border-[2px] shadow-none mx-auto">
      <form method="dialog">
        <h2 className="text-center font-black text-xl">Add to product</h2>
      </form>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid justify-items-center my-3"
      >
        <p className="mr-auto ml-[73px] m-2 from-neutral-200 text-lg">Title:</p>
        <input
          name="title"
          required
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <p className="mr-auto ml-[73px] m-2 from-neutral-200 text-lg">
          Image URL:
        </p>
        <input
          name="image"
          required
          type="url"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />

        <p className="mr-auto ml-[73px] m-2 from-neutral-200 text-lg">Price:</p>
        <input
          required
          name="price"
          type="number"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />

        <p className="mr-auto ml-[73px] m-2 from-neutral-200 text-lg">
          Description:
        </p>
        <textarea
          required
          name="description"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <div className="ml-auto mr-[73px] mt-4">
          <button className="btn btn-success text-cyan-50 justify-end">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCard
