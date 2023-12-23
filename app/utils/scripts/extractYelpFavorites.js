// NOTE: Copy the common functions from common.js and below code to the browser console, remove the export keyword
import { getTextContentFromElements } from './common'

const yelpFavoritesJSONData = (() => {
  const bizNameElements = document.querySelectorAll('.biz-name')
  const locationElements = document.querySelectorAll('.addr-city')
  const categoryElements = document.querySelectorAll('.category-str-list')
  const infoContentElements = document.querySelectorAll('.js-info-content')

  const bizNames = getTextContentFromElements(bizNameElements)
  const locations = getTextContentFromElements(locationElements)
  const categories = getTextContentFromElements(categoryElements)
  const infoContents = getTextContentFromElements(infoContentElements).slice(2)

  return bizNames.map((bizName, index) => ({
    bizName,
    location: locations[index],
    categories: categories[index],
    infoContent: infoContents[index],
  }))
})()

const formatYelpFavoritesToText = (favoritesData) => {
  return favoritesData.map((favorite, index) => {
    const { bizName, location, categories, infoContent } = favorite
    const restaurantName = `RestaurantName: ${bizName}`
    const formattedTypeOfPlace = categories
      ? `CuisineAndDishes: ${categories.trim().replace(/\s+/g, ' ')}`
      : 'N/A'
    const myNotes = infoContent ? `MyNotes: ${infoContent}` : 'N/A'

    return `${
      index + 1
    }. ${restaurantName} ; RestaurantLocation: ${location} ; ${formattedTypeOfPlace} ; ${myNotes}`
  })
}

const myYelpFavoritesPrompt = formatYelpFavoritesToText(yelpFavoritesJSONData)
const output = myYelpFavoritesPrompt.join('\n')
console.log(output)
