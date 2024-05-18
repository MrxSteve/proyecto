import "./styles.css"
import React from "react";
import type { CategoriesType, ItemType, valueDice } from "../../../../../../interfaces";
import { LOWER_SECTION_OPTIONS } from "./helpers";
import { EItemType } from "../../../../../../utils/constants";
//import { EItemType } from "../../../../../../utils/constants";

interface ItemProps {
    label?: string; //opcional
    size?: number; //opcional
    type: ItemType; //requerido
    value: valueDice | CategoriesType; //requerido
}

const Item = ({
    label = "",
    size = 50,
    type = EItemType.UPPER_SECTION,
    value = 1,
}: ItemProps) => (
    <div
    className={`board-item ${type.toLowerCase()} ${
        type === EItemType.UPPER_SECTION ? `dice-${value}` : ""
      }`}       
    style={{width: size, height: size}} // le pasamos el valor del size arriba
    title={label || value.toString()}
    >
        {type === EItemType.LOWER_SECTION && 
        LOWER_SECTION_OPTIONS [value as CategoriesType]}
    </div>
    );

export default React.memo(Item);