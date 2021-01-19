import React, { memo } from "react"
import { string } from "prop-types"
import cn from "classnames"
import "./header.scss"

export const Header = ({ className = "" }) => (
  <div className={cn("header", className)}>
    <span>{className}</span>
  </div>
)

Header.propTypes = {
  className: string.isRequired,
}

export default memo(Header)
