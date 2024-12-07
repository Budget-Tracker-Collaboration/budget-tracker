"use client";
import React from "react";
import {BiSolidEditAlt, BiAddToQueue} from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import Link from "next/link";
import TheMonth from "./dateFunction";



export default function Profile() {
    return (
        <div className="profileDiv">
            <div className="incomeDiv">
                <div className="currentIncomeDiv">
                    <h2 className="incomeLabel">Income</h2>
                </div>
                <div className="incomeAmountDiv">
                    <div className="incomeNumber">
                        <h2 className="incomeAmount">$5000</h2>
                    </div>
                    <div className="changeIncomeBtn">
                        <Link href={"/income"}>
                            <BiSolidEditAlt size={24} className="hoverBtn" title="change income"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="expenssDiv">
                <div className="expenseListCont">
                    <div className="expenseListDiv">
                        <h2 className="incomeLabel"> <TheMonth/> Expeness</h2>
                        <ul>
                                <li className="expenseItem">
                                    <p>
                                        Morgage <span className="expColor">$2200</span>
                                    </p>
                                    <div className="expenseEditBtns">
                                       <Link href={"/editExpense"}>
                                            <BiSolidEditAlt size={20} className="hoverBtn" title="edit"/>
                                       </Link>
                                        <IoIosRemoveCircle size={20} className="hoverRemoveBtn" title="delete"/>
                                    </div>
                                </li>
                        </ul>
                    </div>
                    <div className="addExpenseDiv">
                        <Link href={"/expense"}>
                        <BiAddToQueue size={30} className="hoverBtn" title="add expense"/>
                        </Link>
                        <Link href={"/analytics"}>
                            <MdOutlineAnalytics size={30} className="hoverBtn" title="analytics"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}