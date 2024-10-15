function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function getElementVisibilityPercentage(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Tính toán diện tích phần tử nằm trong viewport
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
  );
  const visibleWidth = Math.max(
    0,
    Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)
  );
  const visibleArea = visibleHeight * visibleWidth;

  // Tính toán diện tích tổng thể của phần tử
  const elementArea = rect.width * rect.height;

  // Tính tỷ lệ phần trăm diện tích phần tử hiển thị trong viewport
  const visibilityPercentage = (visibleArea / elementArea) * 100;

  return Math.round(visibilityPercentage);
}

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
}
