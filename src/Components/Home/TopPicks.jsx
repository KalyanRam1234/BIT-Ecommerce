import { ProductCard } from "../Common/ProductCard"

export const TopPicks=()=>{
    return (
        <div className="my-8">
            <div className="text-center text-4xl font-semibold text-[#FE660180] ">
                Top Picks
            </div>

            <div className="mt-8 ">
                <ProductCard products={[1,2,3,4,5,6,7,8,9]}/>
            </div>
        </div>
    )
}