import { OpenAIModelParams } from './types/openai'

export const recommendationsFromYelp = `1. RestaurantName: Sol Food ; RestaurantLocation: San Rafael, CA ; CuisineAndDishes: Latin American, Puerto Rican ; MyNotes: Great service, lovely Puerto Rican food
2. RestaurantName: Sorella Caffe ; RestaurantLocation: Fairfax, CA ; CuisineAndDishes: Italian, Wine Bars ; MyNotes: beautiful interior
3. RestaurantName: Smitten Ice Cream ; RestaurantLocation: San Jose, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt ; MyNotes: N/A
4. RestaurantName: Bar Sprezzatura ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bars, Italian ; MyNotes: N/A
5. RestaurantName: Coffee Bodega ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: nice place to sit and have good coffee
6. RestaurantName: KAIYŌ Rooftop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Peruvian, Cocktail Bars ; MyNotes: N/A
7. RestaurantName: Firehouse Coffee & Tea ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
8. RestaurantName: Avatar’s Restaurant ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Indian, Asian Fusion ; MyNotes: Mexican Indian Fusion Place. Loved the New Zealand Curry. Ashok is very passionate. They use only Olive Oil
9. RestaurantName: Daytrip ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Wine Bars ; MyNotes: Blackcod with Skordalia
10. RestaurantName: Quail’s Nest Café at Filoli ; RestaurantLocation: Redwood City, CA ; CuisineAndDishes: Cafes ; MyNotes: N/A
11. RestaurantName: Munch India ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Food Delivery Services ; MyNotes: N/A
12. RestaurantName: Highwire Coffee Roasters ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
13. RestaurantName: Westbrae Biergarten ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Beer Gardens, Brazilian ; MyNotes: N/A
14. RestaurantName: Standard Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Cafes ; MyNotes: If you are vegan this is a lovely delicious place. Very unique and creative
15. RestaurantName: La Noisette Sweets ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: Beautiful looking French sweets
16. RestaurantName: Imm Thai Street Food ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Thai ; MyNotes: loved the food. delicious and inexpensive sweet roti
17. RestaurantName: Copra ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
18. RestaurantName: Ollei ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Korean, Comfort Food ; MyNotes: For late night Korean food
19. RestaurantName: KAIYŌ Cow Hollow ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Japanese, Peruvian ; MyNotes: Loved the food so good, Tiradito was delicious
20. RestaurantName: Sistory Thai Kitchen ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Thai, Breakfast & Brunch ; MyNotes: N/A
21. RestaurantName: Riviera Common Grounds Coffee ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Unique innovative coffee shop. Loved the vibe and the Aussie bites
22. RestaurantName: Arti Cafe Kelseyville ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
23. RestaurantName: Studebakers Coffee House ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea, Delis ; MyNotes: great sandwich and lovely atmosphere
24. RestaurantName: Angeline’s Louisiana Kitchen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Cajun/Creole, Southern ; MyNotes: Excellent Louisiana cuisine. Loved the Chicory mixed coffee too it has a different feel
25. RestaurantName: Asian Pearl Kitchen ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Dim Sum, Seafood ; MyNotes: Unique friendly Chinese place. Excellent sweet and sour soup
26. RestaurantName: Le Dessert Lab ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Desserts ; MyNotes: N/A
27. RestaurantName: Paradita Eatery ; RestaurantLocation: Emeryville, CA ; CuisineAndDishes: Peruvian, Salad ; MyNotes: Food in general was good. Alfajores and Pisco sour was great!
28. RestaurantName: California Fish Grill - El Cerrito ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Seafood, Fish & Chips ; MyNotes: it's a chain. don't expect too much. But it surprised me with great fresh tasting fish..tasted great. I had Cajun salmon Burger
29. RestaurantName: Royal Ground Coffee ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Cafes ; MyNotes: Warning: Coffee is not great. But a good place to sit and work free WiFi
30. RestaurantName: Saul’s Restaurant & Delicatessen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Delis, Diners ; MyNotes: N/A
31. RestaurantName: Zomsa ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Himalayan/Nepalese ; MyNotes: Unique Nepalese place. delicious Thali
32. RestaurantName: Venture Coffee ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
33. RestaurantName: Maurya Indian Grocery & Cafe ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian, International Grocery ; MyNotes: lamb sukka is delicious
34. RestaurantName: Un Bien ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Cuban, Caribbean ; MyNotes: Carrebian Sandwich is delicious
35. RestaurantName: Kathakali ; RestaurantLocation: Kirkland, WA ; CuisineAndDishes: Indian, Seafood ; MyNotes: Kappa was authentic.
36. RestaurantName: Madras Dosa Corner ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian ; MyNotes: Onion Ghee Podi was great. Unique and never had anything like that
37. RestaurantName: La Fusión ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Comfort Food ; MyNotes: Lamb Shank was great. Others loved cheviche and empanadas too. Delicious food
38. RestaurantName: Palm House ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Hawaiian ; MyNotes: very interesting cuisine. Loved the sweet banana and sauces
39. RestaurantName: Temple Coffee Roasters ; RestaurantLocation: Sacramento, CA ; CuisineAndDishes: Coffee Roasteries, Coffee & Tea ; MyNotes: Lovely interiors and delicious pour over coffee
40. RestaurantName: El Chalán Restaurant ; RestaurantLocation: El Sobrante, CA ; CuisineAndDishes: Peruvian, Italian ; MyNotes: Here the Alfajores are so delicious
41. RestaurantName: Cornish Pasty ; RestaurantLocation: Tempe, AZ ; CuisineAndDishes: British, Pubs ; MyNotes: N/A
42. RestaurantName: House Of Xian Dumpling ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
43. RestaurantName: Sana’a Cafe ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: nice coffee Turkish
44. RestaurantName: Cafenated Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Breakfast & Brunch, Wine Bars ; MyNotes: Great cappuccino and crispy soft chicken sandwich
45. RestaurantName: Andytown Coffee Roasters ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
46. RestaurantName: The Rotunda ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: Lovely afternoon tea. Sandwiches and desserts were delicious
47. RestaurantName: Kimchi Garden ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Asian Fusion ; MyNotes: pork belly is good
48. RestaurantName: Sultan’s Kebab ; RestaurantLocation: Danville, CA ; CuisineAndDishes: Mediterranean, Turkish ; MyNotes: Had numerous Turkish desserts and food was decent. The place looks authentic, but I did not try many food items
49. RestaurantName: Noodle Dynasty ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Noodles ; MyNotes: N/A
50. RestaurantName: Tartine Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Cafes ; MyNotes: N/A
51. RestaurantName: Four Barrel Coffee ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
52. RestaurantName: Señor Sisig - Food Trucks ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Filipino, Food Trucks ; MyNotes: N/A
53. RestaurantName: Eureka! ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: American ; MyNotes: N/A
54. RestaurantName: Chinese Express ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
55. RestaurantName: Xpression ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
56. RestaurantName: Hashtag Poki ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Poke, Hawaiian ; MyNotes: N/A
57. RestaurantName: Julia’s Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French ; MyNotes: N/A
58. RestaurantName: Glai Baan ; RestaurantLocation: Phoenix, AZ ; CuisineAndDishes: Thai ; MyNotes: really cool ambience
59. RestaurantName: The Chai Spot ; RestaurantLocation: Sedona, AZ ; CuisineAndDishes: Home Decor, Tea Rooms ; MyNotes: N/A
60. RestaurantName: Giovanni’s Produce & Grocery ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Grocery, Fruits & Veggies ; MyNotes: Alfajore and Leibniz
61. RestaurantName: States Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bakeries ; MyNotes: N/A
62. RestaurantName: Yaoyasan ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: International Grocery ; MyNotes: Japanese asian grocery store
63. RestaurantName: Gangnam Tofu ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: Busy popular Korean place
64. RestaurantName: Cafenated Coffee Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Wine Bars ; MyNotes: N/A
65. RestaurantName: The Garden Court Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Breakfast & Brunch ; MyNotes: N/A
66. RestaurantName: Schmidt’s Pub ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Tobacco Shops, Pubs ; MyNotes: N/A
67. RestaurantName: Parada 22 ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Puerto Rican ; MyNotes: N/A
68. RestaurantName: Espresso Lab ; RestaurantLocation: Carolina, Puerto Rico ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
69. RestaurantName: Orozco’s ; RestaurantLocation: San Juan, PR ; CuisineAndDishes: Puerto Rican ; MyNotes: N/A
70. RestaurantName: Mi Casita Seafood ; RestaurantLocation: Loíza, Puerto Rico ; CuisineAndDishes: Puerto Rican, Seafood ; MyNotes: N/A
71. RestaurantName: Restaurante Raices ; RestaurantLocation: Viejo San Juan, Puerto Rico ; CuisineAndDishes: Latin American, Caribbean ; MyNotes: Fried Cheese, Coffee and Coconut Mojito.
72. RestaurantName: Mallorca ; RestaurantLocation: San Juan, Puerto Rico ; CuisineAndDishes: Bakeries, Latin American ; MyNotes: Good breakfast.
73. RestaurantName: Point San Pablo Harbor ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Venues & Event Spaces, Marinas ; MyNotes: N/A
74. RestaurantName: Club Fugazi ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Performing Arts, Music Venues ; MyNotes: N/A
75. RestaurantName: Zareen’s ; RestaurantLocation: Palo Alto, CA ; CuisineAndDishes: Halal, Pakistani ; MyNotes: N/A
76. RestaurantName: Suzette Crepe Cafe ; RestaurantLocation: Albany, CA ; CuisineAndDishes: French, Desserts ; MyNotes: Lovely different delicious crepes
77. RestaurantName: Temple Nightclub San Francisco ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Dance Clubs, Venues & Event Spaces ; MyNotes: N/A
78. RestaurantName: Kensington Farmers’ Market ; RestaurantLocation: Kensington, CA ; CuisineAndDishes: Farmers Market ; MyNotes: N/A
79. RestaurantName: Sugata Japanese Restaurant ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: nice Japanese ambience
80. RestaurantName: Shewhat ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian, Eritrean ; MyNotes: N/A
81. RestaurantName: Foreign Cinema ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Mediterranean ; MyNotes: N/A
82. RestaurantName: Downtown Berkeley Farmers’ Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Farmers Market ; MyNotes: amazing vibe
83. RestaurantName: Pakwan Restaurant - 16th Street ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
84. RestaurantName: Pakwan Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
85. RestaurantName: Milkbomb Ice Cream ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt, Donuts ; MyNotes: N/A
86. RestaurantName: U :Dessert Story ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Desserts, Coffee & Tea ; MyNotes: Beautiful looking desserts. Almost everything is delicious. Love the coconut pandan sauce
87. RestaurantName: Coffee Conscious ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Donuts ; MyNotes: N/A
88. RestaurantName: Picaro ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Spanish, Basque ; MyNotes: very lively, definitely above average food. loved the Potato bravas
89. RestaurantName: Freshroll Vietnamese Rolls and Bowls ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese, Sandwiches ; MyNotes: N/A
90. RestaurantName: Jong Ga House ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean, Barbeque ; MyNotes: hot pot just hit pot
91. RestaurantName: Black Star Pirate BBQ ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Barbeque ; MyNotes: N/A
92. RestaurantName: Vik’s Chaat ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
93. RestaurantName: Oren’s Hummus ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Middle Eastern ; MyNotes: N/A
94. RestaurantName: Mainichi Sushi ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
95. RestaurantName: Pau Hana Base ; RestaurantLocation: Honolulu, HI ; CuisineAndDishes: Tapas/Small Plates, Izakaya ; MyNotes: N/A
96. RestaurantName: El Mono ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: N/A
97. RestaurantName: Sodoi Coffee Tasting House ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
98. RestaurantName: Blind Tiger ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Asian Fusion, Cocktail Bars ; MyNotes: just a bar with good ambience
99. RestaurantName: Cafe Nostos ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Themed Cafes, Greek ; MyNotes: N/A
100. RestaurantName: Z & Y Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese, Seafood ; MyNotes: N/A
101. RestaurantName: Wojia Hunan Cuisine ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Szechuan ; MyNotes: toothpick lamb
102. RestaurantName: Dirty Habit ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Bars ; MyNotes: N/A
103. RestaurantName: Yali’s Stanley Hall Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bagels ; MyNotes: N/A
104. RestaurantName: Pyeong Chang Tofu - Berkeley ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: N/A
105. RestaurantName: Shalimar ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Pakistani, Indian ; MyNotes: N/A
106. RestaurantName: Novela ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Cocktail Bars, Lounges ; MyNotes: just nice cocktails
107. RestaurantName: Andersen Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Sandwiches ; MyNotes: Japanese Shortcake available
108. RestaurantName: El Patio ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bars, Mexican ; MyNotes: good for Arepas and Beer at the bar counter
109. RestaurantName: East Bay Spice ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Cocktail Bars ; MyNotes: late night nice cocktails and Indian food
110. RestaurantName: Bob’s Donuts & Pastry Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Donuts ; MyNotes: open 24/7 SF awesome donuts
111. RestaurantName: Zareen’s ; RestaurantLocation: Mountain View, CA ; CuisineAndDishes: Halal, Pakistani ; MyNotes: best Indian food in Bay area. but poor ambiance
112. RestaurantName: Backyard Taco ; RestaurantLocation: Mesa, AZ ; CuisineAndDishes: Mexican ; MyNotes: awesome taco with flavor of the coal
113. RestaurantName: Dolores Park ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Parks, Basketball Courts ; MyNotes: good place to chillout
114. RestaurantName: The Fat Lady Bar & Restaurant ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: nice classic ambience but bad cocktails
115. RestaurantName: La Mar Cebichería Peruana ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Seafood ; MyNotes: great Peruvian food. Awesome black Manhattan
116. RestaurantName: Sichuan Style Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Szechuan ; MyNotes: Hunan stir fry lamb, Duck In beer sauce (taste like paal pizhinja curry), Beef in clay pot is also good
117. RestaurantName: Taste Of Pakistan ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Pakistani, Wraps ; MyNotes: cheap good biriyani
118. RestaurantName: RH Rooftop Restaurant Marin ; RestaurantLocation: Corte Madera, CA ; CuisineAndDishes: American ; MyNotes: classy place in SF Marin
119. RestaurantName: Italy On Gilman ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Italian ; MyNotes: yum dessert
120. RestaurantName: Corazon Cocina ; RestaurantLocation: Santa Barbara, CA ; CuisineAndDishes: Mexican ; MyNotes: best Mexican ever been to...it's just in small
121. RestaurantName: Dan Sung Sa ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean ; MyNotes: N/A
122. RestaurantName: Sakana ; RestaurantLocation: Las Vegas, NV ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
123. RestaurantName: Super Super Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Vietnamese, Asian Fusion ; MyNotes: N/A
124. RestaurantName: Middle East Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Grocery, Persian/Iranian ; MyNotes: The lamb shank here was delicious. They have other great Mediterranean stuff
125. RestaurantName: Syma’s Mexican Grill ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Persian/Iranian ; MyNotes: unfortunately got closed permanently
126. RestaurantName: Pâtisserie Rotha ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Bakeries, Patisserie/Cake Shop ; MyNotes: N/A
127. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Mexican ; MyNotes: N/A
128. RestaurantName: Tacos El Autlense ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Food Trucks ; MyNotes: N/A
129. RestaurantName: Napa Valley Olive Oil ; RestaurantLocation: St. Helena, CA ; CuisineAndDishes: Olive Oil, Cheese Shops ; MyNotes: N/A
130. RestaurantName: Kiraku ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Tapas/Small Plates ; MyNotes: N/A
131. RestaurantName: Old Damascus Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Caterers ; MyNotes: N/A
132. RestaurantName: Kirala Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Sushi Bars, Japanese ; MyNotes: N/A
133. RestaurantName: Ironside Fish & Oyster ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Live/Raw Food ; MyNotes: N/A
134. RestaurantName: Phuong Trang ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Vietnamese, Seafood ; MyNotes: N/A
135. RestaurantName: Mona Lisa Italian Foods ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Grocery, Italian ; MyNotes: N/A
136. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Mexican, Seafood ; MyNotes: N/A
137. RestaurantName: Picante ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Mexican, Latin American ; MyNotes: N/A
138. RestaurantName: Takara Sake USA ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Museums, Breweries ; MyNotes: This is closed down
139. RestaurantName: The Rare Barrel ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brewpubs ; MyNotes: Brewery with an interesting ambience. The food is delicious too Tartare is great
140. RestaurantName: Farmhouse Kitchen Thai Cuisine ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Thai, Cocktail Bars ; MyNotes: N/A
141. RestaurantName: MY Coffee Roastery ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: the coffee
142. RestaurantName: DragonEats ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese ; MyNotes: N/A
143. RestaurantName: China Live ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese, Cocktail Bars ; MyNotes: N/A
144. RestaurantName: The Whisky Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Beer, Wine & Spirits ; MyNotes: N/A
145. RestaurantName: Tuba ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Wine Bars ; MyNotes: N/A
146. RestaurantName: Ayawaska RestoBar- Petaluma ; RestaurantLocation: Petaluma, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: yum Peruvian in Petaluma
147. RestaurantName: Pedro’s Brazil Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brazilian, Cafes ; MyNotes: Tri Tip
148. RestaurantName: Cafe Colucci ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian ; MyNotes: N/A
149. RestaurantName: Wat Mongkolratanaram ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Buddhist Temples ; MyNotes: They have free Thai food on some Sundays
150. RestaurantName: Acme Bread Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: N/A
151. RestaurantName: Grégoire ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French, Sandwiches ; MyNotes: Famous for Crispy Potato Puffs and Fried Buttermilk Chicken`

