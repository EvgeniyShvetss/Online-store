import React, { memo } from "react"
import { string } from "prop-types"
import { Alert } from "antd"
import cn from "classnames"
import "./errorBoundaries.scss"

export const ErrorBoundaries = ({ className = "" }) => (
  <div className={cn("error-boundaries", className)}>
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>
)

ErrorBoundaries.propTypes = {
  className: string.isRequired,
}

export default memo(ErrorBoundaries)
