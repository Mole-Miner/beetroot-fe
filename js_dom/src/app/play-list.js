const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    }
];

const ol = document.createElement('ol');
playList.forEach((playItem) => {
    const li = document.createElement('li');
    li.textContent = `Song: ${playItem.song} Author: ${playItem.author}`;
    ol.appendChild(li);
});
document.body.appendChild(ol);
