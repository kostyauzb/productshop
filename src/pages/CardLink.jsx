import {NavLink, useParams} from "react-router-dom"

function CardLink({datas}) {
  const {id} = useParams()

  const condition = (data) => {
    return data.id == id
  }

  const foundData = datas.find(condition)

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      {foundData ? (
        <>
          <figure>
            <img className="" src={foundData.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{foundData.title}</h2>
            <p className="max-w-[690px] w-full">{foundData.description}</p>
            <div className="card-actions justify-end">
              <NavLink to={"/"} className="btn btn-primary">
                Home
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <div className="font-bold">Loader...</div>
      )}
    </div>
  )
}

export default CardLink
