import React from "react";
import style from "./Navbar.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { GoRocket } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LuBatteryCharging } from "react-icons/lu";
export default function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.left_nav}>
        <nav>
          <IoIosArrowForward />
        </nav>
        <nav>Card Name</nav>
        <nav>
          <AiOutlineStar/>
        </nav>
        <nav>
          <PeopleAltIcon className={style.icon_person}/>
          <span>Workspace visible</span>
        </nav>
        <nav className={style.btn_board}>
          <CiViewBoard className={style.board_icon} />
          <button>Board</button>
        </nav>
      </div>
      <div className={style.right_nav}>
        <nav>
          <GoRocket />
          <span>Power_Ups</span>
        </nav>
        <nav>
          <LuBatteryCharging />
          <span>Automation</span>
        </nav>
        <nav>
          <MdFilterList />
          <span>Filter</span>
        </nav>
        <nav>
          <AccountCircleIcon
            sx={{
              marginRight: "-1.5rem",
              fontSize: "2rem",
            }}
          />
        </nav>
        <nav className={style.share_btn}>
          <BsPersonFillAdd className={style.person_icon} />
          <span style={{ color: "rgb(87, 101, 126)" }}>Share</span>
        </nav>
        <TfiLayoutMenuSeparated />
      </div>
    </div>
  );
}
