import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Animate from "rc-animate";
import Icon from "../icon";
import * as className from "classnames";

function noop(){ }

export interface Alertprops {
    type?: 'success' | 'info' | 'warning' | 'error';
    closable?: boolean;
    closeText?: React.ReactNode;
    message: React.ReactNode;
    description?: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLAnchorElement>;
    showIcon?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    banner?: boolean;
}