"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    university: "",
    status: "",
    description: "",
    lookingFor: "",
    guardianEmail: "",
    guardianPhone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    agreeTerms: false,
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    router.push("/dashboard")
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">Unistudents Match</span>
          </Link>
          <div className="text-sm text-gray-500">Step {step} of 4</div>
        </div>

        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Start your 30-day free trial today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    placeholder="Create a password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                    placeholder="Confirm your password"
                  />
                </div>

                <Button onClick={handleNext} className="w-full">
                  Continue
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateFormData("age", e.target.value)}
                      placeholder="Your age"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university">University</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => updateFormData("university", e.target.value)}
                    placeholder="Your university"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={formData.status} onValueChange={(value) => updateFormData("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Current Student</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Describe Yourself</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => updateFormData("description", e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lookingFor">What are you looking for?</Label>
                  <Textarea
                    id="lookingFor"
                    value={formData.lookingFor}
                    onChange={(e) => updateFormData("lookingFor", e.target.value)}
                    placeholder="Describe what you're looking for in a partner..."
                    rows={3}
                  />
                </div>

                {formData.gender === "female" && (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900">Guardian Information</h3>
                    <p className="text-sm text-blue-700">
                      For your safety, we'll notify your guardian when you receive messages.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianEmail">Guardian Email</Label>
                        <Input
                          id="guardianEmail"
                          type="email"
                          value={formData.guardianEmail}
                          onChange={(e) => updateFormData("guardianEmail", e.target.value)}
                          placeholder="Guardian's email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian Phone</Label>
                        <Input
                          id="guardianPhone"
                          type="tel"
                          value={formData.guardianPhone}
                          onChange={(e) => updateFormData("guardianPhone", e.target.value)}
                          placeholder="Guardian's phone"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button onClick={handleNext} className="flex-1">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  Start your 30-day free trial. You won't be charged until the trial ends.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Free Trial Details</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 30 days completely free</li>
                    <li>• Cancel anytime during trial</li>
                    <li>• No charges if cancelled before trial ends</li>
                    <li>• £14.99/month after trial period</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => updateFormData("cardNumber", e.target.value)}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => updateFormData("expiryDate", e.target.value)}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={formData.cvv}
                      onChange={(e) => updateFormData("cvv", e.target.value)}
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button onClick={handleNext} className="flex-1">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
                <CardDescription>Please review and accept our terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg max-h-40 overflow-y-auto text-sm">
                  <h4 className="font-semibold mb-2">Terms of Service</h4>
                  <p className="mb-2">
                    By using Unistudents Match, you agree to our community guidelines and terms of service. This
                    includes maintaining respectful communication, providing accurate information, and following Islamic
                    principles in all interactions.
                  </p>
                  <p className="mb-2">
                    We reserve the right to moderate content and remove inappropriate material. Your privacy and safety
                    are our top priorities.
                  </p>
                  <p>Subscription will automatically renew at £14.99/month after your free trial unless cancelled.</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => updateFormData("agreeTerms", checked)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1" disabled={!formData.agreeTerms}>
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
