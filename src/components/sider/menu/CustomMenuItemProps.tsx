import {ReactNode} from "react";

export interface CustomMenuItemProps{
    danger?: boolean,

    disabled?: boolean,
    icon?: ReactNode,

    path?: string,
    label?: string,

    title?: string

}