
export const getDate = () => {
    const ourDate = new Date
    const date = new Date(ourDate.getYear(), ourDate.getMonth(), ourDate.getDay());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'short' });
    return `${ourDate.getDay()} ${month}`
}