export enum OpenAIModelID {
  GPT_4 = 'gpt-4',
}

export const OpenAIModelsParams: Record<OpenAIModelID, OpenAIModelParams> = {
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    maxTokens: 256,
    temperature: 0.7,
  },
}
export type CityStatesJohnnyHasBeenToType = {
  [city: string]: string
}

export const CityStatesJohnnyHasBeenTo: CityStatesJohnnyHasBeenToType = {
  'San Francisco': 'CA',
  Berkeley: 'CA',
  Oakland: 'CA',
  'San Jose': 'CA',
  Seattle: 'WA',
  Issaquah: 'WA',
  Tempe: 'AZ',
  'Las Vegas': 'NV',
  'San Diego': 'CA',
  Kochi: 'Kerala',
  Pune: 'Maharashtra',
}

export type CityStatesType = {
  [city: string]: keyof typeof StateCountry
}

export const CityStates: CityStatesType = {
  'San Francisco': 'CA',
  Berkeley: 'CA',
  Oakland: 'CA',
  'San Jose': 'CA',
  Seattle: 'WA',
  Issaquah: 'WA',
  Tempe: 'AZ',
  'Las Vegas': 'NV',
  'San Diego': 'CA',
  Kochi: 'Kerala',
  Pune: 'Maharashtra',
}

export type StateCountryType = {
  [state: string]: string
}

export const StateCountry: StateCountryType = {
  CA: 'USA',
  WA: 'USA',
  AZ: 'USA',
  NV: 'USA',
  Kerala: 'India',
  Maharashtra: 'India',
}
