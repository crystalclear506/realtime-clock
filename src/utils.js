export const getDayById = (id) => {
    const weekday = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[id];
};
export const getMonthById = (id) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return months[id];
};