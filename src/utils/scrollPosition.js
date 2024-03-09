// Define default scroll positions
const DEFAULT_SCROLL_TOP_POSITION = 1800;
const DEFAULT_SCROLL_LEFT_POSITION = 100;

// Function to get scroll positions from configuration or use default values
export function getScrollPositions(config = {}) {
  return {
    scrollTop: config.scrollTop || DEFAULT_SCROLL_TOP_POSITION,
    scrollLeft: config.scrollLeft || DEFAULT_SCROLL_LEFT_POSITION,
  };
}
