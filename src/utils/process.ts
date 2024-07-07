
export const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 2000 + 1 }, (_, index) => currentYear - index);
}