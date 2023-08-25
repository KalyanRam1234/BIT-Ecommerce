import { CategoryCard } from "../Common/CategoryCard"
export const AllCategories=()=>{

    return (
        <div>
           <div className="my-8">
            <div className="text-center text-4xl font-semibold text-[#8F00FF]">
                All Categories
            </div>

            <div className="mt-8 ">
                <CategoryCard category={[1,2,3,4,5,6,7,8,9]}/>
            </div>
            </div>
        </div>
    )
}
