import Arrow from './assets/arrow.svg'
import Astro from './assets/astro.png'
import Email from './assets/email.svg'
import Planet1 from './assets/planet1.png'
import Planet2 from './assets/planet2.png'
import Planet3 from './assets/planet3.png'
import User from './assets/user.svg'
import Stars from './assets/stars.png'

function App() {
  return (
    <>
      <main>
        <section className='container mx-auto flex flex-col justify-between px-4 lg:flex-row lg:h-[840px] pb-16'>
          <div className='flex flex-col items-center justify-center flex-1 order-3 h-full gap-12 mt-6 text-center lg:mt-0 lg:order-1 lg:text-start lg:items-start lg:gap-24'>
            <div>
              <h1 className='text-3xl font-black text-pink-600 lg:text-6xl'>
                Explore sem limites
              </h1>
              <p className='text-xl font-semibold lg:text-3xl'>
                Porque o aprendizado é continuo
              </p>
            </div>
            <div className='px-2 py-6 border-2 border-pink-600 rounded-full animate-bounce'>
              <img
                src={Arrow}
                alt=''
                className='w-8 h-8'
              />
            </div>
          </div>

          <div className='order-2 w-full max-w-2xl'>
            <img
              src={Astro}
              alt=''
              className='object-cover'
            />
          </div>
        </section>

        <section className='grid grid-cols-1 gap-8 px-4 py-8 md:gap-16 md:py-16 md:px-24 lg:grid-cols-2 xl:grid-cols-3 bg-gradient'>
          <div className='p-8 space-y-8 bg-white rounded-lg xl:max-w-[666px] w-full'>
            <img
              src={Planet1}
              alt=''
            />
            <div>
              <h2 className='mb-4 text-4xl font-bold text-pink-600'>
                Não pare nunca
              </h2>
              <p className='text-xl'>
                Se você deseja ter sucesso nos estudos, é fundamental que você
                adote uma mentalidade de "não pare nunca". Estudar de forma
                consistente e contínua é a chave para o progresso e a conquista
                de seus objetivos.
              </p>
            </div>
          </div>

          <div className='p-8 space-y-8 bg-white rounded-lg xl:max-w-[666px] w-full'>
            <img
              src={Planet2}
              alt=''
            />
            <div>
              <h2 className='mb-4 text-4xl font-bold text-pink-600'>
                Só volta
              </h2>
              <p className='text-xl'>
                Se você parou ou perdeu o ritmo em alguma atividade ou projeto,
                saiba que nunca é tarde para recomeçar. Às vezes, as
                circunstâncias podem mudar, ou podemos nos sentir desmotivados
                ou sobrecarregados.
              </p>
            </div>
          </div>

          <div className='p-8 space-y-8 bg-white rounded-lg w-full xl:max-w-[666px] lg:col-span-2 xl:col-span-1'>
            <img
              src={Planet3}
              alt=''
            />
            <div>
              <h2 className='mb-4 text-4xl font-bold text-pink-600'>
                Siga seu ritmo
              </h2>
              <p className='text-xl'>
                Avançar pouco a pouco mantém progresso constante em objetivos,
                evitando parar ou desistir. Mesmo pequenos passos nos aproximam
                do destino e motivam a continuidade. Não subestime o poder de
                cada ação rumo ao objetivo final.
              </p>
            </div>
          </div>
        </section>

        <section className='flex items-center justify-center p-4 md:justify-between md:pl-24'>
          <div className='flex-1 md:max-w-3xl'>
            <h2 className='mb-8 text-5xl font-black text-pink-600'>
              Entre em contato
            </h2>
            <form className='flex flex-col w-full gap-6'>
              <div className='flex items-center gap-2 p-2 border rounded-lg border-blue-950'>
                <label htmlFor='#username'>
                  <img
                    src={User}
                    alt=''
                  />
                </label>
                <input
                  id='username'
                  type='text'
                  placeholder='Seu nome'
                  className='w-full bg-transparent placeholder:text-blue-900'
                />
              </div>
              <div className='flex items-center gap-2 p-2 border rounded-lg border-blue-950'>
                <label htmlFor='#email'>
                  <img
                    src={Email}
                    alt=''
                  />
                </label>
                <input
                  id='email'
                  type='text'
                  placeholder='Email'
                  className='w-full bg-transparent placeholder:text-blue-900'
                />
              </div>
              <textarea
                name=''
                id=''
                cols={30}
                rows={5}
                placeholder='Digite sua mensagem aqui'
                className='p-2 bg-transparent border rounded-lg placeholder:text-blue-900 border-blue-950'
              />
              <button
                type='submit'
                className='p-4 text-white rounded-full bg-gradient md:max-w-max'
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className='hidden md:block'>
            <img
              src={Stars}
              alt=''
              className='object-cover w-full'
            />
          </div>
        </section>
      </main>

      <footer className='p-4 text-center text-white bg-gradient'>
        <p className='text-xl'>© 2023 - Rocketseat Explorer</p>
      </footer>
    </>
  )
}

export default App
