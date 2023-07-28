import React, { useEffect, useState } from 'react'
import Image from 'next/image';
function DisplayData({weatherData}:any) {
    const [conditionIcon, setConditionIcon] = useState<any>(null)
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = currentDate.toLocaleDateString(('en-GB'));
    useEffect(() => {
        if (weatherData) {
            const currentCondition = (weatherData?.weather[0]?.main).toLowerCase()
            if (currentCondition.includes("clear" || "sunny")) {

                setConditionIcon('https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png');
            }
            else if (currentCondition.includes("cloud") || currentCondition.includes("overcast")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/3208/3208676.png');
            }
            else if (currentCondition.includes("rain") || currentCondition.includes("drizzle") || currentCondition.includes("shower")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/10596/10596460.png');
            }
            else if (currentCondition.includes("thunder") || currentCondition.includes("storm")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/3675/3675288.png');
            }
            else if (currentCondition.includes("snow")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/6328/6328544.png');
            }
            else if (currentCondition.includes("smoke") || currentCondition.includes("fog")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/6257/6257069.png');
            }
            else if (currentCondition.includes("heat")) {
                setConditionIcon('https://cdn-icons-png.flaticon.com/128/3600/3600503.png');
            } else {
                setConditionIcon('')
            }
        }


    }, [weatherData])
    return(
        <div>
               <>
                            <div className='flex justify-center pt-12 font-bold text-4xl'>
                                <h1>{weatherData?.name}, {weatherData?.sys?.country}</h1>
                            </div>
                            <div className='flex justify-center pt-6 font-medium text-lg'>
                                <h1>{dayOfWeek}, {date}</h1>
                            </div>
                            <div className='flex justify-center pt-12 font-bold text-4xl'>
                                <div className='flex bg-gray-500 rounded-lg bg-opacity-40 py-2.5 px-3'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h1 className='flex justify-center text-white'>{Math.round(weatherData?.main?.temp)} <span className='text-lg'>°c</span>  </h1>
                                        <span className='flex justify-center text-gray-900 font-normal text-sm'>Feels Like {Math.round(weatherData?.main?.feels_like)}° </span>

                                    </div>
                                    <div className='ml-6 flex items-center justify-center'>
                                        <div>
                                            {conditionIcon &&
                                                <Image src={conditionIcon} alt="" width={50} height={50} />
                                            }
                                            <h1 className='font-semibold text-lg'>{weatherData?.weather[0]?.main}</h1>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='flex  lg:justify-center xl:justify-center md:justify-center items-center pt-12'>
                                <div className='flex justify-between lg:w-1/3 xl:w-1/3 md:w-1/2 w-full mx-2 '>

                                    <div className='bg-gray-500 rounded-xl p-2.5 bg-opacity-40 w-28'>
                                        <span className=" flex justify-center">
                                            <Image className='bg-white rounded-full ' src={'https://cdn-icons-png.flaticon.com/128/2489/2489117.png'} alt="" width={30} height={30} />

                                        </span>
                                        <div>
                                            <h1 className='flex justify-center'>Pressure</h1>
                                            <span className='flex justify-center'>{Math.round(weatherData?.main?.pressure)} mbar </span>
                                        </div>

                                    </div>
                                    <div className='bg-gray-500 rounded-xl p-2.5 bg-opacity-40 w-28'>
                                        <span className=" flex justify-center">
                                            <Image className='bg-white rounded-full ' src={'https://cdn-icons-png.flaticon.com/128/3059/3059291.png'} alt="" width={30} height={30} />

                                        </span>
                                        <div>
                                            <h1 className='flex justify-center'>Humidity</h1>
                                            <span className='flex justify-center'>{Math.round(weatherData?.main?.humidity)} % </span>
                                        </div>

                                    </div>
                                    <div className='bg-gray-500 rounded-xl p-2.5 bg-opacity-40 w-28'>
                                        <span className=" flex justify-center">
                                            <Image className='bg-white rounded-full ' src={'https://cdn-icons-png.flaticon.com/128/3164/3164820.png'} alt="" width={30} height={30} />

                                        </span>
                                        <div>
                                            <h1 className='flex justify-center'>Wind</h1>
                                            <span className='flex justify-center'>{weatherData?.wind?.speed} km/h </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        
                        </>
        </div>
    )
}
export default DisplayData