"use client";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import { createExpense } from "@/actions";
import { useRef } from "react";

export default function AddExpense() {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <div className="profileDiv">
            <form action={async (FormData) => {
                await createExpense(FormData);
                ref.current?.reset();
            }} ref={ref}>
            <div>
                <label className="incomeLabel">Expense</label>
            </div>  
            <div className="editIncomeDiv">
                <div className="paddingDiv">
                    <div className="expenseInputs">
                        <input 
                        type="text" name="expenseName" placeholder="Name of expense..."
                        />
                        <input 
                        type="number" name="expenseAmount" placeholder="$ Amount per month..."
                        />
                        <input 
                        type="number" name="expenseMonth" placeholder="Month..."
                        />
                    </div> 
                </div>
                <button className="paddingDiv" type="submit">
                    <IoIosLogOut size={24} className="hoverBtn"/>
                </button>
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