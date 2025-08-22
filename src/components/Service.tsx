import Button from "./Button";
interface serviceProps {
    image: string,
    altText: string,
    title: string,
    content: string,
    buttonText: string
}
export default function Service({ image, altText, title, content, buttonText }: serviceProps) {
  return (
     <figure className="py-5 px-10 bg-gradient-to-b from-[#211E2E] via-[#3A3456] to-[#211E2E]  rounded-4xl flex flex-col items-center"> 
        <img src={image} alt={altText} className=" border-5 border-[#211E2E] rounded-full"/>
            <h1 className="border-b-1 py-4 border-[#C0B7E8] font-bold text-2xl">{title}</h1>

        <p className="mt-7 mb-9">{content}</p>

        <Button variant='primary'>
            {buttonText}
        </Button>
    </figure>
  );
}