import React from 'react'
import Table from 'react-bootstrap/Table'

const Stats = (props) => {
  const d = props.stats
  return (
    <Table striped bordered variant="dark">
      <tbody>
        <tr>
          <td>Strength: {d.strength}</td>
          <td>Dexterity: {d.dexterity}</td>
          <td>Constitution: {d.constitution}</td>
        </tr>
        <tr>
          <td>Intelligence: {d.intelligence}</td>
          <td>Wisdom: {d.wisdom}</td>
          <td>Charisma: {d.charisma}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Stats
