import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignInForm>();
  const navigate = useNavigate();

  async function handleSignIn(data: SignInForm){
    try{
      // await authenticate({email: data.email, password:data.password})
      await api.post('/auth/login', {
        email: data.email,
        password: data.password
      }).then(async (response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);

        toast.success('Success!', {
          action: {
            label: "Ok!",
            onClick: () => navigate("/")
          },
        })

      })
      .catch((error) => toast.error("Invalid auth", error)
    )
      
    } catch(err){
      toast.error("Invalid auth")
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex lg:w-72 small:w-32 md:w-56 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
              <Button variant="link" asChild className="small:invisible text-sky-500 hover:text-sky-700 absolute right-8 top-8 md:right-[-10px] md:bottom-[260px]">
                <Link to="/sign-up">
                  New user
                </Link>
              </Button>
            </div>
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
                  focus:ring-0 focus:border-violet-250 peer font-medium
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
            <Button variant="link" asChild className="small:visible text-sky-500 hover:text-sky-700 absolute">
                <Link to="/sign-up">
                  New user
                </Link>
              </Button>
          </form>
        </div>
      </div>
    </>
  );
}
