import { Header } from "../Sheared/Header"
import { LeftSideNavbar } from "../Sheared/LeftSideNavbar"
import { MiddleNews } from "../Sheared/MiddleNews"
import { Navbar } from "../Sheared/Navbar"
import { RightSideNavbar } from "../Sheared/RightSideNavbar"
import { BreakingNews } from "./BreakingNews"


export const Home = () => {
  return ( 
    <div className="max-w-6xl mx-auto">
      <Header variant="white"></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="col-span-2 ">
          <MiddleNews></MiddleNews>
        </div>
        <div className="">
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div> 
  )
}
