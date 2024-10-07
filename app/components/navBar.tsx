"use client";

import { SignIn, SignInButton, SignOutButton, useSession } from '@clerk/nextjs'
import React from 'react'

const NavBar = () => {
    const { session } = useSession();
  return (
    <div>
        {!session ? <SignInButton /> : <SignOutButton />}
    </div>
  )
}

export default NavBar
