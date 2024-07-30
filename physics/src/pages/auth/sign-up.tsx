import { Helmet } from "react-helmet-async";
import { Label } from "./../../components/ui/label";
import { Input } from "./../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const signUpForm = z.object({
    name: z.string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignUpForm>();
  
  async function handleSignUp(data: SignUpForm){
    try{
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      toast.success('An email with a auth link was send to you!', {
        action: {
          label: "Resend",
          onClick: () => handleSignUp(data)
        },
      })
    } catch(err){
      toast.error("Invalid auth")
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
      <Button variant="outline" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">
          Fazer login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign Out</h1>
            <p className="text-muted-foreground text-sm">
              Create account
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} action="" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input {...register("name")} id="name" type="text"></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input {...register("email")} id="email" type="email"></Input>
            </div>
            <Button disabled={isSubmitting} type="submit">Create</Button>
          </form>
        </div>
      </div>
    </>
  );
}
