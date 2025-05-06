import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const ReactInvoiceStats = dynamic(() => import('react-apexcharts'), { ssr: false });

interface spark3 {
    options?: ApexOptions,
    width?: number;
    height?: string | number,
    series?: ApexOptions['series'],
    label?: XAxisAnnotations
    color?: string | string[] | (string & string[]) | undefined
    endingShape?: string
    enabled?: boolean;
}

export class InvoiceStats extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                data: [400, 540, 580, 690]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#00ffbe', '#ebf748', '#48f768', '#00e3d2'],
                plotOptions: {
                    bar: {
                        borderRadius: 1,
                        horizontal: true,
                        barHeight: '40%',
                        dataLabels: {
                            position: 'top'
                        },
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ["New", "Completed", "Pending", "Ongoing"],
                },
            }

        };
    }

    render() {
        return (
            <ReactInvoiceStats options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={210} />

        );
    }
}

//History
interface historydata {
    id: number;
    src1: string;
    src2: string;
    class: string;
    color1: string;
    name: string;
    cell: string;
    coin: string;
    date: string;
    amount: string;
    text1: string;
    text2: string;
    color2: string;
}
export const Historydata: historydata[] = [
    { id: 1, src1: "../../../assets/images/faces/10.jpg", src2: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg", class: 'up', color1: 'success', name: 'Json Taylor', cell: '1242232401', coin: 'Bitcoin', date: '	24,Jul 2023 - 4:23PM', amount: '+0.041', text1: 'Texas Steel', text2: 'Success', color2: 'success' },
    { id: 2, src1: "../../../assets/images/faces/5.jpg", src2: "../../../assets/images/crypto-currencies/regular/Dash.svg", class: 'down', color1: 'danger', name: 'Samantha Taylor', cell: '1242232402', coin: 'Dashcoin', date: '20,Jul 2023 - 12:47PM', amount: '-0.284', text1: 'Stuart Little', text2: 'Pending', color2: 'warning' },
    { id: 3, src1: "../../../assets/images/faces/12.jpg", src2: "../../../assets/images/crypto-currencies/regular/Euro.svg", class: 'up', color1: 'success', name: 'Brian Jhonson', cell: '1242232403', coin: 'Euro', date: '14,Aug 2023 - 10:25AM', amount: '	+0.943', text1: 'Melissa Smith', text2: 'Success', color2: 'success' },
    { id: 4, src1: "../../../assets/images/faces/15.jpg", src2: "../../../assets/images/crypto-currencies/regular/Ethereum.svg", class: 'up', color1: 'success', name: 'Liam Anderson', cell: '1242232404', coin: 'Etherium', date: '10,Jul 2023 - 4:14PM', amount: '+0.582', text1: 'Alexander Clark', text2: 'Failed', color2: 'danger' },
    { id: 5, src1: "../../../assets/images/faces/4.jpg", src2: "../../../assets/images/crypto-currencies/regular/Golem.svg", class: 'up', color1: 'success', name: 'Isabella Brown', cell: '1242232405', coin: 'Golem', date: '19,Aug 2023 - 11:35AM', amount: '+0.290', text1: 'Elijah Davis', text2: 'Success', color2: 'success' },
    { id: 6, src1: "../../../assets/images/faces/7.jpg", src2: "../../../assets/images/crypto-currencies/regular/litecoin.svg", class: 'down', color1: 'danger', name: 'Sophia Lee', cell: '1242232406', coin: 'Litecoin', date: '12,Jun 2023 - 2:45PM', amount: '-0.147', text1: 'Harper Taylor', text2: 'Success', color2: 'success' },
    { id: 7, src1: "../../../assets/images/faces/6.jpg", src2: "../../../assets/images/crypto-currencies/regular/Ripple.svg", class: 'up', color1: 'success', name: 'Evelyn Clark', cell: '1242232407', coin: 'Ripple', date: '27,Jul 2023 - 10:18AM', amount: '+1.05', text1: 'William Brown', text2: 'Success', color2: 'success' },
    { id: 8, src1: "../../../assets/images/faces/11.jpg", src2: "../../../assets/images/crypto-currencies/regular/monero.svg", class: 'up', color1: 'success', name: 'Liam Anderson', cell: '1242232408', coin: 'Monero', date: '16,Aug 2023 - 9:25PM', amount: '+0.625', text1: 'Amelia Davis', text2: 'Inprogress', color2: 'info' },
    { id: 9, src1: "../../../assets/images/faces/2.jpg", src2: "../../../assets/images/crypto-currencies/regular/Zcash.svg", class: 'down', color1: 'danger', name: 'Harper Taylor', cell: '1242232409', coin: 'Zcash', date: '24,Jul 2023 - 12:47PM', amount: '-0.293', text1: 'Benjamin Martinez', text2: 'Inprogress', color2: 'info' },
    { id: 10, src1: "../../../assets/images/faces/16.jpg", src2: "../../../assets/images/crypto-currencies/regular/Decred.svg", class: 'up', color1: 'success', name: 'Lucas Taylor', cell: '1242232410', coin: 'Decred', date: '24,Jul 2023 - 12:47PM', amount: '+0.893', text1: 'Mia Wilson', text2: 'Success', color2: 'success' },
];

