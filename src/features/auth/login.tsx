"use client"
import AuthWrapper from './auth-wrapper'
import { Form, Formik } from 'formik'
import FormikInput from '@/components/forms/input'
import FormikMaskedInput from '@/components/forms/masked-input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import useDynamicMutation from '@/lib/api/use-post-data'
import { LoginSchemaType, loginSchema } from '@/validations/auth'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

function Login() {
  const postMutation = useDynamicMutation({})

  const handleLogin = async (values: LoginSchemaType) => {
    try {
      await postMutation.mutateAsync({
        url: `token/`,
        method: "POST",
        body: {
          username: values.username,
          password: values.password
        },
        onSuccess: (res) => {
          signIn("credentials", {
            data: JSON.stringify(res),
            callbackUrl: "/",
          });
          toast.loading("Login Successful, Redirecting...");
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AuthWrapper>
      <div className="max-w-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-2">
            Log in to Exclusive
          </h1>
          <p className="text-sm text-neutral-600">
            Enter your details below
          </p>
        </div>

        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={loginSchema}
          onSubmit={(val) => handleLogin(val)}
          className="space-y-6">
          {() => (
            <Form>
              <FormikInput
                id="username"
                name="username"
                placeholder="Username"
              />
              <FormikMaskedInput
                id="password"
                name="password"
                placeholder="Password"
              />

              <div className="pt-5 space-y-4">
                <Button
                  type="submit"
                  disabled={postMutation.isPending}
                  className="w-full bg-[#DB4444] hover:bg-[#c23b3b] text-white py-5 rounded-md text-sm font-medium transition-all shadow-xs"
                >
                  {postMutation.isPending ? "Logging In..." : "Log In"}
                </Button>

              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-8 text-center text-sm text-neutral-600">
          <span>{"Don't have an account?"}</span>
          <Link
            href={routes.signUp}
            className="text-neutral-900 font-medium underline underline-offset-4 hover:text-[#DB4444] transition-colors ml-1 cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default Login