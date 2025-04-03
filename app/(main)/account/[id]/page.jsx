import { Suspense } from "react"
import { getAccountWithTransactions } from "@/actions/account"
import { BarLoader } from "react-spinners"
import { TransactionTable } from "../_components/transaction-table"
import { notFound } from "next/navigation"
import { AccountChart } from "../_components/account-chart"
import { ArrowUpRight, CreditCard, DollarSign, TrendingUp } from "lucide-react"

export default async function AccountPage({ params }) {
    const accountData = await getAccountWithTransactions(params.id)

    if (!accountData) {
        notFound()
    }

    const { transactions, ...account } = accountData

    return (
        <div className="max-w-7xl mx-auto space-y-14 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Account Header */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-10 border border-gray-100">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">
                                {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 capitalize mt-2">{account.name}</h1>
                    </div>
                </div>

                {/* Balance Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-md p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-medium text-blue-100">Current Balance</span>
                            <DollarSign className="w-5 h-5 text-blue-100" />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                                ${Number.parseFloat(account.balance).toFixed(2)}
                            </span>
                            <div className="flex items-center text-blue-100 text-sm mt-2">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                <span>{account._count.transactions} Transactions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <Suspense
                fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
            >
                <AccountChart transactions={transactions} />
            </Suspense>

            {/* Transactions Table */}
            <Suspense
                fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
            >
                <TransactionTable transactions={transactions} />
            </Suspense>
        </div>
    )
}

