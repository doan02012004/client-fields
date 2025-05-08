import { Quote } from 'lucide-react'


const TestimonialsTemplate = () => {
  return (

    <section className="container mb-20">
    <h2 className="text-3xl font-bold text-center mb-12">Khách hàng nói gì?</h2>
    <div className="grid gap-5 md:grid-cols-2 md:gap-10">
      {[
        {
          quote: "Chỉ mất 1 phút là đặt được sân, quá tiện!",
          name: "Anh Hoàng",
          location: "Quận 3",
          avatar: "https://picsum.photos/id/30/200/200",
        },
        {
          quote: "Không còn lo gọi điện nhiều nơi để hỏi sân trống.",
          name: "Chị Mai",
          location: "Hà Nội",
          avatar: "https://picsum.photos/id/34/200/200",
        },
      ].map((item, index) => (
        <div key={index} className="relative bg-white border border-gray-200 rounded-xl shadow-lg p-6">
          <Quote className="absolute top-4 left-4 w-6 h-6 text-green-400 opacity-40" />
          <p className="text-lg italic text-gray-800 mb-4">“{item.quote}”</p>
          <div className="flex items-center gap-4 mt-6">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  )
}

export default TestimonialsTemplate