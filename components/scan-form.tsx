"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Loader2 } from "lucide-react"

export function ScanForm() {
  const [target, setTarget] = useState("")
  const [isScanning, setIsScanning] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!target.trim()) return

    setIsScanning(true)

    // Here you would call your API to perform the scan
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setIsScanning(false)
      // In a real app, you would update the results state here
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scan Target</CardTitle>
        <CardDescription>Enter a domain, URL, or IP address to analyze</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="example.com"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isScanning}>
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Scan
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
