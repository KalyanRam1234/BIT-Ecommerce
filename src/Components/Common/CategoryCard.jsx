export const CategoryCard=({category})=>{

    return (
        <div className="grid grid-cols-12 gap-6 w-[80%] mx-auto">

            {category.map((item)=>(

                <div className="col-span-3 ">
                <div className="h-[250px] bg-gray-200">

                </div>

                <div className="my-1 font-semibold text-xl text-[#FE6601] text-center">
                    Category
                </div>

                </div>
            ))}
            
        </div>
    )
}