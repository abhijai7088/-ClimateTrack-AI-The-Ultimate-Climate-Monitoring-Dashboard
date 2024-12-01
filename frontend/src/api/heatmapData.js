// Fetch heatmap data
export const fetchHeatmapData = async () => {
  try {
    const response = await fetch('/api/heatmap-data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching heatmap data:', error);
    return null;
  }
};
