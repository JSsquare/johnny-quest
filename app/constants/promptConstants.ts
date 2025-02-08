export const SystemInstruction = `
You are a thoughtful, friendly, human like, cleverly concise and hilarious assistant with a knack for suggesting great restaurant options from Johnnys likings. 
For suggesting the best recommendations, you will prioritize choices from Johnny's preferences list, along with any personalized notes he may have provided in 'MyNotes' if there are any. But do not give more than 3 suggestions.
The 'RestaurantName' indicates the restaurant's name, 'RestaurantLocation' indicates the city and state code, 
'CuisineAndDishes' indicated the cuisine, and 'MyNotes' containing tips and notes about the restaurant Johnny added.  
If there are no specific notes from Johnny for a particular place, you will provide any additional information about the place. 
In case there are no recommendations you can find from Johnny's preferences list for the user requested location, you will suggest something similar to what Johnny might enjoy from his provided list. Typically Johnny enjoys popular south indian food or japanese or vietnamese food. Or a good modern third wave coffee shop.
Make sure your response is clear, concise (not more than 50 words) and can be easily readable by humans. Do not include the bullet points, and texts 'RestaurantName', 'RestaurantLocation', 'MyNotes' and 'CuisineAndDishes' in your response. Here is the list of Johnny's preferences and his recommended places to eat.
`

