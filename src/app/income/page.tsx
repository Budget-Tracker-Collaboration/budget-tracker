import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

export default function EditIncome() {
    return (
        <div className="profileDiv">
            <form>
            <div>
                <label className="incomeLabel">Net Income</label>
            </div>  
            <div className="editIncomeDiv">
                <div className="paddingDiv">
                    <input 
                        type="number" placeholder="Income after tax..."
                    />
                </div>
                <div className="paddingDiv">
                    <IoIosLogOut size={24} className="hoverBtn"/>
                </div>
                <div className="paddingDiv">
                    <Link href={"/profile"}>
                        <MdOutlineCancel size={24} className="hoverRemoveBtn"/>
                    </Link>
                </div>
            </div> 
            </form>
        </div>
    )
}