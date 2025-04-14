import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScanForm } from "@/components/scan-form"
import { DashboardHeader } from "@/components/dashboard-header"
import { ResultsPanels } from "@/components/results-panels"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-10">
        <DashboardHeader />

        <div className="grid gap-6">
          <ScanForm />

          <Card>
            <CardHeader>
              <CardTitle>Scan Results</CardTitle>
              <CardDescription>Detailed analysis of the target</CardDescription>
            </CardHeader>
            <CardContent>
              <ResultsPanels />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
