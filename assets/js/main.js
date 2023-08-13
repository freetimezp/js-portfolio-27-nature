function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.getElementById('trailer-video');
    video.pause();
    trailer.classList.toggle('active');
}