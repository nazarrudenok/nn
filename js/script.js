function calculateTimeDifference() {
    const startDate = new Date("2023-10-12T00:00:00");
    const now = new Date();

    let diffInMilliseconds = now - startDate;

    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

    document.querySelector('.days').innerText = `${years}\n${months}\n${days}\n${minutes}`;
}

calculateTimeDifference();
