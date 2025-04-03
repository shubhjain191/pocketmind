import CreateAccountDrawer from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
import { getUserAccounts } from '@/actions/dashboard'
import AccountCard from '@/app/(main)/dashboard/_components/account-card'

async function DashboardPage() {

    const accounts = await getUserAccounts()

    return (
        <div className='px-5'>
            {/* Budget Progress*/}

            {/* Overview*/}

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

export default DashboardPage