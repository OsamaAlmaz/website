
import image1 from './images/image.jpg'
export default function Sandbox(){
    return (
        // background container
        <div className="flex h-screen items-center justify-center bg-zinc-800">
        {/** Card */}
        <div className="mx-4 rounded-2xl bg-zinc-700 p-2">
            {/** container  */}
            <div className="flex flex-col rounded-l-xl md:flex-row">
                {/** Image content */}
                <img 
                src={image1}
                alt=""
                className="object-fit rounded-xl h-80 md:h-60 md:rounded-xl md:rounded-r-none transform hover:scale-105 hover-rounded-xl duration-200"
                />
                <div className="p-6 md:p-15">
                    <h2 className='font-serif text-xl font-medium  text-center text-white md:text-left '>
                        Get diet and fitness tips in your inbox
                    </h2>
                    <p
                        className='max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left'
                    >
                                      Eat better and exercise better. Sign up for the Diet&Fitness
                                      newsletter.

                    </p>

                    <div className='flex flex-col mt-5 space-y-0 md:space-x-4 md:flex-row '>

                        <input 
                            type="text"
                            placeholder='Enter Your Email here'
                            className='p-2 px-4 text-center text-white bg-zinc-800 border placeholder:text-sm placeholder:text-center md: text-left placeholder:md:text-left focus:outline-none'
                        />
                        <button
                            class="p-2 px-4 text-center text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
                        >
                            Subcribe
                        </button>
                    </div>
                    <div className='flex flex-col mt-5 space-y-4 md:space-x-3  md:space-y-3 md:flex-col'>
                        
                    
                </div>
            </div>



            </div>

        </div>
        </div>
    )
}