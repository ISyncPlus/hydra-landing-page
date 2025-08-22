import vector_7 from '../vectors/Vector 7.svg'
import vector_8 from '../vectors/Vector 8.svg'

export default function HeroVectors() {
  return (
    <div className="relative -z-10">
        <img src={vector_7} alt="v-7" className="absolute top-60 -right-10 -z-10" />
        <img src={vector_8} alt="v-8" className='absolute top-130 -right-10 -z-10'/>
    </div>
  );
}