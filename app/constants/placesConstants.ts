export type CityStatesJohnnyHasBeenToType = {
  [city: string]: string
}

export const CityStatesJohnnyHasBeenTo: CityStatesJohnnyHasBeenToType = {
  'San Francisco': 'CA',
  'San Francisco Bay Area': 'CA',
  Berkeley: 'CA',
  Oakland: 'CA',
  Seattle: 'WA',
  Tempe: 'AZ',
  'San Diego': 'CA',
  'San Juan': 'PR',
  Honolulu: 'HI',
  Fremont: 'CA',
  Kochi: 'Kerala',
  Pune: 'Maharashtra',
}

export type StateCodeToStateType = {
  [code: string]: string
}
export const StateCodeToState: StateCodeToStateType = {
  CA: 'California',
  WA: 'Washington',
  AZ: 'Arizona',
  PR: 'Puerto Rico',
  HI: 'Hawaii',
  Kerala: 'Kerala',
  Maharashtra: 'Maharashtra'
}

export type StateCountryType = {
  [state: string]: string
}

export const StateCountry: StateCountryType = {
  CA: 'USA',
  WA: 'USA',
  AZ: 'USA',
  NV: 'USA',
  PR: 'USA',
  HI: 'USA',
  Kerala: 'India',
  Maharashtra: 'India',
}
