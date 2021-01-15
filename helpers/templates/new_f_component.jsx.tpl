import React, { memo } from "react"
import { string } from "prop-types"
import cn from "classnames"
import "./%%camelCase%%.scss"

export const %%pascalCase%% = ({ className = "" }) => {

  return (
    <div className={cn("%%delimiterSplitter%%", className)}>
      <span>{className}</span>
    </div>
  )
}

%%pascalCase%%.propTypes = {
  className: string,
}

export default memo(%%pascalCase%%)
