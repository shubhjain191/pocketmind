"use client"

import React, { useEffect } from 'react'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { accountSchema } from '@/app/lib/schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from './ui/switch'
import { Button } from './ui/button'
import useFetch from '@/hooks/use-fetch'
import { Loader2 } from 'lucide-react'
import { createAccount } from "@/actions/dashboard"
import { toast } from 'sonner'

const CreateAccountDrawer = ({ children }) => {

    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,
    } = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: "",
            type: "CURRENT",
            balance: "",
            isDefault: false,
        }
    })

    const {
        data: newAccount,
        error,
        fn: createAccountFn,
        loading: createAccountLoading } = useFetch(createAccount)

        useEffect(() => {
            if (newAccount && !createAccountLoading) {
                toast.success("Account created successfully")
                reset()
                setOpen(false)
            }
        }, [createAccountLoading, newAccount])

        useEffect(() => {
            if (error) {
                toast.error(error.message || "Failed to create account"); 
            }
        }, [])
        

    const onSubmit = async (data) => {
        await createAccountFn(data)
    }
    return (
        <div className="w-full">
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>{children}</DrawerTrigger>
                <DrawerContent className="p-6 bg-white rounded-t-2xl shadow-lg">
                    <DrawerHeader className="px-0">
                        <DrawerTitle className="text-2xl font-semibold text-gray-900">Create New Account</DrawerTitle>
                    </DrawerHeader>
                    <div className="mt-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Account Name</label>
                                <Input
                                    id="name"
                                    placeholder="e.g., Main Checking"
                                    className="w-full border-gray-300 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-gray-700">Account Type</label>
                                <Select
                                    onValueChange={(value) => setValue("type", value)}
                                    defaultValue={watch("type")}
                                >
                                    <SelectTrigger id="type" className="w-full border-gray-300 focus:ring-blue-900 focus:border-blue-900 transition-colors">
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="CURRENT" className="hover:bg-blue-50">Current</SelectItem>
                                        <SelectItem value="SAVINGS" className="hover:bg-blue-50">Savings</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.type && (
                                    <p className="text-sm text-red-500">{errors.type.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="balance" className="text-sm font-medium text-gray-700">Initial Balance</label>
                                <Input
                                    id="balance"
                                    placeholder="0.00"
                                    type="number"
                                    step="0.01"
                                    className="w-full border-gray-300 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                                    {...register("balance")}
                                />
                                {errors.balance && (
                                    <p className="text-sm text-red-500">{errors.balance.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label htmlFor="isDefault" className="text-sm font-medium text-gray-700">Set as Default</label>
                                        <p className="text-sm text-gray-500">This account will be selected by default for transactions</p>
                                    </div>
                                    <Switch
                                        id="isDefault"
                                        onCheckedChange={(checked) => setValue("isDefault", checked)}
                                        checked={watch("isDefault")}
                                        className="data-[state=checked]:bg-blue-900"
                                        {...register("isDefault")}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 mt-8">
                                <DrawerClose asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </Button>
                                </DrawerClose>
                                <Button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-900 text-white hover:bg-blue-800 transition-colors"
                                    disabled={createAccountLoading}
                                >
                                    {createAccountLoading ? (
                                        <>
                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                            Creating...
                                        </>
                                    ) :
                                        ("Create Account")}
                                </Button>
                            </div>
                        </form>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default CreateAccountDrawer