import React from 'react';
export interface Props {
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
