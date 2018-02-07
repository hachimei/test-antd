import * as React from 'react';
import * as classNames from "classnames";
import { ButtonSize } from "./button";

export interface ButtonGroupProps {
    size?: ButtonSize;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
}

export const ButtonGroup: React.SFC<ButtonGroupProps> = (props) => {
    const { prefixCls = 'ant-btn-group', size, className, ...others } = props;

// large => lg
// small => sm
    let sizeCls = '';
    switch(size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
            break;
        default:
            break;
    }

    const classes = classNames(prefixCls, {
        [`${prefixCls}-${sizeCls}`]: sizeCls,
    }, className);

    return <div {...others} className={classes}></div>;
};

export default ButtonGroup;