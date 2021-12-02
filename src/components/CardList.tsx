import "./Component.css"
import {
    MdOutlineDeleteOutline,
    ImCheckboxUnchecked,
    ImCheckboxChecked
} from 'react-icons/all';

export default function CardList() {

    return <>
        <div className="card">
            <ImCheckboxUnchecked id="icon-left" className="float" />
            <ImCheckboxChecked className="float" />
            <span id="center" className="float">Hello</span>
            <MdOutlineDeleteOutline id="icon-right" className="float" />
        </div>
        <div className="card">

            <ImCheckboxChecked className="float" />

        </div>
    </>
};