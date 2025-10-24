// Event data interface matching the events.json structure
export interface Event {
  id: number
  title: string
  description: string
  year: number
  month: number
  location: string
  organization: string
  category: string
  image: string
}

// Activity interface for portfolio compatibility
export interface Activity {
  id: string
  title: string
  description: string
  date: string
  year: number
  location?: string
  organization?: string
  category: string
  images?: string[]
}

// Fetch events from events.json file
export async function fetchEventsData(): Promise<Event[]> {
  try {
    const response = await fetch('/events.json')
    if (!response.ok) {
      throw new Error('Failed to fetch events data')
    }
    const events: Event[] = await response.json()
    return events
  } catch (error) {
    console.error('Error fetching events data:', error)
    return []
  }
}

// Convert Event to Activity format for portfolio compatibility
export function convertEventToActivity(event: Event): Activity {
  // Create a formatted date string from year and month
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const date = `${monthNames[event.month - 1]} ${event.year}`
  
  // Map category names to match service categories
  const categoryMapping: Record<string, string> = {
    'Cultural': 'Cultural Events',
    'Business': 'Corporate Events',
    'Social': 'Cultural Events', // Social events can be categorized as cultural
    'Exhibition': 'Exhibitions',
    'Workshop': 'Educational Events',
    'Conference': 'Corporate Events',
    'Corporate': 'Corporate Events'
  }
  
  const mappedCategory = categoryMapping[event.category] || event.category
  
  // Construct full image path (check if image exists in events folder or use placeholder)
  const imagePath = event.image ? `/images/events/${event.image}` : undefined
  
  return {
    id: event.id.toString(),
    title: event.title,
    description: event.description,
    date,
    year: event.year,
    location: event.location,
    organization: event.organization,
    category: mappedCategory,
    images: imagePath ? [imagePath] : undefined
  }
}

// Get all events converted to Activity format
export async function getActivitiesFromEvents(): Promise<Activity[]> {
  const events = await fetchEventsData()
  return events
    .map(convertEventToActivity)
    .sort((a, b) => b.year - a.year) // Sort by year descending
}

// Get all available years from events
export async function getAvailableYearsFromEvents(): Promise<number[]> {
  const events = await fetchEventsData()
  return Array.from(new Set(events.map(event => event.year))).sort((a, b) => b - a)
}

// Get all available categories from events
export async function getAvailableCategoriesFromEvents(): Promise<string[]> {
  const activities = await getActivitiesFromEvents()
  return Array.from(new Set(activities.map(activity => activity.category))).sort()
}

// Filter activities by year
export async function filterActivitiesByYearFromEvents(year: number | 'all'): Promise<Activity[]> {
  const activities = await getActivitiesFromEvents()
  if (year === 'all') {
    return activities
  }
  return activities.filter(activity => activity.year === year)
}

// Filter activities by category
export async function filterActivitiesByCategoryFromEvents(category: string | 'all'): Promise<Activity[]> {
  const activities = await getActivitiesFromEvents()
  if (category === 'all') {
    return activities
  }
  return activities.filter(activity => activity.category === category)
}

// Search activities
export async function searchActivitiesFromEvents(query: string, activities?: Activity[]): Promise<Activity[]> {
  const allActivities = activities || await getActivitiesFromEvents()
  if (!query) return allActivities

  const lowerQuery = query.toLowerCase()
  return allActivities.filter(activity =>
    activity.title.toLowerCase().includes(lowerQuery) ||
    activity.description.toLowerCase().includes(lowerQuery) ||
    activity.organization?.toLowerCase().includes(lowerQuery) ||
    activity.location?.toLowerCase().includes(lowerQuery) ||
    activity.category.toLowerCase().includes(lowerQuery)
  )
}
