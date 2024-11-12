// State variables to store user choices
let selectedMood = '';
let selectedGenre = '';
let selectedCompanion = '';

// Function to enter the app and show the mood screen
function enterApp() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('mood-screen').classList.remove('hidden');
}

// Function to select mood and move to companion selection
function selectMood(mood) {
    selectedMood = mood;
    document.getElementById('mood-screen').classList.add('hidden');
    document.getElementById('who-screen').classList.remove('hidden');
}

// Function to select companion and move to genre selection
function selectCompanion(companion) {
    selectedCompanion = companion;
    document.getElementById('who-screen').classList.add('hidden');
    document.getElementById('genre-screen').classList.remove('hidden');
}

// Function to select genre and show the loading screen
function selectGenre(genre) {
    selectedGenre = genre;
    document.getElementById('genre-screen').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    // 로딩 바 애니메이션과 결과 표시 로직
    let progress = 0;
    const loadingBar = document.querySelector('.loading-bar');
    const loadingPercentage = document.getElementById('loading-percentage');

    function updateLoadingBar() {
        if (progress <= 100) {
            loadingBar.style.width = `${progress}%`;
            loadingPercentage.textContent = `${progress}%`;
            progress++;
            setTimeout(updateLoadingBar, 20);
        } else {
            setTimeout(showResult, 500);
        }
    }

    updateLoadingBar();
}

// Function to display the result
function showResult() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

// Sample song database with popular Filipino songs
const songDatabase = {
    pop: {
        happy: ["Ben&Ben - Leaves", "Moira Dela Torre - Tagpuan"],
        sad: ["KZ Tandingan - Mahal Ko o Mahal Ako", "Arthur Nery - Pagsamo"],
        excited: ["Sarah Geronimo - Tala", "Darren Espanto - Dying Inside"],
        relaxed: ["December Avenue - Sa Ngalan ng Pag-ibig", "Up Dharma Down - Tadhana"],
        nostalgic: ["Eraserheads - Ang Huling El Bimbo", "Parokya ni Edgar - Harana"]
    },
    rock: {
        happy: ["IV of Spades - Mundo", "Eraserheads - With a Smile"],
        sad: ["Eraserheads - Ang Huling El Bimbo", "Rivermaya - 214"],
        excited: ["Wolfgang - Halik ni Hudas", "Slapshock - Agent Orange"],
        relaxed: ["Juan Karlos - Buwan", "Eraserheads - Spoliarium"],
        nostalgic: ["Rivermaya - Awit ng Kabataan", "The Dawn - Salamat"]
    },
    ballad: {
        happy: ["Regine Velasquez - You Are My Song", "Aiza Seguerra - Pagdating ng Panahon"],
        sad: ["Gary Valenciano - Sana Maulit Muli", "Jaya - Wala Na Bang Pag-ibig"],
        excited: ["Morissette - Gusto Ko Nang Bumitaw", "Jed Madela - The Past"],
        relaxed: ["Zack Tabudlo - Nangangamba", "Moira Dela Torre - Paubaya"],
        nostalgic: ["Basil Valdez - Ngayon at Kailanman", "Martin Nievera - Be My Lady"]
    },
    hiphop: {
        happy: ["Gloc-9 - Upuan", "Shanti Dope - Amatz"],
        sad: ["IV of Spades - Bawat Kaluluwa", "Lo Ki - Litrato"],
        excited: ["Andrew E. - Humanap Ka ng Panget", "Shanti Dope - Nadarang"],
        relaxed: ["Al James - Pahinga", "Kiyo - Ikaw Lang"],
        nostalgic: ["Francis M - Kaleidoscope World", "Andrew E. - Binibini"]
    }
};

    // Select a random song based on mood and genre
    const songs = songDatabase[selectedGenre][selectedMood];
    const randomIndex = Math.floor(Math.random() * songs.length);
    const recommendedSong = songs[randomIndex];

    // Display the recommended song
    document.getElementById('result').textContent = `${recommendedSong}`;
}
