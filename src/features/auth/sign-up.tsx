"use client"
import Link from 'next/link'
import AuthWrapper from './auth-wrapper'
import { Form, Formik } from "formik"
import { routes } from '@/lib/routes'
import FormikInput from '@/components/forms/input'
import FormikMaskedInput from '@/components/forms/masked-input'
import { Button } from '@/components/ui/button'
import { signUpSchema, SignUpSchemaType } from '@/validations/auth'
import useDynamicMutation from '@/lib/api/use-post-data'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'

function SignUp() {
  const postMutation = useDynamicMutation({})

  const handleSignUp = async (values: SignUpSchemaType) => {
    try {
      await postMutation.mutateAsync({
        url: `/`,
        method: "POST",
        body: {
          name: values.name,
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
            Create an account
          </h1>
          <p className="text-sm text-neutral-600">
            Enter your details below
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            username: "",
            password: ""
          }}
          validationSchema={signUpSchema}
          onSubmit={(val) => handleSignUp(val)}
          className="space-y-6"
        >
          {() => (
            <Form>
              <FormikInput
                id="name"
                name="name"
                placeholder="Name"
              />
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
                  {postMutation.isPending ? "Creating Account..." : "Create Account"}
                </Button>

              </div>
            </Form>
          )}

        </Formik>

        <div className="mt-8 text-center text-sm text-neutral-600">
          <span>Already have account? </span>
          <Link
            href={routes.signIn}
            className="text-neutral-900 font-medium underline underline-offset-4 hover:text-[#DB4444] transition-colors ml-1 cursor-pointer"
          >
            Log in
          </Link>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default SignUp