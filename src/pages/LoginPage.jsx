import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
      
      <div className="max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage