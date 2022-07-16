const hits = document.querySelectorAll('.hit');
const keysUsed = ['d', 'f', 'h', 'j'];

for (let hit of hits) {
    hit.addEventListener('click', function(){
        playHit(hit);
    })
}

function playHit(hit) {
    const hitAudio = document.getElementById(hit.dataset.piece);
    hitAudio.currentTime = 0;
    hitAudio.play();
    hit.classList.add('active');
    hitAudio.addEventListener('ended', function(){
        hit.classList.remove('active');
    })
}

document.addEventListener('keydown', function(e){
    const keyPush = e.key;
    keyPushIndex = keysUsed.indexOf(keyPush);
    playHit(hits[keyPushIndex]);
})