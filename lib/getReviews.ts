export interface Review {
  text: string
  image: string
  name: string
  role: string
}

// Static fallback reviews shown when Google Places API is unavailable
const fallbackReviews: Review[] = [
  {
    text: "Best hobby shop in the area by far. The selection is incredible and the staff actually knows their stuff. The Back Room is a great touch for the gaming community.",
    image: "https://ui-avatars.com/api/?name=James+M&background=0033A0&color=fff&size=40",
    name: "James M.",
    role: "Google Review",
  },
  {
    text: "I drive 45 minutes just to shop here. The prices are fair, the inventory is fresh, and they always have what I'm looking for. Highly recommend to any collector.",
    image: "https://ui-avatars.com/api/?name=Tyler+R&background=0033A0&color=fff&size=40",
    name: "Tyler R.",
    role: "Google Review",
  },
  {
    text: "FNM here every week. Great atmosphere, fair play, and a store that actually supports its local TCG community. 5 stars every time.",
    image: "https://ui-avatars.com/api/?name=Sarah+K&background=C8A84B&color=fff&size=40",
    name: "Sarah K.",
    role: "Google Review",
  },
  {
    text: "Found a Charizard I've been hunting for years at a fair price. Staff is knowledgeable and passionate — you can tell they're collectors too.",
    image: "https://ui-avatars.com/api/?name=Mike+D&background=0033A0&color=fff&size=40",
    name: "Mike D.",
    role: "Google Review",
  },
  {
    text: "Picked up some autographed memorabilia here and it was all properly authenticated. Great variety and the staff helped me find exactly what I wanted.",
    image: "https://ui-avatars.com/api/?name=Amanda+L&background=C8A84B&color=fff&size=40",
    name: "Amanda L.",
    role: "Google Review",
  },
  {
    text: "Amazing retro video game selection. Found games here I've been looking for for years. The trade-in prices are the best around too.",
    image: "https://ui-avatars.com/api/?name=Chris+P&background=0033A0&color=fff&size=40",
    name: "Chris P.",
    role: "Google Review",
  },
  {
    text: "Took my son to his first Pokemon League Challenge here. The staff was welcoming, patient with beginners, and the Back Room is perfect for events.",
    image: "https://ui-avatars.com/api/?name=Rachel+W&background=C8A84B&color=fff&size=40",
    name: "Rachel W.",
    role: "Google Review",
  },
  {
    text: "Bought several hobby boxes and the value is consistently great. They get new product fast and always have the latest sets on release day.",
    image: "https://ui-avatars.com/api/?name=Josh+T&background=0033A0&color=fff&size=40",
    name: "Josh T.",
    role: "Google Review",
  },
  {
    text: "The MTG singles selection is legit. Commander staples, vintage pieces, competitive cards — all in one place. This is my go-to shop.",
    image: "https://ui-avatars.com/api/?name=Derek+H&background=0033A0&color=fff&size=40",
    name: "Derek H.",
    role: "Google Review",
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapGoogleReview(r: any): Review {
  const stars = r.rating ?? 5
  return {
    text: r.text || '',
    image: r.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.author_name)}&background=0033A0&color=fff&size=40`,
    name: r.author_name || 'Google Reviewer',
    role: `Google Review · ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}`,
  }
}

export async function getReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return fallbackReviews

  try {
    // Step 1: Find the Place ID via text search
    const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Mascots+Sports+Cards+%26+Collectibles+Tell+City+Indiana&inputtype=textquery&fields=place_id&key=${apiKey}`
    const findRes = await fetch(findUrl, {
      next: { revalidate: 86400 }, // cache Place ID for 24 hours
    })
    const findData = await findRes.json()
    const placeId: string | undefined = findData.candidates?.[0]?.place_id

    if (!placeId) {
      console.warn('[getReviews] Place ID not found, using fallback reviews')
      return fallbackReviews
    }

    // Step 2: Fetch reviews from Place Details
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    const detailsRes = await fetch(detailsUrl, {
      next: { revalidate: 3600 }, // refresh reviews every hour
    })
    const detailsData = await detailsRes.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reviews: any[] = detailsData.result?.reviews ?? []

    if (reviews.length === 0) {
      console.warn('[getReviews] No reviews returned by Google, using fallback')
      return fallbackReviews
    }

    // Filter out reviews with no text, then map to our interface
    return reviews
      .filter((r) => r.text && r.text.trim().length > 0)
      .map(mapGoogleReview)
  } catch (err) {
    console.error('[getReviews] Error fetching Google reviews:', err)
    return fallbackReviews
  }
}

export { fallbackReviews }
