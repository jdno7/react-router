import {useState} from "react"
import "./VendingMachine.css"
import Snack from "./Snack"

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <Snack name="Twix"/>
            <Snack name="Kit Kat"/>
            <Snack name="Starburst"/>
        </div>
    )
}

export default VendingMachine;