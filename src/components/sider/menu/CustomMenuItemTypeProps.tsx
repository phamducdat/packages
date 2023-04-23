import {ReactNode} from "react";

export interface CustomMenuItemTypeProps {
    danger?: boolean,

    disabled?: boolean,
    icon?: ReactNode,

    path?: string,
    label?: string,

    title?: string

}