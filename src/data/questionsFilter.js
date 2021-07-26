
const questionFilter = (arrData, selectedCat) => {
    let dataFiltered = arrData.filter((el) => selectedCat.includes(el.category));
    dataFiltered.sort((a, b) => a.level - b.level);

    return dataFiltered;
};

export default questionFilter;