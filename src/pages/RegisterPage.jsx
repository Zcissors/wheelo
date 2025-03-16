import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Register</h1>
      
      <div className="max-w-md mx-auto">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage