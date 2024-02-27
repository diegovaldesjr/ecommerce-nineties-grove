export const Marquee = ({text, className}) => {
  let items = []
  for(let i=0; i<10; i++) {
    items.push(<h1 key={`marquee-${i}`} className={`marquee__item text-4xl font-bold my-10`}>{text}</h1>)
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="marquee__content items-center">
        {items}
      </div>
    </div>
  )
}
