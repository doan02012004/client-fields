

const SidebarFieldBlog = () => {
    const soccerFields = [
        { id: 1, name: "Sân bóng đá hoàng thành", image: "http://picsum.photos/id/30/400/400" },
        { id: 2, name: "Sân bóng đá hoàng thành kỉ niệm", image: "http://picsum.photos/id/35/400/400" },
        { id: 3, name: "Sân bóng đá hoàng thành ngày xưa", image: "http://picsum.photos/id/48/400/400" },

    ];
    return (
        <div className=' bg-white p-4 border border-gray-200 rounded h-max  col-span-12 xl:top-16 xl:sticky xl:col-span-3'>
            <h2 className="text-xl font-semibold mb-4">Danh sách sân bóng</h2>
            <ul className="space-y-4 ">
                {soccerFields.map((field,index) => (
                    <li key={field.id} className={`flex items-center gap-4 cursor-pointer group ${index + 1 !== soccerFields.length && 'pb-2 border-b border-gray-200'} `}>
                        <img
                            src={field.image}
                            alt={field.name}
                            className="size-20 object-cover rounded-md"
                        />
                        <span className="text-md font-medium group-hover:text-green-500">{field.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarFieldBlog