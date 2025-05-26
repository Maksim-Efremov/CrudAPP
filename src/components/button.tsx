import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  /**
   * Содержимое кнопки
   */
  children: ReactNode;
  /**
   * Тип кнопки (contained/outlined/text)
   * @default 'contained'
   */
  variant?: "contained" | "outlined" | "text";
  /**
   * Цвет кнопки (primary/secondary/error и т.д.)
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /**
   * Кастомные стили MUI
   */
  sx?: MuiButtonProps["sx"];
}

export const Button = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  sx = {},
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        fontWeight: 600,
        textTransform: "none", // Отключаем uppercase
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
