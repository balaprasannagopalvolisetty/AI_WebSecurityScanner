"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Globe,
  Server,
  Network,
  Folder,
  Shield,
  PiIcon as Api,
  Code,
  Cloud,
  Package,
  AlertTriangle,
  UserCheck,
  BarChart,
} from "lucide-react"

export function ResultsPanels() {
  const [activeTab, setActiveTab] = useState("domain")

  return (
    <Tabs defaultValue="domain" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 h-auto">
        <TabsTrigger value="domain" className="flex flex-col py-2 h-auto">
          <Globe className="h-4 w-4 mb-1" />
          <span className="text-xs">Domain</span>
        </TabsTrigger>
        <TabsTrigger value="tech" className="flex flex-col py-2 h-auto">
          <Server className="h-4 w-4 mb-1" />
          <span className="text-xs">Tech Stack</span>
        </TabsTrigger>
        <TabsTrigger value="network" className="flex flex-col py-2 h-auto">
          <Network className="h-4 w-4 mb-1" />
          <span className="text-xs">Network</span>
        </TabsTrigger>
        <TabsTrigger value="files" className="flex flex-col py-2 h-auto">
          <Folder className="h-4 w-4 mb-1" />
          <span className="text-xs">Files</span>
        </TabsTrigger>
        <TabsTrigger value="security" className="flex flex-col py-2 h-auto">
          <Shield className="h-4 w-4 mb-1" />
          <span className="text-xs">Security</span>
        </TabsTrigger>
        <TabsTrigger value="api" className="flex flex-col py-2 h-auto">
          <Api className="h-4 w-4 mb-1" />
          <span className="text-xs">API</span>
        </TabsTrigger>
        <TabsTrigger value="js" className="flex flex-col py-2 h-auto">
          <Code className="h-4 w-4 mb-1" />
          <span className="text-xs">JS</span>
        </TabsTrigger>
        <TabsTrigger value="cloud" className="flex flex-col py-2 h-auto">
          <Cloud className="h-4 w-4 mb-1" />
          <span className="text-xs">Cloud</span>
        </TabsTrigger>
        <TabsTrigger value="payload" className="flex flex-col py-2 h-auto">
          <Package className="h-4 w-4 mb-1" />
          <span className="text-xs">Payload</span>
        </TabsTrigger>
        <TabsTrigger value="threat" className="flex flex-col py-2 h-auto">
          <AlertTriangle className="h-4 w-4 mb-1" />
          <span className="text-xs">Threat Intel</span>
        </TabsTrigger>
        <TabsTrigger value="human" className="flex flex-col py-2 h-auto">
          <UserCheck className="h-4 w-4 mb-1" />
          <span className="text-xs">Human</span>
        </TabsTrigger>
        <TabsTrigger value="accuracy" className="flex flex-col py-2 h-auto">
          <BarChart className="h-4 w-4 mb-1" />
          <span className="text-xs">Accuracy</span>
        </TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabsContent value="domain" className="mt-0">
          <ResultPanel
            title="Domain Analysis"
            description="Information about the domain, DNS records, and ownership"
            icon={<Globe className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No domain data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="tech" className="mt-0">
          <ResultPanel
            title="Technology Stack Detection"
            description="Frameworks, libraries, and technologies in use"
            icon={<Server className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No technology data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="network" className="mt-0">
          <ResultPanel
            title="Network Analysis"
            description="Open ports, services, and network configuration"
            icon={<Network className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No network data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="files" className="mt-0">
          <ResultPanel
            title="Files & Directory"
            description="File structure, sensitive files, and directory listing"
            icon={<Folder className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No file data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="security" className="mt-0">
          <ResultPanel
            title="Security Analysis"
            description="Vulnerabilities, misconfigurations, and security issues"
            icon={<Shield className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No security data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="api" className="mt-0">
          <ResultPanel
            title="API Analysis"
            description="API endpoints, methods, and potential vulnerabilities"
            icon={<Api className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No API data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="js" className="mt-0">
          <ResultPanel
            title="JavaScript Analysis"
            description="JavaScript libraries, frameworks, and potential issues"
            icon={<Code className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No JavaScript data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="cloud" className="mt-0">
          <ResultPanel
            title="Cloud Infrastructure"
            description="Cloud services, providers, and configurations"
            icon={<Cloud className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No cloud data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="payload" className="mt-0">
          <ResultPanel
            title="Payload Analysis"
            description="Request and response payloads, data formats"
            icon={<Package className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No payload data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="threat" className="mt-0">
          <ResultPanel
            title="Advanced Threat Intelligence"
            description="Known threats, malware indicators, and threat actors"
            icon={<AlertTriangle className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No threat intelligence available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="human" className="mt-0">
          <ResultPanel
            title="Human Verification"
            description="Manual verification and analysis results"
            icon={<UserCheck className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No human verification data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>

        <TabsContent value="accuracy" className="mt-0">
          <ResultPanel
            title="Accuracy Analysis"
            description="Confidence scores and reliability metrics for scan results"
            icon={<BarChart className="h-5 w-5" />}
          >
            <div className="text-center text-muted-foreground p-6">
              No accuracy data available. Perform a scan to see results.
            </div>
          </ResultPanel>
        </TabsContent>
      </div>
    </Tabs>
  )
}

interface ResultPanelProps {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
}

function ResultPanel({ title, description, icon, children }: ResultPanelProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
