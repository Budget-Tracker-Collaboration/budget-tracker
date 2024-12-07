"use server";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function createExpense(formData: FormData) {

    const expenseName = formData.get('expenseName') as string;
    const expenseAmount = formData.get('expenseAmount') as string;
    const expenseMonth = formData.get('expenseMonth') as string;


    if (!expenseName.trim()) {
        return;
    }
    await prisma.expense.create({
        data: {
            name: expenseName,
            amount: expenseAmount,
            month: expenseMonth
        }
    })
    revalidatePath('/profile')
}