export const RecommendationsFromYelp = `1. RestaurantName: Burma Superstar ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Burmese ; MyNotes: Food is just average. But excellent spacious and luxurious bathroom
2. RestaurantName: Dan Sung Sa ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean ; MyNotes: I wouldn't recommend the food, it was terrible, but they have unique ambience sitting in booths, Kimchi sides are exceptional.
3. RestaurantName: Sightglass Coffee ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: Amazing coffee beans. Hazelnut Chocolate croissant is delicious
4. RestaurantName: Dandelion Chocolate ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chocolatiers & Shops ; MyNotes: Such delicious hot chocolate
5. RestaurantName: Caffe Strada ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: nice place to sit next to UC Berkeley. Nothing is exceptional but try the Apple Cloud. Pretty good
6. RestaurantName: Sol Food ; RestaurantLocation: San Rafael, CA ; CuisineAndDishes: Latin American, Puerto Rican ; MyNotes: Great service, lovely Puerto Rican food
7. RestaurantName: Sorella Caffe ; RestaurantLocation: Fairfax, CA ; CuisineAndDishes: Italian, Wine Bars ; MyNotes: beautiful interior
8. RestaurantName: Smitten Ice Cream ; RestaurantLocation: San Jose, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt ; MyNotes: Guitard Chocolate Ice Cream is amazing
9. RestaurantName: Bar Sprezzatura ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bars, Italian ; MyNotes: N/A
10. RestaurantName: Coffee Bodega ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: nice place to sit and sip a good coffee
11. RestaurantName: KAIYŌ Rooftop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Peruvian, Cocktail Bars ; MyNotes: N/A
12. RestaurantName: Firehouse Coffee & Tea ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Unique ambience, opens early morning
13. RestaurantName: Avatar's Restaurant ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Indian, Asian Fusion ; MyNotes: Mexican Indian Fusion Place. Loved the New Zealand Curry. Ashok is very passionate. They use only Olive Oil
14. RestaurantName: Daytrip ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Wine Bars ; MyNotes: Blackcod with Skordalia
15. RestaurantName: Quail's Nest Café at Filoli ; RestaurantLocation: Redwood City, CA ; CuisineAndDishes: Cafes ; MyNotes: N/A
16. RestaurantName: Munch India ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Food Delivery Services ; MyNotes: N/A
17. RestaurantName: Highwire Coffee Roasters ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
18. RestaurantName: Westbrae Biergarten ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Beer Gardens, Brazilian ; MyNotes: N/A
19. RestaurantName: Standard Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Cafes ; MyNotes: If you are vegan this is a lovely delicious place. Very unique and creative
20. RestaurantName: La Noisette Sweets ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: Beautiful looking French sweets
21. RestaurantName: Imm Thai Street Food ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Thai ; MyNotes: loved the food. delicious and inexpensive sweet roti
22. RestaurantName: Copra ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
23. RestaurantName: Ollei ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Korean, Comfort Food ; MyNotes: For late night Korean food
24. RestaurantName: KAIYŌ Cow Hollow ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Japanese, Peruvian ; MyNotes: Loved the food so good, Tiradito was delicious
25. RestaurantName: Sistory Thai Kitchen ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Thai, Breakfast & Brunch ; MyNotes: N/A
26. RestaurantName: Riviera Common Grounds Coffee ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Unique innovative coffee shop. Loved the vibe and the Aussie bites
27. RestaurantName: Arti Cafe Kelseyville ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
28. RestaurantName: Studebakers Coffee House ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea, Delis ; MyNotes: great sandwich and lovely atmosphere
29. RestaurantName: Angeline's Louisiana Kitchen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Cajun/Creole, Southern ; MyNotes: Excellent Louisiana cuisine. Loved the Chicory mixed coffee too it has a different feel
30. RestaurantName: Asian Pearl Kitchen ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Dim Sum, Seafood ; MyNotes: Unique friendly Chinese place. Excellent sweet and sour soup
31. RestaurantName: Le Dessert Lab ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Desserts ; MyNotes: N/A
32. RestaurantName: Paradita Eatery ; RestaurantLocation: Emeryville, CA ; CuisineAndDishes: Peruvian, Salad ; MyNotes: Food in general was good. Alfajores and Pisco sour was great!
33. RestaurantName: California Fish Grill - El Cerrito ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Seafood, Fish & Chips ; MyNotes: it's a chain. don't expect too much. But it surprised me with great fresh tasting fish..tasted great. I had Cajun salmon Burger
34. RestaurantName: Royal Ground Coffee ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Cafes ; MyNotes: Warning: Coffee is not great. But a good place to sit and work free WiFi
35. RestaurantName: Saul's Restaurant & Delicatessen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Delis, Diners ; MyNotes: N/A
36. RestaurantName: Zomsa ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Himalayan/Nepalese ; MyNotes: Unique Nepalese place. delicious Thali. Also try the Chilli Pork, tastes unique
37. RestaurantName: Venture Coffee ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Lovely coffee, nice place to bring your dog in the morning
38. RestaurantName: Maurya Indian Grocery & Cafe ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian, International Grocery ; MyNotes: lamb sukka is delicious
39. RestaurantName: Un Bien ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Cuban, Caribbean ; MyNotes: Carrebian Sandwich is delicious
40. RestaurantName: Kathakali ; RestaurantLocation: Kirkland, WA ; CuisineAndDishes: Indian, Seafood ; MyNotes: Kappa was authentic to Kerala
41. RestaurantName: Madras Dosa Corner ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian ; MyNotes: Onion Ghee Podi was great. Unique and never had anything like that
42. RestaurantName: La Fusión ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Comfort Food ; MyNotes: Lamb Shank was great. Others loved cheviche and empanadas too. Delicious food
43. RestaurantName: Palm House ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Hawaiian ; MyNotes: very interesting cuisine. Loved the sweet banana and sauces
44. RestaurantName: Temple Coffee Roasters ; RestaurantLocation: Sacramento, CA ; CuisineAndDishes: Coffee Roasteries, Coffee & Tea ; MyNotes: Lovely interiors and delicious pour over coffee
45. RestaurantName: El Chalán Restaurant ; RestaurantLocation: El Sobrante, CA ; CuisineAndDishes: Peruvian, Italian ; MyNotes: Here the Alfajores are so delicious
46. RestaurantName: Cornish Pasty ; RestaurantLocation: Tempe, AZ ; CuisineAndDishes: British, Pubs ; MyNotes: N/A
47. RestaurantName: House Of Xian Dumpling ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
48. RestaurantName: Sana'a Cafe ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: nice coffee Turkish
49. RestaurantName: Cafenated Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Breakfast & Brunch, Wine Bars ; MyNotes: Great cappuccino and crispy soft chicken sandwich
50. RestaurantName: Andytown Coffee Roasters ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
51. RestaurantName: The Rotunda ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: Lovely afternoon tea. Sandwiches and desserts were delicious
52. RestaurantName: Kimchi Garden ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Asian Fusion ; MyNotes: pork belly is good
53. RestaurantName: Sultan's Kebab ; RestaurantLocation: Danville, CA ; CuisineAndDishes: Mediterranean, Turkish ; MyNotes: Had numerous Turkish desserts and food was decent. The place looks authentic, but I did not try many food items
54. RestaurantName: Noodle Dynasty ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Noodles ; MyNotes: N/A
55. RestaurantName: Tartine Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Cafes ; MyNotes: N/A
56. RestaurantName: Four Barrel Coffee ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
57. RestaurantName: Señor Sisig - Food Trucks ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Filipino, Food Trucks ; MyNotes: N/A
58. RestaurantName: Eureka! ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: American ; MyNotes: N/A
59. RestaurantName: Chinese Express ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
60. RestaurantName: Xpression ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
61. RestaurantName: Hashtag Poki ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Poke, Hawaiian ; MyNotes: N/A
62. RestaurantName: Julia's Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French ; MyNotes: N/A
63. RestaurantName: Glai Baan ; RestaurantLocation: Phoenix, AZ ; CuisineAndDishes: Thai ; MyNotes: really cool ambience
64. RestaurantName: The Chai Spot ; RestaurantLocation: Sedona, AZ ; CuisineAndDishes: Home Decor, Tea Rooms ; MyNotes: Never tasted such authentic tasting chai in the US. Taste similar to chaiwala chais and the busuits you get here taste just like ones you get in India also inexpensive
65. RestaurantName: Giovanni's Produce & Grocery ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Grocery, Fruits & Veggies ; MyNotes: Alfajore and Leibniz
66. RestaurantName: States Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bakeries ; MyNotes: N/A
67. RestaurantName: Yaoyasan ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: International Grocery ; MyNotes: Japanese asian grocery store
68. RestaurantName: Gangnam Tofu ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: Busy popular Korean place
69. RestaurantName: Cafenated Coffee Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Wine Bars ; MyNotes: N/A
70. RestaurantName: The Garden Court Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Breakfast & Brunch ; MyNotes: N/A
71. RestaurantName: Schmidt's Pub ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Tobacco Shops, Pubs ; MyNotes: N/A
72. RestaurantName: Parada 22 ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Puerto Rican ; MyNotes: N/A
73. RestaurantName: Espresso Lab ; RestaurantLocation: Carolina, Puerto Rico ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
74. RestaurantName: Orozco's ; RestaurantLocation: San Juan, PR ; CuisineAndDishes: Puerto Rican ; MyNotes: N/A
75. RestaurantName: Mi Casita Seafood ; RestaurantLocation: Loíza, Puerto Rico ; CuisineAndDishes: Puerto Rican, Seafood ; MyNotes: N/A
76. RestaurantName: Restaurante Raices ; RestaurantLocation: Viejo San Juan, Puerto Rico ; CuisineAndDishes: Latin American, Caribbean ; MyNotes: Fried Cheese, Coffee and Coconut Mojito.
77. RestaurantName: Mallorca ; RestaurantLocation: San Juan, Puerto Rico ; CuisineAndDishes: Bakeries, Latin American ; MyNotes: Good breakfast.
78. RestaurantName: Point San Pablo Harbor ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Venues & Event Spaces, Marinas ; MyNotes: N/A
79. RestaurantName: Club Fugazi ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Performing Arts, Music Venues ; MyNotes: N/A
80. RestaurantName: Zareen's ; RestaurantLocation: Palo Alto, CA ; CuisineAndDishes: Halal, Pakistani ; MyNotes: N/A
81. RestaurantName: Suzette Crepe Cafe ; RestaurantLocation: Albany, CA ; CuisineAndDishes: French, Desserts ; MyNotes: Lovely different delicious crepes
82. RestaurantName: Temple Nightclub San Francisco ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Dance Clubs, Venues & Event Spaces ; MyNotes: N/A
83. RestaurantName: Kensington Farmers' Market ; RestaurantLocation: Kensington, CA ; CuisineAndDishes: Farmers Market ; MyNotes: N/A
84. RestaurantName: Sugata Japanese Restaurant ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: nice Japanese ambience
85. RestaurantName: Shewhat ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian, Eritrean ; MyNotes: N/A
86. RestaurantName: Foreign Cinema ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Mediterranean ; MyNotes: N/A
87. RestaurantName: Downtown Berkeley Farmers' Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Farmers Market ; MyNotes: amazing vibe
88. RestaurantName: Pakwan Restaurant - 16th Street ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
89. RestaurantName: Pakwan Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
90. RestaurantName: Milkbomb Ice Cream ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt, Donuts ; MyNotes: N/A
91. RestaurantName: U :Dessert Story ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Desserts, Coffee & Tea ; MyNotes: Beautiful looking desserts. Almost everything is delicious. Love the coconut pandan sauce
92. RestaurantName: Coffee Conscious ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Donuts ; MyNotes: N/A
93. RestaurantName: Picaro ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Spanish, Basque ; MyNotes: very lively, definitely above average food. loved the Potato bravas
94. RestaurantName: Freshroll Vietnamese Rolls and Bowls ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese, Sandwiches ; MyNotes: N/A
95. RestaurantName: Jong Ga House ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean, Barbeque ; MyNotes: hot pot just hit pot
96. RestaurantName: Black Star Pirate BBQ ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Barbeque ; MyNotes: N/A
97. RestaurantName: Vik's Chaat ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
98. RestaurantName: Oren's Hummus ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Middle Eastern ; MyNotes: N/A
99. RestaurantName: Mainichi Sushi ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
100. RestaurantName: Pau Hana Base ; RestaurantLocation: Honolulu, HI ; CuisineAndDishes: Tapas/Small Plates, Izakaya ; MyNotes: N/A
101. RestaurantName: El Mono ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: N/A
102. RestaurantName: Sodoi Coffee Tasting House ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
103. RestaurantName: Blind Tiger ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Asian Fusion, Cocktail Bars ; MyNotes: just a bar with good ambience
104. RestaurantName: Cafe Nostos ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Themed Cafes, Greek ; MyNotes: N/A
105. RestaurantName: Z & Y Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese, Seafood ; MyNotes: N/A
106. RestaurantName: Wojia Hunan Cuisine ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Szechuan ; MyNotes: toothpick lamb
107. RestaurantName: Dirty Habit ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Bars ; MyNotes: N/A
108. RestaurantName: Yali's Stanley Hall Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bagels ; MyNotes: N/A
109. RestaurantName: Pyeong Chang Tofu - Berkeley ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: N/A
110. RestaurantName: Shalimar ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Pakistani, Indian ; MyNotes: N/A
111. RestaurantName: Novela ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Cocktail Bars, Lounges ; MyNotes: just nice cocktails
112. RestaurantName: Andersen Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Sandwiches ; MyNotes: Japanese Shortcake available
113. RestaurantName: El Patio ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bars, Mexican ; MyNotes: good for Arepas and Beer at the bar counter
114. RestaurantName: East Bay Spice ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Cocktail Bars ; MyNotes: late night nice cocktails and Indian food
115. RestaurantName: Bob's Donuts & Pastry Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Donuts ; MyNotes: open 24/7 SF awesome donuts
116. RestaurantName: Zareen's ; RestaurantLocation: Mountain View, CA ; CuisineAndDishes: Halal, Pakistani ; MyNotes: best Indian food in Bay area. but poor ambiance
117. RestaurantName: Backyard Taco ; RestaurantLocation: Mesa, AZ ; CuisineAndDishes: Mexican ; MyNotes: awesome taco with flavor of the coal
118. RestaurantName: Dolores Park ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Parks, Basketball Courts ; MyNotes: good place to chillout
119. RestaurantName: The Fat Lady Bar & Restaurant ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: nice classic ambience but bad cocktails
120. RestaurantName: La Mar Cebichería Peruana ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Seafood ; MyNotes: great Peruvian food. Awesome black Manhattan
121. RestaurantName: Sichuan Style Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Szechuan ; MyNotes: Hunan stir fry lamb, Duck In beer sauce (taste like paal pizhinja curry), Beef in clay pot is also good
122. RestaurantName: Taste Of Pakistan ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Pakistani, Wraps ; MyNotes: cheap good biriyani
123. RestaurantName: RH Rooftop Restaurant Marin ; RestaurantLocation: Corte Madera, CA ; CuisineAndDishes: American ; MyNotes: classy place in SF Marin
124. RestaurantName: Italy On Gilman ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Italian ; MyNotes: yum dessert
125. RestaurantName: Corazon Cocina ; RestaurantLocation: Santa Barbara, CA ; CuisineAndDishes: Mexican ; MyNotes: best Mexican ever been to...it's just in small
126. RestaurantName: Sakana ; RestaurantLocation: Las Vegas, NV ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
127. RestaurantName: Super Super Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Vietnamese, Asian Fusion ; MyNotes: N/A
128. RestaurantName: Middle East Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Grocery, Persian/Iranian ; MyNotes: The lamb shank here was delicious. They have other great Mediterranean stuff
129. RestaurantName: Syma's Mexican Grill ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Persian/Iranian ; MyNotes: unfortunately got closed permanently
130. RestaurantName: Pâtisserie Rotha ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Bakeries, Patisserie/Cake Shop ; MyNotes: N/A
131. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Mexican ; MyNotes: N/A
132. RestaurantName: Tacos El Autlense ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Food Trucks ; MyNotes: N/A
133. RestaurantName: Napa Valley Olive Oil ; RestaurantLocation: St. Helena, CA ; CuisineAndDishes: Olive Oil, Cheese Shops ; MyNotes: N/A
134. RestaurantName: Kiraku ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Tapas/Small Plates ; MyNotes: N/A
135. RestaurantName: Old Damascus Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Caterers ; MyNotes: N/A
136. RestaurantName: Kirala Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Sushi Bars, Japanese ; MyNotes: N/A
137. RestaurantName: Ironside Fish & Oyster ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Live/Raw Food ; MyNotes: N/A
138. RestaurantName: Phuong Trang ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Vietnamese, Seafood ; MyNotes: N/A
139. RestaurantName: Mona Lisa Italian Foods ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Grocery, Italian ; MyNotes: N/A
140. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Mexican, Seafood ; MyNotes: N/A
141. RestaurantName: Picante ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Mexican, Latin American ; MyNotes: N/A
142. RestaurantName: Takara Sake USA ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Museums, Breweries ; MyNotes: This is closed down
143. RestaurantName: The Rare Barrel ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brewpubs ; MyNotes: Brewery with an interesting ambience. The food is delicious too Tartare is great
144. RestaurantName: Farmhouse Kitchen Thai Cuisine ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Thai, Cocktail Bars ; MyNotes: N/A
145. RestaurantName: MY Coffee Roastery ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: the coffee
146. RestaurantName: DragonEats ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese ; MyNotes: N/A
147. RestaurantName: China Live ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese, Cocktail Bars ; MyNotes: N/A
148. RestaurantName: The Whisky Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Beer, Wine & Spirits ; MyNotes: N/A
149. RestaurantName: Tuba ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Wine Bars ; MyNotes: N/A
150. RestaurantName: Ayawaska RestoBar- Petaluma ; RestaurantLocation: Petaluma, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: yum Peruvian in Petaluma
151. RestaurantName: Pedro's Brazil Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brazilian, Cafes ; MyNotes: Tri Tip
152. RestaurantName: Cafe Colucci ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian ; MyNotes: N/A
153. RestaurantName: Wat Mongkolratanaram ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Buddhist Temples ; MyNotes: They have free Thai food on some Sundays
154. RestaurantName: Acme Bread Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: N/A
155. RestaurantName: Grégoire ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French, Sandwiches ; MyNotes: Famous for Crispy Potato Puffs and Fried Buttermilk Chicken
156. RestaurantName: Cocoa Tree ; RestaurantLocation: Kochi, Kerala ; CuisineAndDishes: Coffee Cafe ; MyNotes: Chill cafe, nice people, good place to hangout
157. RestaurantName: Brindhavan ; RestaurantLocation: Kochi, Kerala ; CuisineAndDishes: Dosa, South Indian  ; MyNotes: Nice south indian authentic food, busy place`
