export const getTextContentFromElements = (elements) =>
  Array.from(elements).map((element) => {
    const textContent = element.textContent
      .trim()
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
    return textContent || 'N/A'
  })
