import { CreateAccountDrawer } from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
import { getUserAccounts } from '@/actions/dashboard'
import AccountCard from '@/app/(main)/dashboard/_components/account-card'
import { getCurrentBudget } from '@/actions/budget'
import { BudgetProgress } from '@/app/(main)/dashboard/_components/budget-progress'
import { DashboardOverview } from "./_components/transaction-overview";
import { Suspense } from "react";
import { getDashboardData } from "@/actions/dashboard";

export default async function DashboardPage() {
    const [accounts, transactions] = await Promise.all([
        getUserAccounts(),
        getDashboardData(),
    ]);

    const defaultAccount = accounts?.find((account) => account.isDefault);

    // Get budget for default account
    let budgetData = null;
    if (defaultAccount) {
        budgetData = await getCurrentBudget(defaultAccount.id);
    }


    return (
        <div className='px-5'>
            {/* Budget Progress*/}
            <div className="mb-8">
                <BudgetProgress
                    initialBudget={budgetData?.budget}
                    currentExpenses={budgetData?.currentExpenses || 0}
                />
            </div>

            {/* Overview*/}
            <DashboardOverview
                accounts={accounts}
                transactions={transactions || []}
            />

            {/* Accounts Grid*/}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <CreateAccountDrawer>
                    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500/20 bg-white/50 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                            <Plus className="h-10 w-10 mb-2 text-blue-600 hover:scale-110 transition-transform duration-300" />
                            <p className="text-lg font-medium text-gray-700">Add New Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>

                {accounts.length > 0 && accounts?.map((account) => {
                    return <AccountCard key={account.id} account={account} />
                })}
            </div>
        </div>
    )
}