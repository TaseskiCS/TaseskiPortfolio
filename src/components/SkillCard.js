export default function SkillCard(props){
    return (
        <div className="lg:w-8/12 sm:w-8/12 md:w-8/12 xl:w-8/12 h-32  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col lg:ml-10">
            <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
            </div>
        </div>
    )
}
