import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

/**
 * Универсальная кнопка на основе MUI
 * @param {string} children - Текст кнопки
 * @param {function} onClick - Обработчик клика
 * @param {string} variant - Тип кнопки (contained/outlined/text)
 * @param {string} color - Цвет (primary/secondary/error и т.д.)
 * @param {object} sx - Кастомные стили MUI
 */
export const Button = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  sx = {},
}) => {
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
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.string,
  sx: PropTypes.object,
};
