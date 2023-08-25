export const ProductCard=({products})=>{

    return (
        <div className="grid grid-cols-12 gap-2 w-[80%] mx-auto">

            {products.map((item)=>(

                <div className="col-span-4 ">
                <div className="h-[350px] bg-gray-200">

                </div>

                <div className="my-1 font-semibold text-xl text-[#FE6601]">
                    Product
                </div>

                <div className="">
                    $99
                </div>
                </div>
            ))}
            
        </div>
    )
}