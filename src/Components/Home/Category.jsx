export const Category=()=>{
    const arr=["Today's Deal", "Grocery", "Fashion", "Electronics", "Home & Furniture", "Appliances", "Travel", "Beauty"];

    return (
        <>
            <div className="flex w-full justify-center my-2" >
                {arr.map((item)=>(
                    <div className="font-semibold mr-6 hover:text-lg">
                        {item}
                    </div>
                ))}
            </div>
        </>
    )
}