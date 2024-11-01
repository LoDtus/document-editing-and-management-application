export function getCurrentTime() {
    const timestamp = new Date();
    return timestamp.toISOString();
}
export function convertTime(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const result = `${day}/${month}/${year}`;
    return result;
}
export function getSubject(value) {
    let temp = document.createElement('div');
    temp.innerHTML = value;

    let subject = temp.querySelector("h1").textContent.trim();
    subject = (subject === '') ? 'Untitled' : subject;

    temp.innerHTML = '';
    temp = null;
    return subject;
}