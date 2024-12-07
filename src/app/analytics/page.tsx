import React from "react";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";

export default function Analytics() {
    return (
        <div className="profileDiv">

                    <Link href={"/profile"}>
                        <MdOutlineCancel size={24} className="hoverRemoveBtn"/>
                    </Link>
        </div>
    )
}