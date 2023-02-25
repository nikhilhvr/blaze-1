import Image from "next/image";

const testimonials = [
  [
    {
      content:
        "I had the pleasure of working with Blaze Media to boost my social media presence for my small business, and I couldn't be happier with the results! The team was professional, knowledgeable, and dedicated to helping me achieve my goals. Thanks to their expert guidance",
      // link: "https://twitter.com/rauchg/status/1612233034622984192",
      author: {
        name: "Alex Chen",
        role: "CEO at The Wardrobe",
        image: "/g.jpg",
      },
    },
    {
      content:
        "Their approach is tailored to your specific needs, and they go above and beyond to ensure you get the results you want. If you're looking for a social media agency that truly cares about your success, look no further than Blaze Media.",
      // link: "https://twitter.com/cramforce/status/1612496954218672128",
      author: {
        name: "Lisa Johnson",
        role: "CTO at Paws & Claws",
        image: "/malte.jpg",
      },
    },
  ],
  [
    {
      content:
        "Blaze Media is a game-changer.",
      // link: "https://twitter.com/phar_whaz/status/1612498030627852309",
      author: {
        name: "Michael Patel",
        role: "Owner of Namaste Yoga",
        image: "/fawaz.jpg",
      },
    },
    {
      content:
        "Working with Blaze Media was an absolute pleasure. Their team is friendly, responsive, and dedicated to helping you succeed.",
      // link: "https://twitter.com/sergvind/status/1612610058369515521",
      author: {
        name: "James Lee",
        role: "Owner at Tasty Bites",
        image: "/sergei.jpg",
      },
    },
  ],
  [
    {
      content:
        "They took the time to understand my business and my target audience, and their expert guidance led to significant growth in my social media presence. I highly recommend Blaze Media to anyone looking for a top-notch social media agency",
      // link: "https://twitter.com/Himanil_Gole/status/1612510385504157697",
      author: {
        name: "Emily Chen",
        role: "Designer & Founder at Sugar & Spice",
        image: "/himanil.jpg",
      },
    },
    {
      content:
        "Their team is not only knowledgeable and skilled, but they also take the time to understand your business and your target audience.",
      // link: "https://twitter.com/rod_ellison/status/1612513333302775809",
      author: {
        name: "Jack Kim",
        role: "Owner of Auto Care Plus",
        image: "/rod.jpg",
      },
    },
    // {
    //   content:
    //     "They are always available to answer any questions and provide valuable insights to help you succeed.",
    //   link: "https://twitter.com/rod_ellison/status/1612513333302775809",
    //   author: {
    //     name: "Rod Ellison",
    //     role: "Software Engineer",
    //     image: "/rod.jpg",
    //   },
    // },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
          When Quality Matters: Premium Brands Choose Us for A Reason
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            See what our 35+ users are saying about the product.
            <h3>Blaze Media is a game-changer ? </h3>
          </p>
          
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
