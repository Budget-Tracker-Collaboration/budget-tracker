import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

export default function EditExpense() {
    return (
        <div className="profileDiv">
            <form>
            <div>
                <label className="incomeLabel">Edit Expense</label>
            </div>  
            <div className="editIncomeDiv">
                <div className="paddingDiv">
                    <div className="expenseInputs">
                        <input 
                        type="text" defaultValue={"previous expense"}
                        />
                        <input 
                        type="number"
                        />
                        <input 
                        type="date"
                        />
                    </div> 
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