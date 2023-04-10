import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export interface MenuProps {
    name: string,
    link: string,
    isActive: boolean,
    children?: Children[];
}

export interface Children {
    name: string,
    link: string,
    isActive: boolean,
}