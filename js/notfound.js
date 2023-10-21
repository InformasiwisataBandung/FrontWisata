document.addEventListener('mousemove', function (event) {
  const torch = document.querySelector('.torch');
  torch.style.top = event.clientY - 1 + 'px';
  torch.style.left = event.clientX - 1 + 'px';
});
