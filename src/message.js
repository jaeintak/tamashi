import React, { useState } from "react";
import { Dialog } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'

export const BattleLog = ({ log }) => {
  const [logOpen, setLogOpen] = useState(false)

  const openLog = () => {
    setLogOpen(true)
  }
  const closeLog = () => {
    setLogOpen(false)
  }
  return (
    <>
      <ShowLog onClick={openLog}>Show Entire Log</ShowLog>
      <Dialog open={logOpen} onClose={closeLog}>
        <MuiDialogTitle id="customized-dialog-title" onClose={closeLog}>
          Entire Log
        </MuiDialogTitle>
      </Dialog>
    </>
  )
}