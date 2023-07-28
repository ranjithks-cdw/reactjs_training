export const transformGuaranteeMessage = guarantee => {
    return guarantee === 1 ? `1 YEAR GUARANTEE` : `${guarantee} YEARS GUARANTEE`;
};

export const transformIndianRupee = price => {
    price = parseInt(price);
    return price.toLocaleString('en-IN');
};