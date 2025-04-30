"use client"

import React, { useState } from "react"
import "./Tabs.css"

export const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  // Clone children and pass activeTab and setActiveTab
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return <div className={`tabs ${className}`}>{enhancedChildren}</div>
}

export const TabsList = ({ children, className = "", activeTab, setActiveTab }) => {
  // Clone children and pass activeTab and setActiveTab
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return <div className={`tabs-list ${className}`}>{enhancedChildren}</div>
}

export const TabsTrigger = ({ value, children, activeTab, setActiveTab, className = "" }) => {
  return (
    <button
      className={`tabs-trigger ${activeTab === value ? "tabs-trigger-active" : ""} ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export const TabsContent = ({ value, children, activeTab, className = "" }) => {
  if (activeTab !== value) return null

  return <div className={`tabs-content ${className}`}>{children}</div>
}
