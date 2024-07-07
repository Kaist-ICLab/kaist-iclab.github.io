
export const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 2000 + 1 }, (_, index) => currentYear - index);
}

export const formatAuthors = (authors: string[]): string => {
    if (authors.length === 1) {
        return authors[0];
    }
    else if (authors.length === 2) {
        return authors.join(" and ");
    } else {
        return authors.slice(0, authors.length - 1).join(", ") + " and " + authors[authors.length - 1];
    }

}