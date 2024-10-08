const words = [
    "apple", "banana", "cherry", "date", "elderberry", 
    "fig", "grape", "honeydew", "kiwi", "lemon", 
    "mango", "nectarine", "orange", "papaya", "quince","harami","kutta","ayeU"
];

document.getElementById('generateBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    document.getElementById('wordDisplay').textContent = words[randomIndex];
});
