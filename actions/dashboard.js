"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const serializeTransaction = (obj) => {
    const serialized = {...obj};

    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) {
            throw new Error("Unauthorized");
        }

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }

        //Convert balance to float before saving
        const balance = parseFloat(data.balance);
        if(isNaN(balanceFloat)){
            throw new Error("Invalid balance amount");
        }

        //Checkif this is the user's first account
        const existingAccounts = await db.account.findMany({
            where: {
                userId: user.id
            }
        })

        const shouldBeDefault = existingAccounts.length === 0? true : data.isDefault;

        if(shouldBeDefault){
            //Update all existing accounts to isDefault: false
            await db.account.updateMany({
                where: {
                    userId: user.id, isDefault: true
                },
                data: {
                    isDefault: false
                }
            })
        }

        const account = await db.account.create({
            data: {
                ...data,
                balance: balance,
                isDefault: shouldBeDefault,
                userId: user.id
            }
        })

        const serializedAccount = serializeTransaction(account);

        revalidatePath(`/dashboard`)
        return {success: true, data : serializedAccount};
    } catch (error) {
        throw new Error(error.message);
    }
}