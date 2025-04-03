"use client"

import { useState, useMemo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { format, subDays, startOfDay, endOfDay } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, ArrowUp, Calendar } from "lucide-react"

const DATE_RANGES = {
  "7D": { label: "Last 7 Days", days: 7 },
  "1M": { label: "Last Month", days: 30 },
  "3M": { label: "Last 3 Months", days: 90 },
  "6M": { label: "Last 6 Months", days: 180 },
  ALL: { label: "All Time", days: null },
}

export function AccountChart({ transactions }) {
  const [dateRange, setDateRange] = useState("1M")

  const filteredData = useMemo(() => {
    const range = DATE_RANGES[dateRange]
    const now = new Date()
    const startDate = range.days ? startOfDay(subDays(now, range.days)) : startOfDay(new Date(0))

    // Filter transactions within date range
    const filtered = transactions.filter((t) => new Date(t.date) >= startDate && new Date(t.date) <= endOfDay(now))

    // Group transactions by date
    const grouped = filtered.reduce((acc, transaction) => {
      const date = format(new Date(transaction.date), "MMM dd")
      if (!acc[date]) {
        acc[date] = { date, income: 0, expense: 0 }
      }
      if (transaction.type === "INCOME") {
        acc[date].income += transaction.amount
      } else {
        acc[date].expense += transaction.amount
      }
      return acc
    }, {})

    // Convert to array and sort by date
    return Object.values(grouped).sort((a, b) => new Date(a.date) - new Date(b.date))
  }, [transactions, dateRange])

  // Calculate totals for the selected period
  const totals = useMemo(() => {
    return filteredData.reduce(
      (acc, day) => ({
        income: acc.income + day.income,
        expense: acc.expense + day.expense,
      }),
      { income: 0, expense: 0 },
    )
  }, [filteredData])

  return (
    <Card className="overflow-hidden border-0 shadow-md bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <CardTitle className="text-lg font-semibold text-gray-800">Transaction Overview</CardTitle>
        </div>
        <Select defaultValue={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[160px] bg-gray-50 border-gray-200 text-sm font-medium">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(DATE_RANGES).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Total Income</p>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <ArrowUp className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-green-600">
              ${totals.income.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <ArrowDown className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-red-600">
              ${totals.expense.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div
            className={`rounded-xl p-4 shadow-sm ${totals.income - totals.expense >= 0 ? "bg-blue-50" : "bg-amber-50"}`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Net Balance</p>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  totals.income - totals.expense >= 0 ? "bg-blue-100" : "bg-amber-100"
                }`}
              >
                {totals.income - totals.expense >= 0 ? (
                  <ArrowUp className="w-4 h-4 text-blue-600" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-amber-600" />
                )}
              </div>
            </div>
            <p
              className={`text-2xl font-bold ${
                totals.income - totals.expense >= 0 ? "text-blue-600" : "text-amber-600"
              }`}
            >
              $
              {Math.abs(totals.income - totals.expense).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <div className="h-[320px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "#e5e7eb" }}
                tick={{ fill: "#6b7280" }}
                dy={10}
              />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                tick={{ fill: "#6b7280" }}
              />
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                  undefined,
                ]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  padding: "0.75rem",
                }}
                labelStyle={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#374151",
                }}
              />
              <Legend wrapperStyle={{ paddingTop: 16 }} iconType="circle" iconSize={8} />
              <Bar dataKey="income" name="Income" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={50} />
              <Bar dataKey="expense" name="Expense" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

