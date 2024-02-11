import {useDispatch} from "react-redux"
import {decrimentData, incrementData} from "../redux/features/productsSlice"
import {NavLink} from "react-router-dom"

function Card({data}) {
  const dispatch = useDispatch()
  return (
    <div className="card max-w-[290px] w-full max-h-[400px] h-full mb-2 bg-base-100 shadow-xl">
      <figure>
        <NavLink to={data.id}>
          <img src={data.image} alt="Shoes" />
        </NavLink>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p className="line-clamp-2">{data.description}</p>
        <div className="card-actions justify-end items-center">
          <div className="flex items-center gap-5">
            <div
              style={{display: data.dataCount > 0 ? "flex" : "none"}}
              className="flex items-center mt-2 gap-x-3"
            >
              <button
                onClick={() => {
                  dispatch(decrimentData(data.id))
                }}
                className="btn btn-error"
              >
                -
              </button>
              <p className="font-bold text-[18px]">{data.dataCount}</p>
              <button
                onClick={() => {
                  dispatch(incrementData(data.id))
                }}
                className="btn btn-success"
              >
                +
              </button>
            </div>

            <button
              style={{display: data.dataCount == 0 ? "flex" : "none"}}
              onClick={() => {
                dispatch(incrementData(data.id))
              }}
              className="btn btn-primary mt-2"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
