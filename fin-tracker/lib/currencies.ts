

export const Currencies =[
    {
        value: "RS",
        label: "₹ Rupees",
        locale: "en-IN"
    },
    {
        value: "USD",
        label: "$ Dollars",
        locale: "en-US"
    },
    {
        value: "EUR",
        label: "€ Euro",
        locale: "de-DE"
    },
];


export type Currency = (typeof Currencies)[0];