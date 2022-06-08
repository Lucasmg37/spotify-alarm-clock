import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import React, { useEffect } from 'react';
import Me from '../services/Me';

import style from '../styles/Login.module.scss';

const Login: React.FC = () => {

  const router = useRouter()

  const initLogin = async (accessToken: string) => {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)

      try {
        await getLoggedUser()
        router.push('/')

      } catch (error) {
        window.location.href = 'https://alarm-spotify.herokuapp.com/auth/login'
      }

    } else {
      window.location.href = 'https://alarm-spotify.herokuapp.com/auth/login'
    }

  }

  const getLoggedUser = async () => {
    const meService = new Me();
    await meService.get()
  }


  useEffect(() => {

    if (!router.isReady) {
      return
    }
    initLogin(router.query?.access_token as string)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return <div className={style.loginModule} >
    <div>Autenticando</div>
  </div>;
}

export default Login;