import {useSelector} from "react-redux"
import Card from "./Card"

function CardLists() {
  const {allData} = useSelector((store) => store.data)

  return (
    <div className="grid grid-cols-4 gap-3 m-3 justify-items-center">
      {allData.map((data) => {
        return <Card key={data.uid} data={data} />
      })}
    </div>
  )
}

export default CardLists
