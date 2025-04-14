import { Shield } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col space-y-2 mb-10">
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">Security Scanner</h1>
      </div>
      <p className="text-muted-foreground">
        Analyze domains, detect technologies, and identify security vulnerabilities
      </p>
    </div>
  )
}
