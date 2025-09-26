'use client';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
    };

    const handleSocialLogin = (provider: "google" | "github") => {
        signIn("google", {
            callbackUrl: '/dashboard'
        });
    };

    return (
        <div className="flex flex-col gap-6 border-[2px] border-black p-10 rounded-lg w-full">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john@example.com"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </div>
            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3 mt-4">
                <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleSocialLogin("github")}
                >
                    {/* GitHub */}
                    <Image
                        src="https://img.icons8.com/ios-glyphs/24/github.png"
                        alt="GitHub"
                        className="w-5 h-5"
                        width={20}
                        height={20}
                    />
                    Login with GitHub
                </Button>

                <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleSocialLogin("google")}
                >
                    {/* Google */}
                    <Image
                        src="https://img.icons8.com/color/24/google-logo.png"
                        alt="Google"
                        className="w-5 h-5"
                        width={20}
                        height={20}
                    />
                    Login with Google
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" replace className="underline underline-offset-4">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;