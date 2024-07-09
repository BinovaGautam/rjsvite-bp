export function groupByType(links: any) {
  return links.reduce((acc: any, link: any) => {
    // Check if the type already exists in the accumulator
    if (!acc[link.type]) {
      // If not, create a new array for this type
      acc[link.type] = [];
    }
    // Add the current link to the array for its type 1
    acc[link.type].push(link);
    return acc;
  }, {});
}
