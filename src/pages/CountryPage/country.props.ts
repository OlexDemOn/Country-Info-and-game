import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CoutryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}

export interface CountryItemProps {
    flags: {
        png: string
        svg: string
        alt: string
    }
    coatOfArms: {
        png: string
        svg: string
    }
    name: {
        common: string
        official: string
        nativeName: NativeName
    }
    status: string
    currencies: any
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: any
    borders: string[]
    area: number
    maps: {
        googleMaps: string
        openStreetMaps: string
    }
    population: number
    timezones: string
    continents: string[]
}

export interface NativeName {
    deu: {
        official: string
        common: string
    }
}

export interface Currencies {
    cur: {
        name: string
        symbol: string
    }
}
