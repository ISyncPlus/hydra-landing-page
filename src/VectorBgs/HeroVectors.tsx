import vector_1 from '../vectors/Vector 1.svg'
import vector_2 from '../vectors/Vector 2.svg'
import vector_3 from '../vectors/Vector 3.svg'
import vector_4 from '../vectors/Vector 4.svg'

export default function HeroVectors() {
  return (
    <div className="relative -z-10">
        <img src={vector_1} alt="v-1" className="absolute -top-20 lg:-top-10 -right-5 lg:-right-10 w-90 md:w-100 z-10" />
        <img src={vector_2} alt="v-2" className='absolute -top-30 lg:-top-50 w-75 lg:w-90 right-15 md:right-20 -z-10'/>
        <img src={vector_3} alt="v-3" className='absolute w-100 lg:w-160 top-35 lg:top-55 right-20 md:-right-20 -z-10'/>

        <img src={vector_4} alt="v-4" className='absolute w-53 top-15 -left-10 -z-10 invisible md:visible'/>
    </div>
  );
}