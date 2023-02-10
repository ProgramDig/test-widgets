export type DropDownInfo = {
    label: string;
    title: string;
    dropDown: any;
    dropDownActive: boolean;
}

export type Statistic = {
    background: string
    icon: any
    title: string
    value: number
}

export type Label = {
    title: string
    color: string
}

export type ChartData = {
    title: string
    value: number
    color: string
}

export type Chart = {
    chartData: ChartData[],
    title: string,
    labels: Label[]
}

export type chartSliceData = {
    mainTitle: string,
    chartData: chart[],
    title: string,
    percentage: string
}

export type chart = {
    title: string,
    label: string,
    value: number,
    color: string
}