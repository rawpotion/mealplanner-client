import React, { FC } from 'react'

interface HighlightProps {
  textDirection: 'left' | 'right'
  title: string
  description: string
  imageUrl: string
}

const Highlight: FC<HighlightProps> = (props) => {
  const contentOrder = (
    textIsLeft: boolean,
    description: string,
    imageUrl: string
  ) => {
    if (textIsLeft) {
      return (
        <>
          <p className="col-span-5 text-gray-700 text-justify row-span-1 row-start-3 md:row-start-2 md:row-span-2 md:col-span-3">
            {description}
          </p>
          <img
            src={imageUrl}
            className="bg-black w-full h-full col-span-5 object-cover row-start-1 row-span-1 md:row-start-2 md:row-span-2 md:col-span-2"
          />
        </>
      )
    } else {
      return (
        <>
          <img
            src={imageUrl}
            className="bg-black w-full h-full col-span-5 object-cover row-start-1 row-span-1 md:row-start-2 md:row-span-2 md:col-span-2"
          />
          <p className="col-span-5 text-gray-700 text-justify row-span-1 row-start-3 md:row-start-2 md:row-span-2 md:col-span-3">
            {description}
          </p>
        </>
      )
    }
  }

  return (
    <div className="px-4 md:px-40 grid grid-cols-5 auto-rows-max gap-4 md:gap-8 max-w-6xl mx-auto">
      <h2
        className={`uppercase underline text-3xl text-green-300 col-span-5 row-start-2 md:row-start-1 ${
          props.textDirection === 'right' ? 'md:text-right' : ''
        }`}
      >
        {props.title}
      </h2>
      {contentOrder(
        props.textDirection === 'left',
        props.description,
        props.imageUrl
      )}
    </div>
  )
}

export default Highlight
