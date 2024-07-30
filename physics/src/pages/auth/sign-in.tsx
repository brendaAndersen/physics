import { Helmet } from "react-helmet-async";
import { Label } from "./../../components/ui/label";
import { Input } from "./../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignInForm>();
  
  async function handleSignIn(data: SignInForm){
    try{
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      toast.success('An email with a auth link was send to you!', {
        action: {
          label: "Resend",
          onClick: () => handleSignIn(data)
        },
      })
    } catch(err){
      toast.error("Invalid auth")
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">
            New user
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-muted-foreground text-sm">
              think <s>like a proton</s> and stay <s>positive</s> with us!
            </p>
          </div>
          {/* Higher-order function */}
          <form onSubmit={handleSubmit(handleSignIn)} action="" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input {...register("email")} id="email" type="email"></Input>
            </div>
            <Button disabled={isSubmitting} type="submit">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
}
