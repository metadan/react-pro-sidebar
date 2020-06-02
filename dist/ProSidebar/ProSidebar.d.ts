import React from 'react';
import '../scss/styles.scss';
export interface Props {
    collapsed?: boolean;
    rtl?: boolean;
    width?: string | number;
    image?: string;
    className?: string;
    children?: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
