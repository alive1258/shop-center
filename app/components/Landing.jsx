/* eslint-disable react/no-unescaped-entities */
// import homeProductsData from '../data/homeProductsData'
import homeProductsData from '../data/products'
import ProductCard from './ProductCard'

const Landing = () => {
  return (
    <>
      <header
        className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full  "
        style={{ backgroundImage: "url('assets/header.webp')" }}
      >
        <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
          <h1 className="text-2xl lg:text-3xl font-serif">
            Introducing LWS Shop Center
          </h1>
          <p>Your whole week at a glance</p>
          <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
            Get the Weekly Kit
          </button>
        </div>
      </header>

      <main>
        {/* <!-- Product section start --> */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {/* <!-- Product Card --> */}

            {homeProductsData?.slice(0, 12)?.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
        {/* <!-- Product section end --> */}
        <section className="bg-[#ced3ca] py-5 lg:py-16">
          <div className="w-10/12 lg:w-4/12 mx-auto">
            <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
              Get the inside scoop
            </h1>
            <p className="text-center text-sm lg:text-base">
              Sign up for new product drops, behind-the-scenes content, and
              monthly "5 Things I'm Digging" emails
            </p>
            <form action="#" className="mb-5">
              <input
                type="text"
                className="p-3 mt-10 border border-black focus:outline-none w-full"
                placeholder="Enter your email"
              />
              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
                See what we're doing
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Landing
