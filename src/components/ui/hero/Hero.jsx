export const Hero = ({className}) => {
  const textContent = {
    title1: 'Esencia noventera',
    title2: 'Rebobina tu estilo.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!'
  }
  return (
    <div className={`relative ${className}`}>
      <img
        src={`/imgs/hero.jpg`}
        className="absolute object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 w-full px-4 py-32 lg:flex lg:h-[750px] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {textContent.title1}
            <strong className="font-extrabold text-red-600 sm:block">{textContent.title2}</strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            {textContent.subtitle}
          </p>

        </div>
      </div>
    </div>
  )
}
