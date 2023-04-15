import { useState, useEffect } from "react"
import {
  client, recommendedProfiles
} from '../api'
import Link from "next/link"

export default function Home() {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise()
      console.log({ response })
      setProfiles(response.data.recommendedProfiles)
    }

    catch (err) {
      console.log({ err })
    }
  }
  return (
    <div>
      {
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`}>
            <a>
              <div>

              </div>
            </a>
          </Link>
        ))
      }

    </div>
  )
}

