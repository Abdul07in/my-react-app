import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/slices/userinformation';
import '../../styles/auth.css';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    console.log('Login attempt with:', formData);
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log('Google login clicked');
  };

  const handleGithubLogin = () => {
    // TODO: Implement GitHub OAuth
    console.log('GitHub login clicked');
  };

  return (
    <div className='auth-container'>
      <div className='auth-box'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='auth-form'>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type='submit' className='auth-button'>
            Login
          </button>
        </form>

        <div className='social-login'>
          <button onClick={handleGoogleLogin} className='social-button google'>
            <i className='bi bi-google'></i> Login with Google
          </button>
          <button onClick={handleGithubLogin} className='social-button github'>
            <i className='bi bi-github'></i> Login with GitHub
          </button>
        </div>

        <p className='auth-footer'>
          Don't have an account? <Link to='/register'>Register here</Link>
        </p>
      </div>
    </div>
  );
}
