const LocBox = (props) => {
    return (
    <div className="flex flex-col w-60 h-72 items-start justify-center bg-white rounded-xl overflow-hidden p-3 shadow-lg">
        <div className="relative w-full rounded-xl overflow-hidden aspect-[240/288] ">
            <img src={props.chemin} alt="Image not found" className="object-cover fill" />
        </div>
        <h3 className="font-semibold text-lg">{props.nom}</h3>
        <p className="font-light">4.5⭐(1455)</p>
        <h5 className="text-xs text-text-gray">{props.categorieNom}</h5>
        <p className="font-light">{props.nbVisites}</p>
    </div>
    )
};

export default LocBox;
