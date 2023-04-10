import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    link: string;
}