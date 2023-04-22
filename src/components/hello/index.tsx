import React from 'react';

import cssClasses from './styles.module.css';
import scssClasses from './styles.module.scss';
import {SiderProps} from "antd/lib";

export interface HelloProps extends SiderProps {
    name: string;
    firstName?: string;
}

const Hello: React.FC<HelloProps> = (props) => (
    <div className={scssClasses.helloScss}>
        <p className={cssClasses.helloCss}>Hello, {props.name}</p>
    </div>
);

export default Hello;
