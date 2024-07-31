import { Helmet } from "react-helmet-async";
// import { Label } from "./../../components/ui/label";
// import { Input } from "./../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
    name: z.string(),
    email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignUpForm>();
  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm){
    try{
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      toast.success('User registered!', {
        action: {
          label: "Resend",
          onClick: () => navigate('sign-in')
        },
      })
    } catch(err){
      toast.error("Error registering the user")
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="grid gap-40 p-8">
        <Button variant="ghost" asChild className="absolute right-8">
          <Link to="/sign-in">
          Fazer login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
            <p className="text-muted-foreground text-sm">
              Create account
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} action="" className="space-y-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="name"
              {...register("name")}
              type="text"
              name="name"
              className="text-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 dark:focus:border-violet-250 focus:outline-none focus:ring-0 focus:border-violet-250 peer font-thin"
              placeholder=" "
              required
            />
            <label className="text-violet-250 font-bold peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-bold">
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email")}
              name="email"
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent 
          border-0 border-b-2 appearance-none text-white 
          border-gray-600 dark:focus:border-violet-250 focus:outline-none 
          focus:ring-0 focus:border-violet-250 peer font-thin
          "
              placeholder=" "
              required
            />
            <label
              className="text-violet-250 font-bold 
          peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-bold"
            >
              E-mail
            </label>
            </div>
            <Button disabled={isSubmitting} className="bg-sky-500 hover:bg-sky-700" type="submit">Create</Button>
          </form>
        </div>
      </div>
    </>
  );
}
