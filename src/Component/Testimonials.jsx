import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      role: "University Student",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      comment:
        "StudyNook made finding a quiet study room so easy. I can book a room in just a few minutes and focus completely on my studies.",
    },
    {
      name: "Tanvir Hasan",
      role: "Computer Science Student",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      comment:
        "I really love the simple booking system. The available time slots make it easy to plan group study sessions with my friends.",
    },
    {
      name: "Nusrat Jahan",
      role: "Library User",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 4,
      comment:
        "The room search feature is very helpful. I can quickly find a suitable room based on location, capacity, and availability.",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Student Reviews
          </span>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-600">
            Thousands of students are using StudyNook to find better places
            to study, collaborate, and stay focused.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-5 text-4xl font-bold text-blue-200">
                “
              </div>

              {/* Comment */}
              <p className="min-h-[120px] text-sm leading-7 text-gray-600">
                {testimonial.comment}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={
                      starIndex < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-gray-200" />

              {/* User */}
              <div className="flex items-center gap-4">
               {/* <Image src="image" alt="img" height={300} width={300}/> */}

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            ⭐ Trusted by students and library users for better study sessions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
