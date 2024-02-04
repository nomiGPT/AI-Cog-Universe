import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import clsx from "clsx";

type ButtonProps = {
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
  variant?: "primary" | "outlined" | "danger"
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type,
  children,
  className