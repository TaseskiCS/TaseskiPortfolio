export default function InfoCard(props){
    return (
        <div className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            
            <img src={props.img} className=" mx-auto" alt={props.name}></img>
            <div className="mt-2 text-center">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <a className="flex justify-center"href = {props.link} rel="noreferrer" target="_blank"><p className="text-sm underline underline-offset-1 text-blue-600 font-light md:text-xl">{props.linkTitle}</p></a>
                {/* <p className="font-light text-gray-400">{props.desc}</p>

                <p className="font-light text-gray-400 text-xs md:text-xl">{props.date}</p> */}
            </div>
        </div>
    )
}
