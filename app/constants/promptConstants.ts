export const SystemInstruction = `
You are a thoughtful, friendly, human like, cleverly concise and hilarious assistant with a knack for suggesting great restaurant options from Johnnys likings and preferences. 
For suggesting the best recommendations, you will prioritize choices from Johnny's preferences list, along with any personalized notes he may have provided in 'MyNotes' if there are any. But do not give more than 3 suggestions.
The 'RestaurantName' indicates the restaurant's name, 'RestaurantLocation' indicates the city and state code, 
'CuisineAndDishes' indicated the cuisine, and 'MyNotes' containing tips and notes about the restaurant Johnny added.  
If there are no specific notes from Johnny for a particular place, you will provide any additional information about the place. 
In case there are no recommendations you find from Johnny's preferences list for the user requested location, you will make a guess and suggest a place you think Johnny might enjoy in the users requested location. Typically Johnny enjoys south indian food or japanese or vietnamese food. Or a good modern third wave coffee shop.
Make sure your response is clear, concise (not more than 50 words) and can be easily readable by humans. Do not include the bullet points, and texts 'RestaurantName', 'RestaurantLocation', 'MyNotes' and 'CuisineAndDishes' in your response. Here is the list of Johnny's preferences and his recommended places to eat.
`

export const RecommendationsFromYelp = `1. RestaurantName: Keeku da Dhaba ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Indian, Food Trucks ; MyNotes: They have a limited menu, I loved everything. Very few places where Romali Roti is made perfect!
2. RestaurantName: Idly Express - Fremont ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Vegetarian, Indian ; MyNotes: not just Idlys, Everything is excellent! All dishes taste super rich. Try the Jalebi, it has Saffron
3. RestaurantName: Solkadhi ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Indian ; MyNotes: Excellent indo Chinese chilli chicken
4. RestaurantName: Renegade By Devout Coffee ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Coffee & Tea, Breakfast & Brunch ; MyNotes: love the cappuccino and Kougin Amann
5. RestaurantName: Country Way ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: American ; MyNotes: This is a good place for breakfast. But just breakfast and good service
6. RestaurantName: Chaat Bhavan - Fremont ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Indian, Vegetarian ; MyNotes: Excellent! and fast service.. food above average. Mostly crowded in the evenings
7. RestaurantName: Suju's Coffee & Tea ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: No food is great here. just a nice place to hangout, work and have coffee. There are 3 locations of Sujus in Fremont
8. RestaurantName: Billy Roys Burger ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Burgers, Salad ; MyNotes: Great service. You will like this place if you like Burgers. But definitely try the Butchers Cut burger
9. RestaurantName: DOSA EXPRESS ; RestaurantLocation: FREMONT, CA ; CuisineAndDishes: Indian, Vegetarian ; MyNotes: N/A
10. RestaurantName: Afghan Awasana Kabob ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Afghan, Halal ; MyNotes: N/A
11. RestaurantName: Hops & Beans Cafe ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Cafes, Coffee & Tea ; MyNotes: Great vibe at this cafe. They serve Madras Filter Coffee the Italian way
12. RestaurantName: Deccan Morsels ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Indian ; MyNotes: Surprisingly irani chai is better than safrani chai. Bun Shaami is great!
13. RestaurantName: Kakushi Izakaya ; RestaurantLocation: Newark, CA ; CuisineAndDishes: Sushi Bars, Izakaya ; MyNotes: Try the mentaiko fries
14. RestaurantName: Bundoo Khan ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Barbeque, Halal ; MyNotes: Vibe is just amazing. Open till 1AM, Kebobs are mind blowing
15. RestaurantName: Samar Pastry ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Custom Cakes, Cupcakes ; MyNotes: She is really skilled and professional with her hands to make beautiful looking cakes
16. RestaurantName: Karikku Cafe ; RestaurantLocation: Fremont, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
17. RestaurantName: Bosco's Roadhouse ; RestaurantLocation: Sunol, CA ; CuisineAndDishes: American, Seafood ; MyNotes: nice ambience. loved the artichoke salad
18. RestaurantName: Mikonos Grill ; RestaurantLocation: Milpitas, CA ; CuisineAndDishes: Greek, Mediterranean ; MyNotes: The food tastes super great and authentic. Loved the Lamb. But the service isn't so great
19. RestaurantName: Quattro Restaurant and Bar ; RestaurantLocation: East Palo Alto, CA ; CuisineAndDishes: Italian, Diners ; MyNotes: classy luxury ambience and such fluffy and crispy croissants
20. RestaurantName: Zareen's ; RestaurantLocation: Mountain View, CA ; CuisineAndDishes: Halal, Pakistani ; MyNotes: best Indian food in Bay area. but poor ambiance
21. RestaurantName: Zareen's ; RestaurantLocation: Palo Alto, CA ; CuisineAndDishes: Indian, Halal ; MyNotes: N/A
22. RestaurantName: Smitten Ice Cream ; RestaurantLocation: San Jose, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt ; MyNotes: Guitard Chocolate Ice Cream is amazing
23. RestaurantName: Kaizen & Coffee ; RestaurantLocation: San Mateo, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Classic Japanese Coffee shop. Single origin coffees
24. RestaurantName: The Quail Café ; RestaurantLocation: Redwood City, CA ; CuisineAndDishes: Cafes ; MyNotes: N/A
25. RestaurantName: Sultan's Kebab ; RestaurantLocation: Danville, CA ; CuisineAndDishes: Mediterranean, Turkish ; MyNotes: Had numerous Turkish desserts and food was decent. The place looks authentic, but I did not try many food items
26. RestaurantName: Farmhouse Kitchen Thai Cuisine ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Thai, Cocktail Bars ; MyNotes: N/A
27. RestaurantName: Jong Ga House ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean, Barbeque ; MyNotes: hot pot just hit pot
28. RestaurantName: The Fat Lady Bar & Restaurant ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: nice classic ambience but bad cocktails
29. RestaurantName: Blind Tiger ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Asian Fusion, Cocktail Bars ; MyNotes: just a bar with good ambience
30. RestaurantName: Dan Sung Sa ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Korean ; MyNotes: I wouldn't recommend the food, it was terrible, but they have unique ambience sitting in booths, Kimchi sides are exceptional.
31. RestaurantName: Daytrip ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Wine Bars ; MyNotes: Blackcod with Skordalia
32. RestaurantName: Burma Superstar ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Burmese ; MyNotes: Food is just average. But excellent spacious and luxurious bathroom
33. RestaurantName: Shewhat ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian, Eritrean ; MyNotes: N/A
34. RestaurantName: Cafenated Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Breakfast & Brunch, Wine Bars ; MyNotes: Great cappuccino and crispy soft chicken sandwich
35. RestaurantName: Hashtag Poki ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Poke, Hawaiian ; MyNotes: N/A
36. RestaurantName: Cafe Colucci ; RestaurantLocation: Oakland, CA ; CuisineAndDishes: Ethiopian ; MyNotes: N/A
37. RestaurantName: Munch India ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Food Delivery Services ; MyNotes: N/A
38. RestaurantName: Paradita Eatery ; RestaurantLocation: Emeryville, CA ; CuisineAndDishes: Peruvian, Salad ; MyNotes: Food in general was good. Alfajores and Pisco sour was great!
39. RestaurantName: Wat Mongkolratanaram ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Buddhist Temples ; MyNotes: They have free Thai food on some Sundays
40. RestaurantName: Kirala Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Sushi Bars, Japanese ; MyNotes: N/A
41. RestaurantName: Kiraku ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Tapas/Small Plates, Izakaya ; MyNotes: N/A
42. RestaurantName: Noodle Dynasty ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Noodles ; MyNotes: N/A
43. RestaurantName: Downtown Berkeley Farmers' Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Farmers Market ; MyNotes: amazing vibe
44. RestaurantName: Chinese Express ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
45. RestaurantName: Caffe Strada ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: nice place to sit next to UC Berkeley. Nothing is exceptional but try the Apple Cloud. Pretty good
46. RestaurantName: SoDoI Coffee Tasting House ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
47. RestaurantName: Kimchi Garden ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Asian Fusion ; MyNotes: pork belly is good
48. RestaurantName: Old Damascus Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Caterers ; MyNotes: N/A
49. RestaurantName: Julia's Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French ; MyNotes: N/A
50. RestaurantName: Yali's Stanley Hall Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bagels ; MyNotes: N/A
51. RestaurantName: Angeline's Louisiana Kitchen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Cajun/Creole, Southern ; MyNotes: Excellent Louisiana cuisine. Loved the Chicory mixed coffee too it has a different flavor to it
52. RestaurantName: elaichi co. ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: lovely vibe with karak elachi chai, elachi bun and naan kattai
53. RestaurantName: Ippuku ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bars, Izakaya ; MyNotes: lovely Japanese Izakaya Bar. Expect a long wait, but worth the experience
54. RestaurantName: Eureka! ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: American ; MyNotes: N/A
55. RestaurantName: La Noisette Sweets ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: Beautiful looking French sweets
56. RestaurantName: Standard Fare ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Cafes ; MyNotes: If you are vegan this is a lovely delicious place. Very unique and creative
57. RestaurantName: Aki Japanese Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Taiwanese ; MyNotes: I wouldn't go here if it's not for Pork chop rice
58. RestaurantName: Xpression ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: Nice Indian bowl customizable bowl.. like an Indian Chipotle. Try the chicken 65
59. RestaurantName: The Rare Barrel ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brewpubs ; MyNotes: Brewery with an interesting ambience. The food is delicious too Tartare is great
60. RestaurantName: Taste Of Pakistan ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Pakistani, Wraps ; MyNotes: cheap good biriyani
61. RestaurantName: East Bay Spice ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian, Cocktail Bars ; MyNotes: late night nice cocktails and Indian food
62. RestaurantName: Imm Thai Street Food ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Thai ; MyNotes: loved the food. delicious and inexpensive sweet roti
63. RestaurantName: Milkbomb Ice Cream ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Ice Cream & Frozen Yogurt, Donuts ; MyNotes: N/A
64. RestaurantName: Tane Vegan Izakaya ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Vegan, Sushi Bars ; MyNotes: Interesting Japanese Vegan fine dine. Ask me or checkout my Instagram account for some beautiful pics of the food here
65. RestaurantName: Pedro's Brazil Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Brazilian, Cafes ; MyNotes: Tri Tip
66. RestaurantName: MY Coffee Roastery ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: Lovely coffee and cafe. but can be crowded.
67. RestaurantName: U Dessert Story - Berkeley ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Desserts, Coffee & Tea ; MyNotes: Beautiful looking desserts. Almost everything is delicious. Love the coconut pandan sauce
68. RestaurantName: Kaiyo Rooftop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Peruvian, Cocktail Bars ; MyNotes: N/A
69. RestaurantName: Cafe Nostos ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Themed Cafes, Greek ; MyNotes: N/A
70. RestaurantName: Cha-Ya ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: Interesting unique Vegetarian Japanese cuisine. Vegetarian but delicious
71. RestaurantName: Vik's Chaat ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
72. RestaurantName: Grégoire ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: French, Sandwiches ; MyNotes: Famous for Crispy Potato Puffs and Fried Buttermilk Chicken
73. RestaurantName: Eggy's Neighborhood Kitchen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Breakfast & Brunch, American ; MyNotes: I would go here only for the nice Ambience for brunch with friends and family. Be aware of how crowded it is might be hard to find a table, also beware of terrible dark roast coffee
74. RestaurantName: Pyeong Chang Tofu - Berkeley ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: N/A
75. RestaurantName: Foreign Cinema ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Mediterranean ; MyNotes: N/A
76. RestaurantName: Saul's Restaurant & Delicatessen ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Delis, Diners ; MyNotes: N/A
77. RestaurantName: States Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Bakeries ; MyNotes: N/A
78. RestaurantName: Cafenated Coffee Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Wine Bars ; MyNotes: N/A
79. RestaurantName: Highwire Coffee Roasters ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
80. RestaurantName: El Patio ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bars, Mexican ; MyNotes: good for Arepas and Beer at the bar counter
81. RestaurantName: Middle East Market ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Grocery, Persian/Iranian ; MyNotes: The lamb shank here was delicious. They have other great Mediterranean stuff
82. RestaurantName: Heyma Yemeni Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Desserts ; MyNotes: Great environment to sit. Lovely Aden Tea and Yemeni Snacks. I loved the beef samosas and beef sabya. Beware of poor wifi
83. RestaurantName: DragonEats ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese ; MyNotes: N/A
84. RestaurantName: Tuba ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Wine Bars ; MyNotes: N/A
85. RestaurantName: Takara Sake USA ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Museums, Breweries ; MyNotes: This is closed down
86. RestaurantName: Temple Nightclub ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Dance Clubs, Venues & Event Spaces ; MyNotes: N/A
87. RestaurantName: Sana'a Cafe ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea, Coffee Roasteries ; MyNotes: nice coffee Turkish
88. RestaurantName: Sightglass Coffee ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: Amazing coffee beans. Hazelnut Chocolate croissant is delicious
89. RestaurantName: Dandelion Chocolate ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chocolatiers & Shops ; MyNotes: Such delicious hot chocolate
90. RestaurantName: La Mar Cocina Peruana ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Seafood ; MyNotes: great Peruvian food. Awesome black Manhattan
91. RestaurantName: Freshroll Vietnamese Rolls and Bowls ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Vietnamese, Sandwiches ; MyNotes: N/A
92. RestaurantName: Novela ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Cocktail Bars, Lounges ; MyNotes: just nice cocktails
93. RestaurantName: Oren's Hummus ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Mediterranean, Middle Eastern ; MyNotes: N/A
94. RestaurantName: Tartine Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Cafes ; MyNotes: N/A
95. RestaurantName: Bartavelle Cafe ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Wine Bars ; MyNotes: It's a really interesting place, Breakfast place in the morning, Happy hour later converted to a wine bar at night
96. RestaurantName: Coffee Bodega ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: nice place to sit and sip a good coffee
97. RestaurantName: The Garden Court Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Breakfast & Brunch ; MyNotes: N/A
98. RestaurantName: Acme Bread Company ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Bakeries ; MyNotes: if you love just Breads! They are amazing. I love the Chocolate Ganache Buttons too.
99. RestaurantName: Picaro ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Spanish, Basque ; MyNotes: very lively, definitely above average food. loved the Potato bravas
100. RestaurantName: Dirty Habit ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Bars ; MyNotes: N/A
101. RestaurantName: Dolores Park ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Parks, Basketball Courts ; MyNotes: good place to chillout
102. RestaurantName: Roaming Bean Coffee ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Nice cute place owned by Jasraj. Lovely coffee. Please let him know my @foodie.youall Instagram account referred you to this place
103. RestaurantName: Four Barrel Coffee ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
104. RestaurantName: Pakwan Restaurant - 16th Street ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
105. RestaurantName: The Rotunda ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: New American, Cocktail Bars ; MyNotes: Lovely afternoon tea. Sandwiches and desserts were delicious
106. RestaurantName: Bar Sprezzatura ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bars, Italian ; MyNotes: N/A
107. RestaurantName: La Fusión ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Comfort Food ; MyNotes: Lamb Shank was great. Others loved cheviche and empanadas too. Delicious food
108. RestaurantName: Super Super Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Vietnamese, Asian Fusion ; MyNotes: N/A
109. RestaurantName: Coffee Conscious ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Coffee & Tea, Donuts ; MyNotes: N/A
110. RestaurantName: The Whisky Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Beer, Wine & Spirits ; MyNotes: N/A
111. RestaurantName: Señor Sisig - Food Trucks ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Filipino, Food Trucks ; MyNotes: N/A
112. RestaurantName: Westbrae Biergarten ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Beer Gardens, Brazilian ; MyNotes: N/A
113. RestaurantName: Pakwan Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian, Pakistani ; MyNotes: N/A
114. RestaurantName: Shalimar ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Pakistani, Indian ; MyNotes: N/A
115. RestaurantName: Italy On Gilman ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Italian ; MyNotes: yum dessert
116. RestaurantName: Sistory Thai Kitchen ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Thai, Breakfast & Brunch ; MyNotes: N/A
117. RestaurantName: Picante ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Mexican, Latin American ; MyNotes: N/A
118. RestaurantName: Troy Greek Cuisine ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Greek, Mediterranean ; MyNotes: Nice enjoyable place for meat lovers
119. RestaurantName: House Of Xian Dumpling ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese ; MyNotes: N/A
120. RestaurantName: Z & Y Restaurant ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Szechuan, Seafood ; MyNotes: N/A
121. RestaurantName: Sichuan Style Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Szechuan ; MyNotes: Hunan stir fry lamb, Duck In beer sauce (taste like paal pizhinja curry), Beef in clay pot is also good
122. RestaurantName: AKEMI Japanese Restaurant ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: nice ambience, great food. A But expensive
123. RestaurantName: Mainichi Sushi ; RestaurantLocation: Berkeley, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
124. RestaurantName: China Live ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Chinese, Cocktail Bars ; MyNotes: N/A
125. RestaurantName: Pâtisserie Rotha ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Bakeries, Patisserie/Cake Shop ; MyNotes: Amazing French desserts
126. RestaurantName: Schmidt's Pub ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Tobacco Shops, Pubs ; MyNotes: N/A
127. RestaurantName: Syma's Mexican Grill ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Persian/Iranian ; MyNotes: unfortunately this place got closed permanently
128. RestaurantName: Club Fugazi ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Performing Arts, Music Venues ; MyNotes: N/A
129. RestaurantName: Suzette Crepe Cafe ; RestaurantLocation: Albany, CA ; CuisineAndDishes: French, Desserts ; MyNotes: Lovely different delicious crepes
130. RestaurantName: Wojia Hunan Cuisine ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Szechuan ; MyNotes: toothpick lamb
131. RestaurantName: Bob's Donuts & Pastry Shop ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Donuts ; MyNotes: open 24/7 SF awesome donuts
132. RestaurantName: Royal Ground Coffee ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Cafes ; MyNotes: Warning: Coffee is not great. But a good place to sit and work free WiFi
133. RestaurantName: Sugata Japanese Restaurant ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: nice Japanese ambience
134. RestaurantName: Andersen Bakery ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Bakeries, Sandwiches ; MyNotes: Japanese Shortcake available
135. RestaurantName: Kensington Farmers' Market ; RestaurantLocation: Kensington, CA ; CuisineAndDishes: Farmers Market ; MyNotes: N/A
136. RestaurantName: Ollei ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Korean, Comfort Food ; MyNotes: For late night Korean food
137. RestaurantName: Copra ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
138. RestaurantName: Tacos El Autlense ; RestaurantLocation: Albany, CA ; CuisineAndDishes: Mexican, Food Trucks ; MyNotes: N/A
139. RestaurantName: Parada 22 ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Latin American, Puerto Rican ; MyNotes: N/A
140. RestaurantName: KAIYŌ Cow Hollow ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Japanese, Peruvian ; MyNotes: Loved the food so good, Tiradito was delicious
141. RestaurantName: California Fish Grill ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Seafood, Fish & Chips ; MyNotes: it's a chain. don't expect too much. But it surprised me with great fresh tasting fish..tasted great. I had Cajun salmon Burger
142. RestaurantName: Palm House ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Breakfast & Brunch, Hawaiian ; MyNotes: very interesting cuisine. Loved the sweet banana and sauces
143. RestaurantName: Asian Pearl Kitchen ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Dim Sum, Seafood ; MyNotes: Unique friendly Chinese place. Excellent sweet and sour soup
144. RestaurantName: Le Dessert Lab ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Desserts, Bubble Tea ; MyNotes: N/A
145. RestaurantName: Zomsa ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Himalayan/Nepalese ; MyNotes: Unique Nepalese place. delicious Thali. Also try the Chilli Pork, tastes unique
146. RestaurantName: Yaoyasan ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: International Grocery ; MyNotes: Japanese asian grocery store
147. RestaurantName: Giovanni's Produce & Grocery ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Grocery, Fruits & Veggies ; MyNotes: Alfajore and Leibniz
148. RestaurantName: Andytown Coffee Roasters ; RestaurantLocation: San Francisco, CA ; CuisineAndDishes: Coffee Roasteries ; MyNotes: N/A
149. RestaurantName: El Mono ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: N/A
150. RestaurantName: Gangnam Tofu ; RestaurantLocation: El Cerrito, CA ; CuisineAndDishes: Korean, Soup ; MyNotes: Busy popular Korean place
151. RestaurantName: El Chalán Restaurant ; RestaurantLocation: El Sobrante, CA ; CuisineAndDishes: Peruvian, Italian ; MyNotes: Here the Alfajores are so delicious
152. RestaurantName: Firehouse Coffee & Tea ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Unique ambience, opens early morning
153. RestaurantName: Avatar's Restaurant ; RestaurantLocation: Sausalito, CA ; CuisineAndDishes: Indian, Asian Fusion ; MyNotes: Mexican Indian Fusion Place. Loved the New Zealand Curry. Ashok is very passionate. They use only Olive Oil
154. RestaurantName: Point San Pablo Harbor ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Venues & Event Spaces, Marinas ; MyNotes: N/A
155. RestaurantName: Black Star Pirate BBQ ; RestaurantLocation: Richmond, CA ; CuisineAndDishes: Barbeque ; MyNotes: N/A
156. RestaurantName: RH Rooftop Restaurant at RH Marin ; RestaurantLocation: Corte Madera, CA ; CuisineAndDishes: American ; MyNotes: classy place in SF Marin
157. RestaurantName: Sol Food ; RestaurantLocation: San Rafael, CA ; CuisineAndDishes: Puerto Rican, Sandwiches ; MyNotes: Great service, lovely Puerto Rican food
158. RestaurantName: Sorella Caffe ; RestaurantLocation: Fairfax, CA ; CuisineAndDishes: Italian, Wine Bars ; MyNotes: beautiful interior
159. RestaurantName: Ayawaska RestoBar- Petaluma ; RestaurantLocation: Petaluma, CA ; CuisineAndDishes: Peruvian, Latin American ; MyNotes: yum Peruvian in Petaluma
160. RestaurantName: Napa Valley Olive Oil ; RestaurantLocation: St. Helena, CA ; CuisineAndDishes: Olive Oil, Cheese Shops ; MyNotes: N/A
161. RestaurantName: Temple Coffee Roasters ; RestaurantLocation: Sacramento, CA ; CuisineAndDishes: Coffee Roasteries, Coffee & Tea ; MyNotes: Lovely interiors and delicious pour over coffee
162. RestaurantName: Riviera Common Grounds Coffee ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Unique innovative coffee shop. Loved the vibe and the Aussie bites
163. RestaurantName: Arti Cafe Kelseyville ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Indian ; MyNotes: N/A
164. RestaurantName: Studebakers Coffee House ; RestaurantLocation: Kelseyville, CA ; CuisineAndDishes: Coffee & Tea, Delis ; MyNotes: great sandwich and lovely atmosphere
165. RestaurantName: Corazon Cocina ; RestaurantLocation: Santa Barbara, CA ; CuisineAndDishes: Mexican ; MyNotes: best Mexican ever been to...it's just in small
166. RestaurantName: Sakana ; RestaurantLocation: Las Vegas, NV ; CuisineAndDishes: Japanese, Sushi Bars ; MyNotes: N/A
167. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Mexican, Seafood ; MyNotes: N/A
168. RestaurantName: Phuong Trang ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Vietnamese, Seafood ; MyNotes: N/A
169. RestaurantName: Oscars Mexican Seafood ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Mexican ; MyNotes: N/A
170. RestaurantName: Mona Lisa Italian Foods ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Grocery, Italian ; MyNotes: N/A
171. RestaurantName: Ironside Fish & Oyster ; RestaurantLocation: San Diego, CA ; CuisineAndDishes: Seafood, Live/Raw Food ; MyNotes: N/A
172. RestaurantName: The Chai Spot ; RestaurantLocation: Sedona, AZ ; CuisineAndDishes: Home Decor, Tea Rooms ; MyNotes: Never tasted such authentic tasting chai in the US. Taste similar to chaiwala chais and the busuits you get here taste just like ones you get in India also inexpensive
173. RestaurantName: Glai Baan ; RestaurantLocation: Phoenix, AZ ; CuisineAndDishes: Thai ; MyNotes: really cool ambience
174. RestaurantName: Cornish Pasty ; RestaurantLocation: Tempe, AZ ; CuisineAndDishes: British, Pubs ; MyNotes: N/A
175. RestaurantName: Backyard Taco ; RestaurantLocation: Mesa, AZ ; CuisineAndDishes: Mexican ; MyNotes: awesome taco with flavor of the coal
176. RestaurantName: Maurya Indian Grocery & Cafe ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian, International Grocery ; MyNotes: lamb sukka is delicious
177. RestaurantName: Madras Dosa Corner ; RestaurantLocation: Issaquah, WA ; CuisineAndDishes: Indian ; MyNotes: Onion Ghee Podi was great. Unique and never had anything like that
178. RestaurantName: Venture Coffee ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Coffee & Tea ; MyNotes: Lovely coffee, nice place to bring your dog in the morning
179. RestaurantName: Un Bien ; RestaurantLocation: Seattle, WA ; CuisineAndDishes: Cuban, Caribbean ; MyNotes: Carrebian Sandwich is delicious
180. RestaurantName: Kathakali ; RestaurantLocation: Kirkland, WA ; CuisineAndDishes: Indian, Seafood ; MyNotes: Kappa was authentic to Kerala
181. RestaurantName: Pau Hana Base ; RestaurantLocation: Honolulu, HI ; CuisineAndDishes: Tapas/Small Plates, Izakaya ; MyNotes: N/A
182. RestaurantName: Island Vintage Coffee ; RestaurantLocation: Honolulu, HI ; CuisineAndDishes: Coffee & Tea, Breakfast & Brunch ; MyNotes: Excellent coffee! crowded place
183. RestaurantName: Dickson's Farmstand Meats ; RestaurantLocation: New York, NY ; CuisineAndDishes: Butcher, Hot Dogs ; MyNotes: Anything meat is great! Try a simple hotdog it's delicious 😋
184. RestaurantName: Black Fox Coffee ; RestaurantLocation: New York, NY ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
185. RestaurantName: Dominique Ansel Bakery ; RestaurantLocation: New York, NY ; CuisineAndDishes: Bakeries, Desserts ; MyNotes: N/A
186. RestaurantName: Loring Place ; RestaurantLocation: New York, NY ; CuisineAndDishes: Desserts, Tapas/Small Plates ; MyNotes: Lovely ambience, didn't try many on the menu, but I loved the roasted Beets salad. It was so good!
187. RestaurantName: Thai Villa ; RestaurantLocation: New York, NY ; CuisineAndDishes: Thai ; MyNotes: Here the ambience trumps food and yet the food is delicious
188. RestaurantName: Momofuku Noodle Bar - East Village ; RestaurantLocation: New York, NY ; CuisineAndDishes: Ramen, New American ; MyNotes: try the pork buns
189. RestaurantName: Devocion ; RestaurantLocation: Brooklyn, NY ; CuisineAndDishes: Coffee & Tea, Cafes ; MyNotes: Amazing vibe for chilling. lovely coffee too. Checkout my Coffee highlights on Instagram
190. RestaurantName: Roberta's ; RestaurantLocation: Brooklyn, NY ; CuisineAndDishes: Pizza, Italian ; MyNotes: Best pizza I've ever had on earth
191. RestaurantName: Mallorca ; RestaurantLocation: San Juan, Puerto Rico ; CuisineAndDishes: Bakeries, Latin American ; MyNotes: Good breakfast.
192. RestaurantName: Restaurante Raices ; RestaurantLocation: Viejo San Juan, Puerto Rico ; CuisineAndDishes: Latin American, Caribbean ; MyNotes: Fried Cheese, Coffee and Coconut Mojito.
193. RestaurantName: Orozco's ; RestaurantLocation: San Juan, PR ; CuisineAndDishes: Puerto Rican ; MyNotes: N/A
194. RestaurantName: Espresso Lab ; RestaurantLocation: Carolina, Puerto Rico ; CuisineAndDishes: Coffee & Tea ; MyNotes: N/A
195. RestaurantName: Mi Casita Seafood ; RestaurantLocation: Loíza, Puerto Rico ; CuisineAndDishes: Puerto Rican, Seafood ; MyNotes: N/A`

export const OtherRecommendations = `\n196. RestaurantName: Cocoa Tree ; RestaurantLocation: Kochi, Kerala ; CuisineAndDishes: Coffee Cafe ; MyNotes: Chill cafe, nice people, good place to hangout
197. RestaurantName: Brindhavan ; RestaurantLocation: Kochi, Kerala ; CuisineAndDishes: Dosa, South Indian  ; MyNotes: Nice south indian authentic food, busy place. \n
198. RestaurantName: Vohuman Café ; RestaurantLocation: Pune, Maharastra ; CuisineAndDishes: Coffee, Chai  ; MyNotes: Pune's iconic spot for Irani chai.`