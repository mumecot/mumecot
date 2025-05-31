document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.popup-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const targetId = this.dataset.target;
      const popup = document.getElementById(targetId);
      popup.style.display = 'block';  // ポップアップ全体を表示
    });
  });

  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const popup = this.closest('.popup');
      if (popup) {
        popup.style.display = 'none';  // ポップアップ全体を非表示
      }
    });
  });
});