'use client'

export default function Product({params}: any) {
  const {id, title, description} = params || {}

  return (
      <div>
        <h1>{id}</h1>
        <div>
          <h2>{title}</h2>
          <h5>{description}</h5>
        </div>
      </div>
  )
}
