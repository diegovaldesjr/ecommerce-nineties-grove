export const Hero = ({className}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={`/imgs/hero.jpg`}
        className="absolute object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 w-full px-4 py-16 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-red-600 sm:block"> Increase Conversion. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

        </div>
      </div>
    </div>
  )
}
