import { Helmet } from "react-helmet-async";
// import { Label } from "./../../components/ui/label";
// import { Input } from "./../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { toast } from "sonner";
import { Link, redirect } from "react-router-dom";
// import { signIn } from "../../api/sign-in";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignInForm>();
//  const { mutateAsync: authenticate } = useMutation({
//     mutationFn: signIn,
//   })
  const navigate = useNavigate();

  async function handleSignIn(data: SignInForm){
    try{
      console.log(data)
      api.post('/auth/login', {
        email: data.email,
        password: data.password
      }).then(async (response) => {
        toast.success('Success!', {
          action: {
            label: "Ok!",
            onClick: () => navigate("/")
          },
        })

      })
      .catch((error) => toast.error("Invalid auth", error)
    )
      // await authenticate({ email: data.email, password: data.password })
      // await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // toast.success('An email with a auth link was send to you!', {
      //   action: {
      //     label: "Resend",
      //     onClick: () => handleSignIn(data)
      //   },
      // })
      
    } catch(err){
      toast.error("Invalid auth")
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="link" asChild className="text-sky-500 hover:text-sky-700 absolute right-8 top-8">
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
             <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("password")}
              name="password"
              type="password"
              id="password"
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
              Password
            </label>
            </div>
            </div>
            <Button disabled={isSubmitting} className="bg-sky-500 hover:bg-sky-700" type="submit">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
}
function useMutation(arg0: { mutationFn: ({ email, password }: import("../../api/sign-in").SignInBody) => Promise<void>; }): { mutateAsync: any; } {
  throw new Error("Function not implemented.");
}

