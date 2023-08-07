export const minuteConverter = time => {
    const minute = Math.floor(time % 3600 / 60).toString().padStart(2,'0');
    const seconds = Math.floor(time % 60).toString().padStart(2,'0');
    return `${minute}:${seconds}`;
};