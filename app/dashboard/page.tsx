"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, User, Search, Settings, LogOut, Eye, EyeOff } from "lucide-react"

// Mock data for profiles
const mockProfiles = [
  {
    id: 1,
    name: "Sarah Ahmed",
    age: 22,
    university: "University of Oxford",
    status: "Student",
    description:
      "Medical student passionate about helping others. Looking for someone who shares Islamic values and has ambition.",
    photoVisible: false,
    initials: "SA",
  },
  {
    id: 2,
    name: "Omar Hassan",
    age: 24,
    university: "Imperial College London",
    status: "Graduate",
    description:
      "Software engineer who loves technology and innovation. Seeking a life partner who values family and faith.",
    photoVisible: false,
    initials: "OH",
  },
  {
    id: 3,
    name: "Fatima Ali",
    age: 21,
    university: "University of Cambridge",
    status: "Student",
    description: "Psychology student interested in mental health advocacy. Looking for someone kind and understanding.",
    photoVisible: false,
    initials: "FA",
  },
  {
    id: 4,
    name: "Ahmed Khan",
    age: 25,
    university: "London School of Economics",
    status: "Graduate",
    description: "Finance professional with a passion for community work. Seeking someone who shares similar values.",
    photoVisible: false,
    initials: "AK",
  },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [profiles, setProfiles] = useState(mockProfiles)

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.university.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handlePhotoRequest = (profileId: number) => {
    // Handle photo request logic
    console.log("Photo request sent to profile:", profileId)
  }

  const handleMessage = (profileId: number) => {
    // Handle message logic
    console.log("Message sent to profile:", profileId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">Unistudents Match</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Messages
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">
            Discover your perfect match from our community of Muslim students and graduates.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by name or university..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <Card key={profile.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={profile.photoVisible ? `/placeholder.svg?height=64&width=64` : undefined} />
                    <AvatarFallback className="bg-rose-100 text-rose-600 text-lg font-semibold">
                      {profile.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{profile.name}</CardTitle>
                    <CardDescription>
                      Age {profile.age} • {profile.status}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {profile.university}
                  </Badge>
                  <p className="text-sm text-gray-600 line-clamp-3">{profile.description}</p>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handlePhotoRequest(profile.id)} className="flex-1">
                    {profile.photoVisible ? (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        View Photo
                      </>
                    ) : (
                      <>
                        <EyeOff className="h-4 w-4 mr-2" />
                        Request Photo
                      </>
                    )}
                  </Button>
                  <Button size="sm" onClick={() => handleMessage(profile.id)} className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No profiles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
