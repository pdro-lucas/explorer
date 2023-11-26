import Astro from './assets/astro.png'

function App() {
  return (
    <main className='container mx-auto'>
      <div className='flex flex-col justify-between px-4 lg:flex-row lg:h-[840px]'>
        <div className='flex flex-col items-center justify-center flex-1 order-3 h-full mt-6 lg:mt-0 lg:order-1 lg:text-start lg:items-start'>
          <h1 className='text-3xl font-black text-pink-600 lg:text-6xl'>
            Explore sem limites
          </h1>
          <p className='text-xl font-semibold lg:text-3xl'>
            Porque o aprendizado é continuo
          </p>
        </div>

        <div className='order-2 w-full max-w-2xl'>
          <img
            src={Astro}
            alt=''
            className='object-cover'
          />
        </div>
      </div>
    </main>
  )
}

export default App
