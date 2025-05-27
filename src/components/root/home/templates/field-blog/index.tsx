import { ChevronLeft, ChevronRight } from "lucide-react"
import { useGetAllBranchQuery } from "../../../../../libs/hooks/branch";
import { useEffect, useState } from "react";
import { BranchType } from "../../../../../types/api.type";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";


const SkeletonField = () => {

  return (
    <div className="flex flex-col gap-6 xl:justify-between xl:flex-row xl:gap-0">
      <div className=" max-w-xl  order-2 xl:order-1">
        {/* <h2 className="heading-3 mb-4 xl:heading-2">{branch.name}</h2> */}
        <Skeleton.Input className=" min-w-40 mb-4 lg:min-w-48" active />
        <div className="flex  flex-col gap-3  mb-4 md:items-center md:flex-row md:gap-10">
          <Skeleton.Input className="min-w-20 lg:min-w-28" active />
          <Skeleton.Input className="min-w-20 lg:min-w-28" active />
        </div>
        <div className="mb-4">
          <Skeleton.Input className="min-w-52 lg:min-w-80" active />
        </div>
        <Skeleton.Node className="min-h-40 w-full mb-4 lg:min-h-56" active />
        <div className="flex justify-center items-center xl:justify-end ">
          <Skeleton.Button className="h-12 w-32" active />
        </div>
      </div>

      <div className=" relative order-1 xl:order-2">
        <Skeleton.Node className='h-[400px] md:h-[470px] xl:h-[444px] xl:w-[450px] ' active />
        <button
          className="swiper-button-prev-field-home absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer bg-white size-10
      rounded-full flex justify-center items-center border border-gray-200
       hover:shadow-md hover:shadow-gray-500 xl:-left-4"
        >
          <ChevronLeft />
        </button>
        <button
          className="swiper-button-next-field-home absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer bg-white size-10
      rounded-full flex justify-center items-center border border-gray-200 hover:shadow-md hover:shadow-gray-500 xl:-right-4"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
const ListFieldTemPlates = () => {
  const [branchs, setBranchs] = useState<BranchType[]>([])

  const { data } = useGetAllBranchQuery({status:true})

  useEffect(() => {
    if (data?.branchs) {
      setBranchs(data.branchs)
    }
  }, [data])


  return (
    <section className="container mb-20">
      <h2 className="text-2xl font-bold text-center mb-10">Danh sách chi nhánh sân</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {branchs.map((branch) => (
          <div key={branch._id} className="border border-gray-200 bg-white rounded overflow-hidden shadow-sm cursor-pointer transition hover:shadow-lg hover:shadow-gray-400">
            <Link to={`/field-detail/${branch.slug}`}>
              <img src={branch.images[0]} alt={branch.name} className="w-full h-64 object-cover md:h-72 lg:h-80" />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{branch.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{branch.address_text}</p>
              <p className="text-sm">Hoạt động: {branch.timeActive.title}</p>
              <Link to={`/field-detail/${branch.slug}`}>
                <button className="mt-4 w-full cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  Xem chi tiết
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ListFieldTemPlates