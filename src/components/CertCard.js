export default function CertCard(props){
    return (
        <a href={props.img}>
        <div className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            
            <img src={props.img} className="w-auto h-24 mx-auto" alt={props.name}></img>
            <div className="mt-2 text-center">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <a href = {props.link} rel="noreferrer" target="_blank"><p className="underline underline-offset-1 font-light md:text-lg">{props.issued}</p></a>
                <p className="font-light text-gray-400">{props.desc}</p>

                <p className="font-light text-gray-400">{props.date}</p>
            </div>
        </div>
        </a>
    )
}
