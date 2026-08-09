
const WhyChooseStudyNook = () => {
  const features = [
    {
      icon: "📚",
      title: "Quiet Study Spaces",
      description:
        "Find comfortable and distraction-free study rooms designed to help you focus and learn better.",
    },
    {
      icon: "⚡",
      title: "Easy Booking",
      description:
        "Search available rooms and reserve your preferred study space in just a few clicks.",
    },
    {
      icon: "🕒",
      title: "Flexible Time Slots",
      description:
        "Choose a date and time that works best for you and plan your study sessions with ease.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description:
        "Your account and bookings are protected with secure authentication and reliable booking management.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Why StudyNook?
          </span>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need for a Better Study Experience
          </h2>

          <p className="mt-4 text-gray-600">
            StudyNook makes it simple to discover, book, and manage the
            perfect study room whenever you need it.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseStudyNook;

