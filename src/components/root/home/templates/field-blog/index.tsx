
import { useGetAllBranchQuery } from "../../../../../libs/hooks/branch";
import { useEffect, useState } from "react";
import { BranchType } from "../../../../../types/api.type";
import { Link } from "react-router-dom";

const FieldItem = ({ branch }: { branch: BranchType }) => {

  return (
    <Link to={`/field-detail/${branch.slug}`} className=" group block relative border border-gray-200 bg-white rounded overflow-hidden shadow-sm cursor-pointer transition hover:shadow-lg hover:shadow-gray-400">
      <div className="w-full h-full relative">
        <img src={branch.images[0]} alt={branch.name} className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out md:h-[440px] lg:h-[450px] xl:h-[500px] group-hover:scale-105" />
      </div>
      <div className=" opacity-0 absolute inset-0 bg-black/40 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <h3 className="text-lg font-semibold text-white absolute bottom-4 left-4">{branch.name}</h3>
        </div>
      </div>
      {/* <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{branch.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{branch.address_text}</p>
        <p className="text-sm">Hoạt động: {branch.timeActive.title}</p>
        <Link to={`/field-detail/${branch.slug}`}>
          <button className="mt-4 w-full cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Xem chi tiết
          </button>
        </Link>
      </div> */}
    </Link>
  )
}


const ListFieldTemPlates = () => {
  const [branchs, setBranchs] = useState<BranchType[]>([])

  const { data } = useGetAllBranchQuery({ status: true })

  useEffect(() => {
    if (data?.branchs) {
      setBranchs(data.branchs)
    }
  }, [data])


  return (
    <section className="container mb-20">
      <h2 className="text-2xl font-bold text-center mb-10">Sân Bóng</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {branchs.map((branch) => (
          < FieldItem key={branch._id} branch={branch} />
        ))}
      </div>
    </section>
  )
}

export default ListFieldTemPlates