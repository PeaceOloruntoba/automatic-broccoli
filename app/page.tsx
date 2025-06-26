import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">Unistudents Match</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-rose-600 hover:bg-rose-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Match</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The first ever matchmaking service designed specifically for Muslim university students and graduates.
            Connect with like-minded individuals in a safe, respectful environment.
          </p>
          <div className="space-x-4">
            <Link href="/signup">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">30-day free trial • No commitment • Cancel anytime</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Unistudents Match?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced content moderation and guardian notifications for female users ensure a safe environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>University Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with fellow students and graduates who share your educational background and values.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Respectful Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Photo sharing requires mutual consent, ensuring privacy and respect in all interactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Unlimited Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Send unlimited messages and requests to find your perfect match without restrictions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Premium Membership</CardTitle>
              <CardDescription>Everything you need to find your match</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                £14.99<span className="text-lg text-gray-500">/month</span>
              </div>
              <div className="text-green-600 font-semibold">30-day free trial</div>
              <ul className="text-left space-y-2">
                <li>✓ Unlimited messaging</li>
                <li>✓ Send unlimited requests</li>
                <li>✓ Photo sharing with consent</li>
                <li>✓ Advanced profile matching</li>
                <li>✓ Safe & moderated environment</li>
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Free Trial</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-rose-400" />
            <span className="text-xl font-bold">Unistudents Match</span>
          </div>
          <p className="text-gray-400">Connecting Muslim university students and graduates worldwide</p>
        </div>
      </footer>
    </div>
  )
}
