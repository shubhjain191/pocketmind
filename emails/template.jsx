import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components"

// Dummy data for preview
const PREVIEW_DATA = {
  monthlyReport: {
    userName: "Shubh Jain",
    type: "monthly-report",
    data: {
      month: "December",
      stats: {
        totalIncome: 5000,
        totalExpenses: 3500,
        byCategory: {
          housing: 1500,
          groceries: 600,
          transportation: 400,
          entertainment: 300,
          utilities: 700,
        },
      },
      insights: [
        "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
        "Great job keeping entertainment expenses under control this month!",
        "Setting up automatic savings could help you save 20% more of your income.",
      ],
    },
  },
  budgetAlert: {
    userName: "Shubh Jain",
    type: "budget-alert",
    data: {
      percentageUsed: 85,
      budgetAmount: 4000,
      totalExpenses: 3400,
    },
  },
}

export default function EmailTemplate({ userName = "", type = "monthly-report", data = {} }) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <div style={styles.header}>
              <Heading style={styles.title}>Monthly Financial Report</Heading>
              <div style={styles.headerLine}></div>
            </div>

            <Text style={styles.greeting}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for <span style={styles.highlight}>{data?.month}</span>:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.statGrid}>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Total Income</Text>
                  <Text style={styles.statValue}>${data?.stats?.totalIncome || 0}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Total Expenses</Text>
                  <Text style={styles.statValue}>${data?.stats?.totalExpenses || 0}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Net</Text>
                  <Text
                    style={{
                      ...styles.statValue,
                      color:
                        (data?.stats?.totalIncome || 0) - (data?.stats?.totalExpenses || 0) > 0 ? "#10b981" : "#ef4444",
                    }}
                  >
                    ${(data?.stats?.totalIncome || 0) - (data?.stats?.totalExpenses || 0)}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && Object.keys(data.stats.byCategory).length > 0 && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>Expenses by Category</Heading>
                <div style={styles.categoryContainer}>
                  {Object.entries(data.stats.byCategory).map(([category, amount], index) => (
                    <div key={category} style={styles.categoryRow}>
                      <div style={styles.categoryInfo}>
                        <div
                          style={{
                            ...styles.categoryDot,
                            backgroundColor: categoryColors[index % categoryColors.length],
                          }}
                        ></div>
                        <Text style={styles.categoryName}>{formatCategory(category)}</Text>
                      </div>
                      <Text style={styles.categoryAmount}>${amount}</Text>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.insightsSection}>
                <Heading style={styles.sectionHeading}>PocketMind Insights</Heading>
                <div style={styles.insightsContainer}>
                  {data.insights.map((insight, index) => (
                    <div key={index} style={styles.insightItem}>
                      <div style={styles.insightBullet}>💡</div>
                      <Text style={styles.insightText}>{insight}</Text>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <div style={styles.footerContainer}>
              <div style={styles.footerLine}></div>
              <Text style={styles.footer}>
                Thank you for using <span style={styles.brandName}>PocketMind</span>. Keep tracking your finances for better
                financial health!
              </Text>
            </div>
          </Container>
        </Body>
      </Html>
    )
  }

  if (type === "budget-alert") {
    const remainingAmount = data?.budgetAmount - data?.totalExpenses
    const isLowBudget = data?.percentageUsed > 80

    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <div style={styles.header}>
              <Heading
                style={{
                  ...styles.title,
                  color: isLowBudget ? "#ef4444" : "#3b82f6",
                }}
              >
                Budget Alert
              </Heading>
              <div
                style={{
                  ...styles.headerLine,
                  backgroundColor: isLowBudget ? "#ef4444" : "#3b82f6",
                }}
              ></div>
            </div>

            <Text style={styles.greeting}>Hello {userName},</Text>
            <Text style={styles.text}>
              You&rsquo;ve used{" "}
              <span
                style={{
                  ...styles.highlight,
                  backgroundColor: isLowBudget ? "#fee2e2" : "#dbeafe",
                  color: isLowBudget ? "#ef4444" : "#3b82f6",
                }}
              >
                {data?.percentageUsed.toFixed(1)}%
              </span>{" "}
              of your monthly budget.
            </Text>

            {/* Progress Bar */}
            <div style={styles.progressBarContainer}>
              <div
                style={{
                  ...styles.progressBar,
                  width: `${Math.min(data?.percentageUsed || 0, 100)}%`,
                  backgroundColor: (data?.percentageUsed || 0) > 80 ? "#ef4444" : "#3b82f6",
                }}
              ></div>
            </div>

            <Section style={styles.statsContainer}>
              <div style={styles.statGrid}>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Budget Amount</Text>
                  <Text style={styles.statValue}>${data?.budgetAmount || 0}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Spent So Far</Text>
                  <Text style={styles.statValue}>${data?.totalExpenses || 0}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.statLabel}>Remaining</Text>
                  <Text
                    style={{
                      ...styles.statValue,
                      color: (data?.budgetAmount || 0) - (data?.totalExpenses || 0) > 0 ? "#10b981" : "#ef4444",
                    }}
                  >
                    ${(data?.budgetAmount || 0) - (data?.totalExpenses || 0)}
                  </Text>
                </div>
              </div>
            </Section>

            <div style={styles.tipContainer}>
              <Text style={styles.tipText}>
                {isLowBudget
                  ? "⚠️ You're close to your budget limit. Consider reducing non-essential expenses for the rest of the month."
                  : "💡 You're managing your budget well. Keep tracking your expenses to stay on target."}
              </Text>
            </div>

            <div style={styles.footerContainer}>
              <div style={styles.footerLine}></div>
              <Text style={styles.footer}>
                Thank you for using <span style={styles.brandName}>PocketMind</span>. Keep tracking your finances for better
                financial health!
              </Text>
            </div>
          </Container>
        </Body>
      </Html>
    )
  }
}

