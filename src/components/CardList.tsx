import "./Component.css"
import {
    MdOutlineDeleteOutline,
    ImCheckboxUnchecked,
    ImCheckboxChecked
} from 'react-icons/all';
import { useState } from "react";

export default function CardList() {

    const [checked, setChecked] = useState(false)

    function Check() {
        setChecked(!checked)
    }

    return <>
        <div className="card">
            <ImCheckboxUnchecked
                id="icon-left"
                className={checked ? "float" : "float hidden"}
                onClick={Check} />
            <ImCheckboxChecked
                id="icon-left2"
                className={!checked ? "float" : "float hidden"}
                onClick={Check} />
            <span id="center" className={checked ? "float" : "float overstrike"}>Hello</span>
            <MdOutlineDeleteOutline id="icon-right" className="float" />
        </div>
    </>
};