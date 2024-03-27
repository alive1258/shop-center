import getProductById from '@/utils/doc-utils'
import Image from 'next/image'
import Link from 'next/link'
import starPic from '../../../public/assets/svg/star.svg'

const ProductsPage = ({ params }) => {
  const product = getProductById(params?.id)

  // Calculate the discounted price
  const originalPrice = product.price / (1 - product.discountPercentage / 100)

  const renderRatingStars = () => {
    const stars = []
    const rating = Math.floor(product.rating) // Convert rating to integer
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image key={i} src={starPic} height={20} width={20} alt="star" />
      )
    }
    return stars
  }

  return (
    <>
      <main className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                src={product?.thumbnail}
                alt="thumbnail"
                width={400}
                height={500}
                className="w-[400px] h-[500px] mx-auto object-cover"
              />

              <div className="flex gap-4 mt-4">
                {product?.images?.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`image-${index}`}
                      width={100}
                      height={100}
                      className="w-[100px] h-[100px] mx-auto border object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {product?.title}
              </h1>
              <span className="text-[#919090] my-3">
                <Link href={`/category/${product?.category}`}>
                  {product?.category}
                </Link>
              </span>
              <div className="mt-3 flex items-center justify-start gap-1">
                {renderRatingStars()}
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <div className="my-3">
                  <p className="font-medium ">
                    {' '}
                    Discount: {product?.discountPercentage}%
                  </p>
                  <span className="text-rose-600 opacity-60 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="font-bold text-2xl"> ${product?.price}</span>
                </div>
              </div>
              <div>
                <p className="leading-7">{product?.description}</p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${product?.price}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProductsPage
