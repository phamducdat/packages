import {ReactNode} from "react";

export interface CustomMenuItemType {
    danger?: boolean,

    disabled?: boolean,
    icon?: ReactNode,

    path?: string,
    label?: string,

    title?: string

}