// Helper functions
const formatCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

// Category colors for visual distinction
const categoryColors = [
  "#3b82f6", // blue
  "#10b981", // green
  "#f59e0b", // amber
  "#8b5cf6", // purple
  "#ef4444", // red
  "#06b6d4", // cyan
  "#ec4899", // pink
]

const styles = {
  body: {
    backgroundColor: "#f8fafc",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    margin: "0",
    padding: "0",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 24px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    maxWidth: "600px",
  },
  header: {
    marginBottom: "32px",
  },
  headerLine: {
    height: "4px",
    width: "80px",
    backgroundColor: "#3b82f6",
    borderRadius: "2px",
    marginTop: "16px",
  },
  title: {
    color: "#1e293b",
    fontSize: "28px",
    fontWeight: "700",
    margin: "0",
    textAlign: "left",
  },
  greeting: {
    color: "#1e293b",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0 0 16px",
  },
  text: {
    color: "#475569",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0 0 24px",
  },
  highlight: {
    backgroundColor: "#dbeafe",
    color: "#3b82f6",
    padding: "2px 6px",
    borderRadius: "4px",
    fontWeight: "500",
  },
  statsContainer: {
    margin: "24px 0 32px",
    padding: "0",
  },
  statGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "16px",
  },
  stat: {
    flex: "1",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  statLabel: {
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0 0 8px",
  },
  statValue: {
    color: "#1e293b",
    fontSize: "24px",
    fontWeight: "700",
    margin: "0",
  },
  section: {
    marginTop: "32px",
    padding: "24px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  sectionHeading: {
    color: "#1e293b",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0 0 20px",
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
  },
  categoryInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  categoryDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  categoryName: {
    color: "#334155",
    fontSize: "15px",
    fontWeight: "500",
    margin: "0",
  },
  categoryAmount: {
    color: "#334155",
    fontSize: "15px",
    fontWeight: "600",
    margin: "0",
  },
  insightsSection: {
    marginTop: "32px",
    padding: "24px",
    backgroundColor: "#f0f9ff",
    borderRadius: "8px",
    border: "1px solid #bae6fd",
  },
  insightsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  insightItem: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
  },
  insightBullet: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  insightText: {
    color: "#334155",
    fontSize: "15px",
    lineHeight: "1.5",
    margin: "0",
  },
  progressBarContainer: {
    height: "12px",
    backgroundColor: "#e2e8f0",
    borderRadius: "6px",
    overflow: "hidden",
    margin: "16px 0 24px",
  },
  progressBar: {
    height: "100%",
    borderRadius: "6px",
  },
  tipContainer: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  tipText: {
    color: "#475569",
    fontSize: "15px",
    margin: "0",
    lineHeight: "1.5",
  },
  footerContainer: {
    marginTop: "40px",
  },
  footerLine: {
    height: "1px",
    backgroundColor: "#e2e8f0",
    marginBottom: "20px",
  },
  footer: {
    color: "#64748b",
    fontSize: "14px",
    textAlign: "center",
    margin: "0",
    lineHeight: "1.5",
  },
  brandName: {
    fontWeight: "600",
    color: "#3b82f6",
  },
}

