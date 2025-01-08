'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')

  const handleAmountChange = (value: string) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount('custom')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Support Scott Yung's Campaign</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Make a Donation</CardTitle>
          <CardDescription>Your support helps us build a stronger Bennelong.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <RadioGroup value={amount} onValueChange={handleAmountChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="20" id="amount-20" />
                  <Label htmlFor="amount-20">$20</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50" id="amount-50" />
                  <Label htmlFor="amount-50">$50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100" id="amount-100" />
                  <Label htmlFor="amount-100">$100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="amount-custom" />
                  <Label htmlFor="amount-custom">Custom Amount</Label>
                </div>
              </RadioGroup>
              {amount === 'custom' && (
                <div>
                  <Label htmlFor="custom-amount">Enter custom amount</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                  />
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Donate Now</Button>
        </CardFooter>
      </Card>
      <p className="mt-8 text-center text-sm text-gray-600">
        Your donation will be used to support Scott Yung's campaign activities. All donations are subject to disclosure in accordance with electoral laws.
      </p>
    </div>
  )
}

