const LocBox = () => {
    return (
    <div className="flex flex-col w-60 h-72 items-start justify-center bg-white rounded-xl overflow-hidden p-3 shadow-lg">
        <div className="relative w-full rounded-xl overflow-hidden aspect-[240/288] ">
            <img src="/assets/images/MaqamChahid.png" alt="Image not found" className="object-cover fill" />
        </div>
        <h3 className="font-semibold text-lg">Makam Echahid 1</h3>
        <p className="font-light">4.5⭐(1455)</p>
        <h5 className="text-xs text-text-gray">Site Historique</h5>
        <p className="font-light">70 visites</p>
    </div>
    )
};

export default LocBox;
