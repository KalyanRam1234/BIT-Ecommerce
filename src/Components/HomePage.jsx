import { Navbar } from "./Home/Navbar";
import { Category } from "./Home/Category";
import Highlight from "./Home/Highlight";
import { TopPicks } from "./Home/TopPicks";
import { AllCategories } from "./Home/AllCategories";
function HomePage(){

    return (
        <>
            <Navbar/>
            <Category/>
            <Highlight/>
            <TopPicks/>
            <AllCategories/>
        </>
    )
}

export default HomePage;