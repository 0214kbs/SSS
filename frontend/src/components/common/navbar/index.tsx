"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbar, StyledNavLink } from "./Navbar.styled";

const NavbarComponent = () => {
  return (
    <header>
      <StyledNavbar>
        <Link href="/">
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>

        <div>
          <StyledNavLink href="/">설문하기</StyledNavLink>
          <StyledNavLink href="/">응답하기</StyledNavLink>
        </div>
        <div>
          <StyledNavLink href="/login">로그인</StyledNavLink>
          <StyledNavLink href="/signup">회원가입</StyledNavLink>
        </div>
      </StyledNavbar>
    </header>
  );
};

export default NavbarComponent;
