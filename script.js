const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb-img');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', function() {
    mainImage.src = this.src;
    
    thumbs.forEach(t => t.style.borderColor = 'transparent');
    this.style.borderColor = '#1f6fb2;';
  });
});