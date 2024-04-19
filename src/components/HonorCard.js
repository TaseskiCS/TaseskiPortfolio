
export default function HonorCard(props){
    return (
        <div className="lg:w-60 sm:w-40 md:w-40 bg-dark-100 rounded-md py-4 px-4">
            <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> 
            <div className="mt-2 overflow-y-auto">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <a href = {props.link} rel="noreferrer" target="_blank"><p className="underline underline-offset-1 font-light md:text-lg">{props.issued}</p></a>
                <p className="font-light text-gray-400">{props.desc}</p>
            </div>
        </div>
    )
}
